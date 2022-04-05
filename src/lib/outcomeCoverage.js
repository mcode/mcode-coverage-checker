const fhirpath = require('fhirpath');
const { getDiseaseStatus, getTumor, getTumorSize, getTumorSpecimen } = require('./resourceUtils');

/**
 * Takes a bundle and returns the coverage of outcome resources in that bundle
 * @param {Object} bundle, an mCODE bundle
 * @return {Object}, an object representing the coverage of the Outcome dection of the mCODE diagram
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
        'Body Structure Identifier': {
          covered: fhirpath.evaluate(
            tumor,
            "BodyStructure.identifier.type.coding.where(system = 'http://hl7.org/fhir/resource-types' and code = 'BodyStructure').exists()",
          )[0],
        },
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
        'Longest Dimension': {
          covered: fhirpath.evaluate(
            size,
            "Observation.component.code.coding.where(system = 'http://loinc.org' and code = '33728-7').exists()",
          )[0],
        },
        'Other Dimension': {
          covered: fhirpath.evaluate(
            size,
            "Observation.component.code.coding.where(system = 'http://loinc.org' and code = '33729-5').exists()",
          )[0],
        },
      },
    });
  });
  const tumorSpecimen = getTumorSpecimen(bundle);
  const tumorSpecimenCoverage = { profile: 'Tumor Specimen', coverage: [] };
  tumorSpecimen.forEach((specimen) => {
    tumorSpecimenCoverage.coverage.push({
      resourceID: fhirpath.evaluate(specimen, 'Specimen.id')[0],
      data: {
        Type: {
          covered: fhirpath.evaluate(
            specimen,
            "Specimen.type.coding.where(code = 'TUMOR' and system = 'http://terminology.hl7.org/CodeSystem/v2-0487').exists()",
          )[0],
        },
      },
    });
  });
  return {
    section: 'Outcome',
    data: [diseaseStatusCoverage, tumorCoverage, tumorSizeCoverage, tumorSpecimenCoverage],
  };
}

module.exports = {
  getOutcomeCoverage,
};
