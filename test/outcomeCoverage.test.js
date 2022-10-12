/* eslint-disable global-require */
const testBundle = require('./bundles/outcomeBundle.json');
const { getOutcomeCoverage } = require('../src/lib/coverageChecker/outcomeCoverage');

describe('getOutcomeCoverage()', () => {
  const res = getOutcomeCoverage(testBundle);

  test('Section object should have length equal to number of profiles in section', () => {
    expect(res.data.length).toBe(4);
  });

  test('Coverage arrays should have length equal to number of resources of each type in bundle', () => {
    expect(res.data[0].coverage.length).toBe(2);
    expect(res.data[1].coverage.length).toBe(2);
    expect(res.data[2].coverage.length).toBe(2);
    expect(res.data[3].coverage.length).toBe(2);
  });

  test('Coverage arrays should not include non-compliant resources if they do not include a meta.profile element', () => {
    // Iterate through our empty resources and delete their profile arrays
    const modifiedTestBundle = require('./bundles/outcomeBundle.json');
    modifiedTestBundle.entry
      .filter((entry) => entry.resource.id.startsWith('empty'))
      .forEach((entry) => delete entry.resource.meta.profile); // eslint-disable-line no-param-reassign

    const updatedRes = getOutcomeCoverage(modifiedTestBundle);
    expect(updatedRes.data[0].coverage.length).toBe(1);
    expect(updatedRes.data[1].coverage.length).toBe(1);
    expect(updatedRes.data[2].coverage.length).toBe(1);
    expect(updatedRes.data[3].coverage.length).toBe(1);
  });

  test('Coverage arrays should still include compliant resources if they do not include a meta.profile element', () => {
    // Iterate through all resources and delete their profile arrays
    const modifiedTestBundle = require('./bundles/outcomeBundle.json');
    modifiedTestBundle.entry.forEach((entry) => delete entry.resource.meta.profile); // eslint-disable-line no-param-reassign

    const updatedRes = getOutcomeCoverage(modifiedTestBundle);

    expect(updatedRes.data[0].coverage.length).toBe(1);
    expect(updatedRes.data[1].coverage.length).toBe(1);
    expect(updatedRes.data[2].coverage.length).toBe(1);
    expect(updatedRes.data[3].coverage.length).toBe(1);
  });

  test('All values should be true when disease status has all fields covered', () => {
    const coveredDiseaseStatus = res.data[0].coverage[1].data;
    expect(coveredDiseaseStatus['Evidence Type'].covered).toBe(true);
  });

  test('All values should be false when disease status is missing every field', () => {
    const emptyDiseaseStatus = res.data[0].coverage[0].data;
    expect(emptyDiseaseStatus['Evidence Type'].covered).toBe(false);
  });

  test('All values should be true when tumor has all fields covered', () => {
    const coveredTumor = res.data[1].coverage[1].data;
    expect(coveredTumor['Body Structure Identifier'].covered).toBe(true);
    expect(coveredTumor.Location.covered).toBe(true);
  });

  test('All values should be false when tumor is missing every field', () => {
    const emptyTumor = res.data[1].coverage[0].data;
    expect(emptyTumor['Body Structure Identifier'].covered).toBe(false);
    expect(emptyTumor.Location.covered).toBe(false);
  });

  test('All values should be true when tumor size has all fields covered', () => {
    const coveredSize = res.data[2].coverage[1].data;
    expect(coveredSize.Method.covered).toBe(true);
    expect(coveredSize.Component.covered).toBe(true);
    expect(coveredSize['Longest Dimension'].covered).toBe(true);
    expect(coveredSize['Other Dimension'].covered).toBe(true);
  });

  test('All values should be false when tumor size is missing every field', () => {
    const emptySize = res.data[2].coverage[0].data;
    expect(emptySize.Method.covered).toBe(false);
    expect(emptySize.Component.covered).toBe(false);
    expect(emptySize['Longest Dimension'].covered).toBe(false);
    expect(emptySize['Other Dimension'].covered).toBe(false);
  });

  test('All values should be true when tumor specimen has all fields covered', () => {
    const coveredSpecimen = res.data[3].coverage[1].data;
    expect(coveredSpecimen.Type.covered).toBe(true);
  });

  test('All values should be false when tumor specimen is missing every field', () => {
    const emptySpecimen = res.data[3].coverage[0].data;
    expect(emptySpecimen.Type.covered).toBe(false);
  });
});
