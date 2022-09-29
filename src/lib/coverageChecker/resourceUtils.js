const fhirpath = require('fhirpath');

// Patient
// No reliable requirements for mCODE Patients or US Core Patients: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-cancer-patient.html#conformance
function getPatient(bundle) {
  return fhirpath.evaluate(bundle, 'Bundle.entry.resource.ofType(Patient)');
}

// Outcome
// Disease Statuses must have code of LOINC `97509-4`: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-cancer-disease-status.html#conformance
function getDiseaseStatus(bundle) {
  return fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.ofType(Observation).where(code.coding.code = '97509-4' and code.coding.system = 'http://loinc.org')",
  );
}
// No reliable requirements for Tumor BodyStructures: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-tumor.html#conformance
function getTumor(bundle) {
  return fhirpath.evaluate(bundle, 'Bundle.entry.resource.ofType(BodyStructure)');
}
// Tumor Size measurements must have an Observation.code of LOINC `21889-1` : https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-tumor-size.html#conformance
function getTumorSize(bundle) {
  return fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.ofType(Observation).where(code.coding.code = '21889-1' and code.coding.system = 'http://loinc.org')",
  );
}
// TumorSpecimen's must have a Specimen.type of `TUMOR` from system http://terminology.hl7.org/CodeSystem/v2-0487: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-tumor-specimen.html#conformance
function getTumorSpecimen(bundle) {
  return fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.ofType(Specimen).where(type.coding.code = 'TUMOR' and type.coding.system = 'http://terminology.hl7.org/CodeSystem/v2-0487')",
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

module.exports = {
  getPatient,
  getDiseaseStatus,
  getTumor,
  getTumorSize,
  getTumorSpecimen,
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
