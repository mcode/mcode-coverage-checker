const fhirpath = require('fhirpath');
// NOTE: See here: https://stackoverflow.com/questions/33704714/cant-require-default-export-value-in-babel-6-x
const { ValueSetCodeChecker } = require('./ValueSetCodeChecker');

const vsChecker = new ValueSetCodeChecker();

// Patient
// No reliable conformance requirements for mCODE Patients or US Core Patients: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-cancer-patient.html#conformance
function getPatient(bundle) {
  const metaProfiledResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-patient')",
  );
  const constrainedResources = fhirpath.evaluate(bundle, 'Bundle.entry.resource.ofType(Patient)');
  // NOTE: Being overly permissive is okay at this stage of the filter.
  return metaProfiledResources || constrainedResources;
}

// Outcome
// Observation resources with a code of LOINC `97509-4` must be Disease Statuses: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-cancer-disease-status.html#conformance
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
// BodyStructures with a morphology code SNOMED `367651003` must be Tumors: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-tumor.html#conformance
function getTumor(bundle) {
  const metaProfiledResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-tumor')",
  );
  const constrainedResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.ofType(BodyStructure).where(code.coding.system = 'http://snomed.info/sct' and code.coding.code = '367651003')",
  );
  return metaProfiledResources || constrainedResources;
}
// Observations with an Observation.code of LOINC `21889-1` must be Tumor Size measurements : https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-tumor-size.html#conformance
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
// Specimens with Specimen.type of `TUMOR` from system http://terminology.hl7.org/CodeSystem/v2-0487 must be TumorSpecimens: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-tumor-specimen.html#conformance
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
// Observations with a code from an extensible valueset, TumorMarkerTestVS, must be Tumor Marker Tests: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-tumor-marker-test.html#conformance
function getTumorMarkerTest(bundle) {
  const metaProfiledResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-tumor-marker-test')",
  );
  const constrainedResources = fhirpath
    .evaluate(bundle, 'Bundle.entry.resource.ofType(Observation)')
    .filter(
      (observation) =>
        observation.code?.coding?.some((coding) =>
          vsChecker.checkCodeInVs(coding.code, coding.system, 'TumorMarkerTestVS'),
        ) ?? false,
    );
  return metaProfiledResources || constrainedResources;
}
// Conditions with a code from an the extensible valueset, SecondaryCancerDisorderVS, must be Secondary Cancer Conditions: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-secondary-cancer-condition.html#conformance
function getSecondaryCancerCondition(bundle) {
  const metaProfiledResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-secondary-cancer-condition')",
  );
  const constrainedResources = fhirpath
    .evaluate(bundle, 'Bundle.entry.resource.ofType(Condition)')
    .filter(
      (condition) =>
        condition.code?.coding?.some((coding) =>
          vsChecker.checkCodeInVs(coding.code, coding.system, 'SecondaryCancerDisorderVS'),
        ) ?? false,
    );
  return metaProfiledResources || constrainedResources;
}
// Conditions with a code from extensible valueset, PrimaryCancerDisorderVS, must be Primary Cancer Conditions: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-primary-cancer-condition.html#conformance
function getPrimaryCancerCondition(bundle) {
  const metaProfiledResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-primary-cancer-condition')",
  );
  const constrainedResources = fhirpath
    .evaluate(bundle, 'Bundle.entry.resource.ofType(Condition)')
    .filter(
      (condition) =>
        condition.code?.coding?.some((coding) =>
          vsChecker.checkCodeInVs(coding.code, coding.system, 'PrimaryCancerDisorderVS'),
        ) ?? false,
    );
  return metaProfiledResources || constrainedResources;
}
// Observations with a code from the following – LOINC 21908-9, 21902-2, or 21914-7 – must be Stage Groups: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-cancer-stage-group.html#conformance
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
// Observations with a code from the following – LOINC 21905-5, 21899-0, or 21911-3 – must be Primary Tumor Categories: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-tnm-primary-tumor-category.html#conformance
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
// Observations with a code from the following – LOINC 21907-1, 21901-4, or 21913-9 – must be Metastases Categories: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-tnm-distant-metastases-category.html#conformance
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
// Observations with a code from the following - LOINC 21906-3, 21900-6, or 21912-1 – must be Regional Node categories: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-tnm-regional-nodes-category.html#conformance
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
// DiagnosticReports with a LOINC code 81247-9 must be GenomicsReport: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-genomics-report.html#conformance
function getGenomicsReport(bundle) {
  const metaProfiledResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-genomics-report')",
  );
  const constrainedResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.ofType(DiagnosticReport).where(code.coding.system = 'http://loinc.org' and code.coding.code = '81247-9')",
  );
  return metaProfiledResources || constrainedResources;
}
// Specimen with a code from the extensible valueset GenomicSpecimenTypeVS must be GenomicsSpecimen: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-genomic-specimen.html#conformance
function getGenomicSpecimen(bundle) {
  const metaProfiledResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-genomic-specimen')",
  );
  const constrainedResources = fhirpath
    .evaluate(bundle, 'Bundle.entry.resource.ofType(Specimen)')
    .filter(
      (specimen) =>
        specimen.type?.coding?.some((coding) =>
          vsChecker.checkCodeInVs(coding.code, coding.system, 'GenomicSpecimenTypeVS'),
        ) ?? false,
    );
  return metaProfiledResources || constrainedResources;
}
// Observations with a LOINC code `69548-6` must be GenomicsVariant: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-genomic-variant.html#conformance
function getGenomicVariant(bundle) {
  const metaProfiledResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-genomic-variant')",
  );
  const constrainedResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.ofType(Observation).where(code.coding.system = 'http://loinc.org' and code.coding.code = '69548-6')",
  );
  return metaProfiledResources || constrainedResources;
}
// Observations with a LOINC code `53041-0` must be GenomicsRegion: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-genomic-region-studied.html#conformance
function getGenomicRegionStudied(bundle) {
  const metaProfiledResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-genomic-region-studied')",
  );
  const constrainedResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.ofType(Observation).where(code.coding.system = 'http://loinc.org' and code.coding.code = '53041-0')",
  );
  return metaProfiledResources || constrainedResources;
}

// Assessment
// Observations with a LOINC code `89243-0` must be KarnofskyStatus: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-karnofsky-performance-status.html#conformance
function getKarnofskyPerformanceStatus(bundle) {
  const metaProfiledResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-karnofsky-performance-status')",
  );
  const constrainedResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.ofType(Observation).where(code.coding.system = 'http://loinc.org' and code.coding.code = '89243-0')",
  );
  return metaProfiledResources || constrainedResources;
}
// Observations with a code `comorbidities-elixhauser` from codesystem `http://hl7.org/fhir/us/mcode/CodeSystem/loinc-requested-cs`, as made clear by the diff table, must be Comorbidities: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-comorbidities-elixhauser.html#conformance
function getComorbidities(bundle) {
  const metaProfiledResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-comorbidities-elixhauser')",
  );
  const constrainedResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.ofType(Observation).where(code.coding.system = 'http://hl7.org/fhir/us/mcode/CodeSystem/loinc-requested-cs' and code.coding.code = 'comorbidities-elixhauser')",
  );
  return metaProfiledResources || constrainedResources;
}
// Observations with a LOINC code `89247-1` must be ECOG: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-ecog-performance-status.html#conformance
function getECOGPerfomanceStatus(bundle) {
  const metaProfiledResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-ecog-performance-status')",
  );
  const constrainedResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.ofType(Observation).where(code.coding.system = 'http://loinc.org' and code.coding.code = '89247-1')",
  );
  return metaProfiledResources || constrainedResources;
}

// Treatment
// MedicationRequests that reference a CancerCondition must be CancerRelatedMedicationRequests, either by reasonCode or reasonReference: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-cancer-related-medication-request.html#conformance & constraints section
function getCancerRelatedMedicationRequest(bundle) {
  const metaProfiledResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-related-medication-request')",
  );
  const constrainedResources = fhirpath.evaluate(
    bundle,
    'Bundle.entry.resource.ofType(MedicationRequest).where(reasonCode.exists() or reasonReference.exists())',
  );
  // NOTE: these constraints aren't implemented perfectly, we should be checking these reasons for cancer-relevance; being overly permissive is okay at this stage of the filter.
  return metaProfiledResources || constrainedResources;
}
// MedicationAdministrations that reference a CancerCondition must be CancerRelatedMedicationAdministration, either by reasonCode or reasonReference: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-cancer-related-medication-administration.html#conformance & constraints section
function getCancerRelatedMedicationAdministration(bundle) {
  const metaProfiledResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-related-medication-administration')",
  );
  const constrainedResources = fhirpath.evaluate(
    bundle,
    'Bundle.entry.resource.ofType(MedicationAdministration).where(reasonCode.exists() or reasonReference.exists())',
  );
  // NOTE: these constraints aren't implemented perfectly, we should be checking these reasons for cancer-relevance; being overly permissive is okay at this stage of the filter.
  return metaProfiledResources || constrainedResources;
}
// Procedures with a SNOMED code `387713003` must be a CancerRelatedMedicationSurgicalProcedure: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-cancer-related-surgical-procedure.html#conformance
function getCancerRelatedSurgicalProcedure(bundle) {
  const metaProfiledResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-related-surgical-procedure')",
  );
  const constrainedResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.ofType(Procedure).where(code.coding.system = 'http://snomed.info/sct' and code.coding.code = '387713003')",
  );
  return metaProfiledResources || constrainedResources;
}
// Procedures with a code `USCRS-33529` from codesystem `http://hl7.org/fhir/us/mcode/CodeSystem/snomed-requested-cs`, which differs from the stated conformance guidelines but is mentioned in the diff-table, must be a RadiotherapyCourseSummary: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-radiotherapy-course-summary.html#conformance
function getRadiotherapyCourseSummary(bundle) {
  const metaProfiledResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-course-summary')",
  );
  const constrainedResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.ofType(Procedure).where(code.coding.system = 'http://hl7.org/fhir/us/mcode/CodeSystem/snomed-requested-cs' and code.coding.code = 'USCRS-33529')",
  );
  return metaProfiledResources || constrainedResources;
}
// BodyStructures with a morphology code from ValueSet  RadiotherapyVolumeTypeVS must be a Radiotherapy Volume: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-radiotherapy-volume.html#conformance
function getRadiotherapyVolume(bundle) {
  const metaProfiledResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-volume')",
  );
  const constrainedResources = fhirpath
    .evaluate(bundle, 'Bundle.entry.resource.ofType(BodyStructure)')
    .filter(
      (bodyStructure) =>
        bodyStructure.morphology?.coding?.some((coding) =>
          vsChecker.checkCodeInVs(coding.code, coding.system, 'TumorMarkerTestVS'),
        ) ?? false,
    );
  return metaProfiledResources || constrainedResources;
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
