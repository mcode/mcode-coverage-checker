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
  const coverage = [];
  diseaseStatus.forEach((status) => {
    coverage.push({
      'Evidence Type': fhirpath.evaluate(
        status,
        "Observation.extension.where(url = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-disease-status-evidence-type').exists()",
      )[0],
    });
  });
  const tumors = getTumor(bundle);
  tumors.forEach((tumor) => {
    coverage.push({
      Location: fhirpath.evaluate(tumor, 'BodyStructure.location.exists()')[0],
    });
  });
  const tumorSize = getTumorSize(bundle);
  tumorSize.forEach((size) => {
    coverage.push({
      Method: fhirpath.evaluate(size, 'Observation.method.exists()')[0],
      Component: fhirpath.evaluate(size, 'Observation.component.exists()')[0],
    });
  });
  return coverage;
}

console.log(getOutcomeCoverage(testbundle));

module.exports = {
  getOutcomeCoverage,
};
