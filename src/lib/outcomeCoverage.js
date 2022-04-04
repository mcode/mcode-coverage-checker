const fhirpath = require('fhirpath');
const { getDiseaseStatus, getTumor, getTumorSize } = require('./resourceUtils');
const testbundle = require('../../test/fullBundle.json');

/**
 * Takes a bundle and returns the coverage of outcome resources in that bundle
 * @param {Object} bundle, an mCODE bundle
 * @return {Array}, an array of objects where each object has keys corresponding to fields in the mCODE diagram
 * and boolean values indicating if the field is covered
 */
function getOutcomeCoverage(bundle) {
  const diseaseStatus = getDiseaseStatus(bundle);
  const diseaseStatusCoverage = { profile: 'Disease Status', coverage: [] };
  diseaseStatus.forEach((status) => {
    diseaseStatusCoverage.coverage.push({
      resourceID: fhirpath.evaluate(status, 'Observation.id')[0],
      data: {
        'Evidence Type': {
          covered: fhirpath.evaluate(
            status,
            "Observation.extension.where(url = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-disease-status-evidence-type').exists()",
          )[0],
        },
      },
    });
  });
  const tumors = getTumor(bundle);
  const tumorCoverage = { profile: 'Tumor', coverage: [] };
  tumors.forEach((tumor) => {
    tumorCoverage.coverage.push({
      resourceID: fhirpath.evaluate(tumor, 'BodyStructure.id')[0],
      data: {
        Location: { covered: fhirpath.evaluate(tumor, 'BodyStructure.location.exists()')[0] },
      },
    });
  });
  const tumorSize = getTumorSize(bundle);
  const tumorSizeCoverage = { profile: 'Tumor Size', coverage: [] };
  tumorSize.forEach((size) => {
    tumorSizeCoverage.coverage.push({
      resourceID: fhirpath.evaluate(size, 'Observation.id')[0],
      data: {
        Method: { covered: fhirpath.evaluate(size, 'Observation.method.exists()')[0] },
        Component: { covered: fhirpath.evaluate(size, 'Observation.component.exists()')[0] },
      },
    });
  });
  return {
    section: 'Outcome',
    data: [diseaseStatusCoverage, tumorCoverage, tumorSizeCoverage],
  };
}

console.log(JSON.stringify(getOutcomeCoverage(testbundle), null, 2));

module.exports = {
  getOutcomeCoverage,
};
