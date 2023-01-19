import testBundle from './bundles/patientBundle.json';
import getPatientCoverage from '../src/lib/coverageChecker/patientCoverage';

describe('getPatientCoverage()', () => {
  const res = getPatientCoverage(testBundle);

  test('Section object should have length equal to number of profiles in section', () => {
    expect(res.data.length).toBe(1);
  });

  test('Coverage array should have length equal to number of patients in bundle', () => {
    expect(res.data[0].coverage.length).toBe(2);
  });

  test('All values should be true when patient has all fields covered', () => {
    expect(res.data[0].coverage[1].data.Name.covered).toBe(true);
    expect(res.data[0].coverage[1].data['Contact Info'].covered).toBe(true);
    expect(res.data[0].coverage[1].data['Birth Date'].covered).toBe(true);
    expect(res.data[0].coverage[1].data.Gender.covered).toBe(true);
    expect(res.data[0].coverage[1].data['Zip Code'].covered).toBe(true);
    expect(res.data[0].coverage[1].data['US Core Race'].covered).toBe(true);
    expect(res.data[0].coverage[1].data['US Core Ethnicity'].covered).toBe(true);
    expect(res.data[0].coverage[1].data.Deceased.covered).toBe(true);
  });

  test('All values should be false when patient is missing every field', () => {
    expect(res.data[0].coverage[0].data.Name.covered).toBe(false);
    expect(res.data[0].coverage[0].data['Contact Info'].covered).toBe(false);
    expect(res.data[0].coverage[0].data['Birth Date'].covered).toBe(false);
    expect(res.data[0].coverage[0].data.Gender.covered).toBe(false);
    expect(res.data[0].coverage[0].data['Zip Code'].covered).toBe(false);
    expect(res.data[0].coverage[0].data['US Core Race'].covered).toBe(false);
    expect(res.data[0].coverage[0].data['US Core Ethnicity'].covered).toBe(false);
    expect(res.data[0].coverage[0].data.Deceased.covered).toBe(false);
  });
});
