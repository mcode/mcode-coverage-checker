const testBundle = require('./bundles/treatmentBundle.json');
const { getTreatmentCoverage } = require('../src/lib/coverageChecker/treatmentCoverage');

describe('getTreatmentCoverage()', () => {
  const res = getTreatmentCoverage(testBundle);

  test('Section object should have length equal to number of profiles in section', () => {
    expect(res.data.length).toBe(5);
  });

  test('Coverage arrays should have length equal to number of resources of each type in bundle', () => {
    expect(res.data[0].coverage.length).toBe(2);
    expect(res.data[1].coverage.length).toBe(2);
    expect(res.data[2].coverage.length).toBe(2);
    expect(res.data[3].coverage.length).toBe(2);
    expect(res.data[4].coverage.length).toBe(2);
  });

  test('Coverage arrays should not include non-compliant resources if they do not include a meta.profile element', () => {
    // Iterate through our empty resources and delete their profile arrays
    testBundle.entry
      .filter((entry) => entry.resource.id.startsWith('empty'))
      .forEach((entry) => delete entry.resource.meta);

    const updatedRes = getTreatmentCoverage(testBundle);
    expect(updatedRes.data[0].coverage.length).toBe(1);
    expect(updatedRes.data[1].coverage.length).toBe(1);
    expect(updatedRes.data[2].coverage.length).toBe(1);
    expect(updatedRes.data[3].coverage.length).toBe(1);
    expect(updatedRes.data[4].coverage.length).toBe(1);
  });

  test('All values should be true when cancer related medication request has all fields covered', () => {
    const coveredCRMR = res.data[0].coverage[1].data;
    expect(coveredCRMR.Medication.covered).toBe(true);
    expect(coveredCRMR.Reason.covered).toBe(true);
    expect(coveredCRMR['Procedure Intent'].covered).toBe(true);
    expect(coveredCRMR['Termination Reason'].covered).toBe(true);
  });

  test('All values should be false when cancer related medication request is missing every field', () => {
    const emptyCRMR = res.data[0].coverage[0].data;
    expect(emptyCRMR.Medication.covered).toBe(false);
    expect(emptyCRMR.Reason.covered).toBe(false);
    expect(emptyCRMR['Procedure Intent'].covered).toBe(false);
    expect(emptyCRMR['Termination Reason'].covered).toBe(false);
  });

  test('All values should be true when cancer related medication administration has all fields covered', () => {
    const coveredCRMA = res.data[1].coverage[1].data;
    expect(coveredCRMA.Medication.covered).toBe(true);
    expect(coveredCRMA.Reason.covered).toBe(true);
    expect(coveredCRMA['Procedure Intent'].covered).toBe(true);
    expect(coveredCRMA['Termination Reason'].covered).toBe(true);
  });

  test('All values should be false when cancer related medication administration is missing every field', () => {
    const emptyCRMA = res.data[1].coverage[0].data;
    expect(emptyCRMA.Medication.covered).toBe(false);
    expect(emptyCRMA.Reason.covered).toBe(false);
    expect(emptyCRMA['Procedure Intent'].covered).toBe(false);
    expect(emptyCRMA['Termination Reason'].covered).toBe(false);
  });

  test('All values should be true when cancer related surgical procedure has all fields covered', () => {
    const coveredCRSP = res.data[2].coverage[1].data;
    expect(coveredCRSP['Procedure Code'].covered).toBe(true);
    expect(coveredCRSP['Body Site'].covered).toBe(true);
    expect(coveredCRSP.Laterality.covered).toBe(true);
    expect(coveredCRSP['Location Qualifier'].covered).toBe(true);
  });

  test('All values should be false when cancer related surgical procedure is missing every field', () => {
    const emptyCRSP = res.data[2].coverage[0].data;
    expect(emptyCRSP['Procedure Code'].covered).toBe(false);
    expect(emptyCRSP['Body Site'].covered).toBe(false);
    expect(emptyCRSP.Laterality.covered).toBe(false);
    expect(emptyCRSP['Location Qualifier'].covered).toBe(false);
  });

  test('All values should be true when radiotherapy course summary has all fields covered', () => {
    const coveredRCS = res.data[3].coverage[1].data;
    expect(coveredRCS['No. Sessions'].covered).toBe(true);
    expect(coveredRCS['Modality and Technique'].covered).toBe(true);
    expect(coveredRCS.Modality.covered).toBe(true);
    expect(coveredRCS.Technique.covered).toBe(true);
    expect(coveredRCS['Doses Delivered'].covered).toBe(true);
    expect(coveredRCS['Total Dose'].covered).toBe(true);
    expect(coveredRCS['No. Fractions'].covered).toBe(true);
    expect(coveredRCS['Body Volume'].covered).toBe(true);
  });

  test('All values should be false when cancer related medication request is missing every field', () => {
    const emptyRCS = res.data[3].coverage[0].data;
    expect(emptyRCS['No. Sessions'].covered).toBe(false);
    expect(emptyRCS['Modality and Technique'].covered).toBe(false);
    expect(emptyRCS.Modality.covered).toBe(false);
    expect(emptyRCS.Technique.covered).toBe(false);
    expect(emptyRCS['Doses Delivered'].covered).toBe(false);
    expect(emptyRCS['Total Dose'].covered).toBe(false);
    expect(emptyRCS['No. Fractions'].covered).toBe(false);
    expect(emptyRCS['Body Volume'].covered).toBe(false);
  });

  test('All values should be true when radiotherapy volume has all fields covered', () => {
    const coveredVolume = res.data[4].coverage[1].data;
    expect(coveredVolume['Volume Type'].covered).toBe(true);
    expect(coveredVolume.Location.covered).toBe(true);
    expect(coveredVolume['Location Qualifier'].covered).toBe(true);
  });

  test('All values should be false when radiotherapy volume is missing every field', () => {
    const emptyVolume = res.data[4].coverage[0].data;
    expect(emptyVolume['Volume Type'].covered).toBe(false);
    expect(emptyVolume.Location.covered).toBe(false);
    expect(emptyVolume['Location Qualifier'].covered).toBe(false);
  });
});
