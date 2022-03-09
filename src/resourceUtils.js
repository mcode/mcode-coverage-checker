const fhirpath = require('fhirpath');
const testBundle = require('./bundle.json');

// Patient

function getPatient(bundle) {
  return fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-patient')",
  );
}

// Outcome

function getDiseaseStatus(bundle) {
  return fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-disease-status')",
  );
}

function getTumor(bundle) {
  return fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-tumor')",
  );
}

function getTumorSize(bundle) {
  return fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-tumor-size')",
  );
}

function getTumorSpecimen(bundle) {
  return fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-tumor-specimen')",
  );
}

function getBodyStructureIdentifier(bundle) {
  return fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-body-structure-identifier')",
  );
}

// Disease

function getTumorMarkerTest(bundle) {
  return fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-tumor-marker-test')",
  );
}

function getSecondaryCancerCondition(bundle) {
  return fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-secondary-cancer-condition')",
  );
}

function getPrimaryCancerCondition(bundle) {
  return fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-primary-cancer-condition')",
  );
}

function getStageGroup(bundle) {
  return fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-stage-group')",
  );
}

function getTNMPrimaryTumorCategory(bundle) {
  return fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-tnm-primary-tumor-category')",
  );
}

function getTNMDistantMetastasesCategory(bundle) {
  return fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-tnm-distant-metastases-category')",
  );
}

function getTNMRegionalNodesCategory(bundle) {
  return fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-tnm-regional-nodes-category')",
  );
}

// Genomics

function getGenomicsReport(bundle) {
  return fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-genomics-report')",
  );
}

function getGenomicSpecimen(bundle) {
  return fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-genomic-specimen')",
  );
}

function getGenomicVariant(bundle) {
  return fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-genomic-variant')",
  );
}

function getGenomicRegionStudied(bundle) {
  return fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-genomic-region-studied')",
  );
}

// Assessment

function getKarnofskyPerformanceStatus(bundle) {
  return fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-karnofsky-performance-status')",
  );
}

function getComorbidities(bundle) {
  return fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-comorbidities-elixhauser')",
  );
}

function getECOGPerfomanceStatus(bundle) {
  return fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-ecog-performance-status')",
  );
}

// Treatment

function getCancerRelatedMedicationRequest(bundle) {
  return fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-related-medication-request')",
  );
}

function getCancerRelatedMedicationAdministration(bundle) {
  return fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-related-medication-administration')",
  );
}

function getCancerRelatedSurgicalProcedure(bundle) {
  return fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-related-surgical-procedure')",
  );
}

function getRadiotherapyCourseSummary(bundle) {
  return fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-course-summary')",
  );
}

function getRadiotherapyVolume(bundle) {
  return fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-volume')",
  );
}

console.log(getPatient(testBundle));
console.log(getTumorMarkerTest(testBundle));
console.log(getComorbidities(testBundle));

module.exports = {
  getPatient,
  getDiseaseStatus,
  getTumor,
  getTumorSize,
  getTumorSpecimen,
  getBodyStructureIdentifier,
  getTumorMarkerTest,
  getPrimaryCancerCondition,
  getSecondaryCancerCondition,
  getStageGroup,
  getTNMDistantMetastasesCategory,
  getTNMPrimaryTumorCategory,
  getTNMRegionalNodesCategory,
  getGenomicRegionStudied,
  getGenomicSpecimen,
  getGenomicVariant,
  getGenomicsReport,
  getKarnofskyPerformanceStatus,
  getECOGPerfomanceStatus,
  getComorbidities,
  getCancerRelatedMedicationRequest,
  getCancerRelatedMedicationAdministration,
  getCancerRelatedSurgicalProcedure,
  getRadiotherapyCourseSummary,
  getRadiotherapyVolume,
};
