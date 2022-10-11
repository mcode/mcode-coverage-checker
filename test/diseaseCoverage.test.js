const testBundle = require('./bundles/diseaseBundle.json');
const { getDiseaseCoverage } = require('../src/lib/coverageChecker/diseaseCoverage');

describe('getDiseaseCoverage()', () => {
  const res = getDiseaseCoverage(testBundle);

  test('Section object should have length equal to number of profiles in section', () => {
    expect(res.data.length).toBe(7);
  });

  test('Coverage arrays should have length equal to number of resources of each type in bundle', () => {
    expect(res.data[0].coverage.length).toBe(2);
    expect(res.data[1].coverage.length).toBe(2);
    expect(res.data[2].coverage.length).toBe(2);
    expect(res.data[3].coverage.length).toBe(2);
    expect(res.data[4].coverage.length).toBe(2);
    expect(res.data[5].coverage.length).toBe(2);
    expect(res.data[6].coverage.length).toBe(2);
  });

  test('Coverage arrays should not include non-compliant resources if they do not include a meta.profile element', () => {
    // Iterate through our empty resources and delete their profile arrays
    testBundle.entry
      .filter((entry) => entry.resource.id.startsWith('empty'))
      .forEach((entry) => delete entry.resource.meta.profile);

    const updatedRes = getDiseaseCoverage(testBundle);

    expect(updatedRes.data[0].coverage.length).toBe(1);
    expect(updatedRes.data[1].coverage.length).toBe(1);
    expect(updatedRes.data[2].coverage.length).toBe(1);
    expect(updatedRes.data[3].coverage.length).toBe(1);
    expect(updatedRes.data[4].coverage.length).toBe(1);
    expect(updatedRes.data[5].coverage.length).toBe(1);
    expect(updatedRes.data[6].coverage.length).toBe(1);
  });

  test('All values should be true when tumor marker test has all fields covered', () => {
    const coveredTumorMarker = res.data[0].coverage[1].data;
    expect(coveredTumorMarker['Result Value'].covered).toBe(true);
    expect(coveredTumorMarker['Test Type'].covered).toBe(true);
  });

  test('All values should be false when tumor marker test is missing every field', () => {
    const emptyTumorMarker = res.data[0].coverage[0].data;
    expect(emptyTumorMarker['Result Value'].covered).toBe(false);
    expect(emptyTumorMarker['Test Type'].covered).toBe(false);
  });

  test('All values should be true when primary cancer condition has all fields covered', () => {
    const coveredPrimaryCancer = res.data[1].coverage[1].data;
    expect(coveredPrimaryCancer['Asserted Date'].covered).toBe(true);
    expect(coveredPrimaryCancer['Histology/Morphology'].covered).toBe(true);
    expect(coveredPrimaryCancer['Body Site'].covered).toBe(true);
    expect(coveredPrimaryCancer.Laterality.covered).toBe(true);
    expect(coveredPrimaryCancer['Location Qualifier'].covered).toBe(true);
  });

  test('All values should be false when primary cancer condition is missing every field', () => {
    const emptyPrimaryCancer = res.data[1].coverage[0].data;
    expect(emptyPrimaryCancer['Asserted Date'].covered).toBe(false);
    expect(emptyPrimaryCancer['Histology/Morphology'].covered).toBe(false);
    expect(emptyPrimaryCancer['Body Site'].covered).toBe(false);
    expect(emptyPrimaryCancer.Laterality.covered).toBe(false);
    expect(emptyPrimaryCancer['Location Qualifier'].covered).toBe(false);
  });

  test('All values should be true when secondary cancer condition has all fields covered', () => {
    const coveredSecondaryCancer = res.data[2].coverage[1].data;
    expect(coveredSecondaryCancer['Related Condition'].covered).toBe(true);
  });

  test('All values should be false when secondary cancer condition is missing every field', () => {
    const emptySecondaryCancer = res.data[2].coverage[0].data;
    expect(emptySecondaryCancer['Related Condition'].covered).toBe(false);
  });

  test('All values should be true when stage group has all fields covered', () => {
    const coveredStageGroup = res.data[3].coverage[1].data;
    expect(coveredStageGroup['Staging System'].covered).toBe(true);
    expect(coveredStageGroup['Clinical/Pathological'].covered).toBe(true);
  });

  test('All values should be false when stage group is missing every field', () => {
    const emptyStageGroup = res.data[3].coverage[0].data;
    expect(emptyStageGroup['Staging System'].covered).toBe(false);
    expect(emptyStageGroup['Clinical/Pathological'].covered).toBe(false);
  });

  test('All values should be true when TNM primary tumor category has all fields covered', () => {
    const coveredPrimaryTumor = res.data[4].coverage[1].data;
    expect(coveredPrimaryTumor['Result Value'].covered).toBe(true);
  });

  test('All values should be false when TNM primary tumor category is missing every field', () => {
    const emptyPrimaryTumor = res.data[4].coverage[0].data;
    expect(emptyPrimaryTumor['Result Value'].covered).toBe(false);
  });

  test('All values should be true when TNM distant metastases category has all fields covered', () => {
    const coveredDistantMetastases = res.data[5].coverage[1].data;
    expect(coveredDistantMetastases['Result Value'].covered).toBe(true);
  });

  test('All values should be false when TNM distant metastases category is missing every field', () => {
    const emptyDistantMetastases = res.data[5].coverage[0].data;
    expect(emptyDistantMetastases['Result Value'].covered).toBe(false);
  });

  test('All values should be true when TNM regional nodes category has all fields covered', () => {
    const coveredRegionalNodes = res.data[6].coverage[1].data;
    expect(coveredRegionalNodes['Result Value'].covered).toBe(true);
  });

  test('All values should be false when TNM regional nodes category is missing every field', () => {
    const emptyRegionalNodes = res.data[6].coverage[0].data;
    expect(emptyRegionalNodes['Result Value'].covered).toBe(false);
  });
});
