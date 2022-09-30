const fhirpath = require('fhirpath');

// Patient
// No reliable conformance requirements for mCODE Patients or US Core Patients: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-cancer-patient.html#conformance
function getPatient(bundle) {
  const metaProfiledResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-patient')",
  );
  const constrainedResources = fhirpath.evaluate(bundle, 'Bundle.entry.resource.ofType(Patient)');
  return metaProfiledResources || constrainedResources;
}

// Outcome
// Disease Statuses must have code of LOINC `97509-4`: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-cancer-disease-status.html#conformance
function getDiseaseStatus(bundle) {
  const metaProfiledResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-disease-status')",
  );
  const constrainedResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.ofType(Observation).where(code.coding.code = '97509-4' and code.coding.system = 'http://loinc.org')",
  );
  return metaProfiledResources || constrainedResources;
}
// No reliable conformance requirements for Tumor BodyStructures: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-tumor.html#conformance
function getTumor(bundle) {
  const metaProfiledResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-tumor')",
  );
  const constrainedResources = fhirpath.evaluate(bundle, 'Bundle.entry.resource.ofType(BodyStructure)');
  return metaProfiledResources || constrainedResources;
}
// Tumor Size measurements must have an Observation.code of LOINC `21889-1` : https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-tumor-size.html#conformance
function getTumorSize(bundle) {
  const metaProfiledResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-tumor-size')",
  );
  const constrainedResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.ofType(Observation).where(code.coding.code = '21889-1' and code.coding.system = 'http://loinc.org')",
  );
  return metaProfiledResources || constrainedResources;
}
// TumorSpecimen's must have a Specimen.type of `TUMOR` from system http://terminology.hl7.org/CodeSystem/v2-0487: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-tumor-specimen.html#conformance
function getTumorSpecimen(bundle) {
  const metaProfiledResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-tumor-specimen')",
  );
  const constrainedResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.ofType(Specimen).where(type.coding.code = 'TUMOR' and type.coding.system = 'http://terminology.hl7.org/CodeSystem/v2-0487')",
  );
  return metaProfiledResources || constrainedResources;
}

// Disease
// Tumor Marker Tests must have a code from an extensible valueset: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-tumor-marker-test.html#conformance
function getTumorMarkerTest(bundle) {
  const metaProfiledResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-tumor-marker-test')",
  );
  const constrainedResources = fhirpath.evaluate(
    bundle,
    // TODO: Figure out how to check valuesets or filter after the fact
    'Bundle.entry.resource.ofType(Observation)',
  );
  return metaProfiledResources || constrainedResources;
}
// Secondary Cancer Conditions must have a code from an extensible valueset: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-secondary-cancer-condition.html#conformance
function getSecondaryCancerCondition(bundle) {
  const metaProfiledResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-secondary-cancer-condition')",
  );
  const constrainedResources = fhirpath.evaluate(
    bundle,
    // TODO: Figure out how to check valuesets or filter after
    'Bundle.entry.resource.ofType(Condition)',
  );
  return metaProfiledResources || constrainedResources;
}
// Primary Cancer Conditions must have a code from extensible valueset: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-primary-cancer-condition.html#conformance
function getPrimaryCancerCondition(bundle) {
  const metaProfiledResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-primary-cancer-condition')",
  );
  const constrainedResources = fhirpath.evaluate(
    bundle,
    // TODO: Figure out how to check valuesets or filter after
    'Bundle.entry.resource.ofType(Condition)',
  );
  return metaProfiledResources || constrainedResources;
}
// Stage Groups must have a code from the following – LOINC 21908-9, 21902-2, or 21914-7: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-cancer-stage-group.html#conformance
function getStageGroup(bundle) {
  const metaProfiledResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-stage-group')",
  );
  const constrainedResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.ofType(Observation).where(code.coding.system = 'http://loinc.org' and (code.coding.code = '21908-9' or code.coding.code = '21902-2' or code.coding.code = '21914-7'))",
  );
  return metaProfiledResources || constrainedResources;
}
// Primary Tumor Categories must have a code from the following – LOINC 21905-5, 21899-0, or 21911-3: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-tnm-primary-tumor-category.html#conformance
function getTNMPrimaryTumorCategory(bundle) {
  const metaProfiledResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-tnm-primary-tumor-category')",
  );
  const constrainedResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.ofType(Observation).where(code.coding.system = 'http://loinc.org' and (code.coding.code = '21905-5' or code.coding.code = '21899-0' or code.coding.code = '21911-3'))",
  );
  return metaProfiledResources || constrainedResources;
}
// Metastases Categories must have a code from the following – LOINC 21907-1, 21901-4, or 21913-9: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-tnm-distant-metastases-category.html#conformance
function getTNMDistantMetastasesCategory(bundle) {
  const metaProfiledResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-tnm-distant-metastases-category')",
  );
  const constrainedResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.ofType(Observation).where(code.coding.system = 'http://loinc.org' and (code.coding.code = '21907-1' or code.coding.code = '21901-4' or code.coding.code = '21913-9'))",
  );
  return metaProfiledResources || constrainedResources;
}
// Regional Node categories must have a code from the following - LOINC 21906-3, 21900-6, or 21912-1: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-tnm-regional-nodes-category.html#conformance
function getTNMRegionalNodesCategory(bundle) {
  const metaProfiledResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-tnm-regional-nodes-category')",
  );
  const constrainedResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.ofType(Observation).where(code.coding.system = 'http://loinc.org' and (code.coding.code = '21906-3' or code.coding.code = '21900-6' or code.coding.code = '21912-1'))",
  );
  return metaProfiledResources || constrainedResources;
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
