const testBundle = require('./bundles/assessmentBundle.json');
const { getAssessmentCoverage } = require('../src/lib/coverageChecker/assessmentCoverage');

describe('getAssessmentCoverage()', () => {
  let res = getAssessmentCoverage(testBundle);

  test('Section object should have length equal to number of profiles in section', () => {
    expect(res.data.length).toBe(3);
  });

  test('Coverage arrays should have length equal to number of resources of each type in bundle', () => {
    expect(res.data[0].coverage.length).toBe(2);
    expect(res.data[1].coverage.length).toBe(2);
    expect(res.data[2].coverage.length).toBe(2);
  });

  test('Coverage arrays should not include non-compliant resources if they do not include a meta.profile element', () => {
    let emptyComorbidity = testBundle.entry.find((entry) => entry.resource.id === 'empty-comorbidities');
    delete emptyComorbidity.resource.meta;

    let emptyECOG = testBundle.entry.find((entry) => entry.resource.id === 'empty-ecog');
    delete emptyECOG.resource.meta;

    let emptyKarnof = testBundle.entry.find((entry) => entry.resource.id === 'empty-karnofsky');
    delete emptyKarnof.resource.meta;

    let updatedRes = getAssessmentCoverage(testBundle);
    expect(updatedRes.data[0].coverage.length).toBe(1);
    expect(updatedRes.data[1].coverage.length).toBe(1);
    expect(updatedRes.data[2].coverage.length).toBe(1);
  });

  test('All values should be true when Karnofsky performance status has all fields covered', () => {
    const coveredKarnofsky = res.data[0].coverage[1].data;
    expect(coveredKarnofsky.Score.covered).toBe(true);
    expect(coveredKarnofsky.Interpretation.covered).toBe(true);
  });

  test('All values should be false when Karnofsky performance status is missing every field', () => {
    const emptyKarnofsky = res.data[0].coverage[0].data;
    expect(emptyKarnofsky.Score.covered).toBe(false);
    expect(emptyKarnofsky.Interpretation.covered).toBe(false);
  });

  test('All values should be true when comorbidities has all fields covered', () => {
    const coveredComorbidities = res.data[1].coverage[1].data;
    expect(coveredComorbidities['Risk Score'].covered).toBe(true);
    expect(coveredComorbidities['Present/Absent'].covered).toBe(true);
    expect(coveredComorbidities['Condition Code'].covered).toBe(true);
    expect(coveredComorbidities['Condition Reference'].covered).toBe(true);
  });

  test('All values should be false when comorbidities is missing every field', () => {
    const emptyComorbidities = res.data[1].coverage[0].data;
    expect(emptyComorbidities['Risk Score'].covered).toBe(false);
    expect(emptyComorbidities['Present/Absent'].covered).toBe(false);
    expect(emptyComorbidities['Condition Code'].covered).toBe(false);
    expect(emptyComorbidities['Condition Reference'].covered).toBe(false);
  });

  test('All values should be true when ECOG performance status has all fields covered', () => {
    const coveredECOG = res.data[2].coverage[1].data;
    expect(coveredECOG.Score.covered).toBe(true);
    expect(coveredECOG.Interpretation.covered).toBe(true);
  });

  test('All values should be false when ECOG performance status is missing every field', () => {
    const emptyECOG = res.data[2].coverage[0].data;
    expect(emptyECOG.Score.covered).toBe(false);
    expect(emptyECOG.Interpretation.covered).toBe(false);
  });
});
