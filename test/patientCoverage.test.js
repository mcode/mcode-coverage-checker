const testBundle = require('./patientBundle.json');
const { getPatientCoverage } = require('../src/lib/patientCoverage');

describe('getPatientCoverage()', () => {
  const res = getPatientCoverage(testBundle);

  test('Result should have length equal to number of patients in bundle', () => {
    expect(res.length).toBe(2);
  });

  test('All values should be true when patient has all fields covered', () => {
    expect(res[1].Name).toBe(true);
    expect(res[1]['Contact Info']).toBe(true);
    expect(res[1]['Birth Date']).toBe(true);
    expect(res[1].Gender).toBe(true);
    expect(res[1]['Zip Code']).toBe(true);
    expect(res[1]['US Core Race']).toBe(true);
    expect(res[1]['US Core Ethnicity']).toBe(true);
  });

  test('All values should be false when patient is missing every field', () => {
    expect(res[0].Name).toBe(false);
    expect(res[0]['Contact Info']).toBe(false);
    expect(res[0]['Birth Date']).toBe(false);
    expect(res[0].Gender).toBe(false);
    expect(res[0]['Zip Code']).toBe(false);
    expect(res[0]['US Core Race']).toBe(false);
    expect(res[0]['US Core Ethnicity']).toBe(false);
  })
});