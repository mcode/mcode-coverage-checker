const fhirpath = require('fhirpath');
// NOTE: See here: https://stackoverflow.com/questions/33704714/cant-require-default-export-value-in-babel-6-x
const ValueSetCodeChecker = require('./ValueSetCodeChecker').default;

const vsChecker = new ValueSetCodeChecker();

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
// Tumor Marker Tests must have a code from an extensible valueset, TumorMarkerTestVS: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-tumor-marker-test.html#conformance
function getTumorMarkerTest(bundle) {
  const metaProfiledResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-tumor-marker-test')",
  );
  const constrainedResources = fhirpath
    .evaluate(
      bundle,
      // TODO: Figure out how to check valuesets or filter after the fact
      'Bundle.entry.resource.ofType(Observation)',
    )
    .filter((observation) =>
      observation.code.coding.some((coding) =>
        vsChecker.checkCodeInVs(coding.code, coding.system, 'TumorMarkerTestVS'),
      ),
    );
  return metaProfiledResources || constrainedResources;
}
// Secondary Cancer Conditions must have a code from an extensible valueset, SecondaryCancerDisorderVS: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-secondary-cancer-condition.html#conformance
function getSecondaryCancerCondition(bundle) {
  const metaProfiledResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-secondary-cancer-condition')",
  );
  const constrainedResources = fhirpath
    .evaluate(
      bundle,
      // TODO: Figure out how to check valuesets or filter after
      'Bundle.entry.resource.ofType(Condition)',
    )
    .filter((condition) =>
      condition.code.coding.some((coding) =>
        vsChecker.checkCodeInVs(coding.code, coding.system, 'SecondaryCancerDisorderVS'),
      ),
    );
  return metaProfiledResources || constrainedResources;
}
// Primary Cancer Conditions must have a code from extensible valueset, PrimaryCancerDisorderVS: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-primary-cancer-condition.html#conformance
function getPrimaryCancerCondition(bundle) {
  const metaProfiledResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-primary-cancer-condition')",
  );
  const constrainedResources = fhirpath
    .evaluate(bundle, 'Bundle.entry.resource.ofType(Condition)')
    .filter((condition) =>
      condition.code.coding.some((coding) =>
        vsChecker.checkCodeInVs(coding.code, coding.system, 'PrimaryCancerDisorderVS'),
      ),
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
// GenomicsReport must have a LOINC code 81247-9: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-genomics-report.html#conformance
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
// GenomicsSpecimen must have a type form the extensible valueset GenomicSpecimenTypeVS: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-genomic-specimen.html#conformance
function getGenomicSpecimen(bundle) {
  const metaProfiledResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-genomic-specimen')",
  );
  // TODO: Figure out how to check valuesets or filter after
  const constrainedResources = fhirpath
    .evaluate(bundle, 'Bundle.entry.resource.ofType(Specimen)')
    .filter((specimen) =>
      specimen.type.coding.some((coding) => vsChecker.checkCodeInVs(coding.code, coding.system, 'TumorMarkerTestVS')),
    );
  return metaProfiledResources || constrainedResources;
}
// GenomicsVariant must have a LOINC code `69548-6`: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-genomic-variant.html#conformance
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
// GenomicsRegion must have a LOINC code `53041-0`: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-genomic-region-studied.html#conformance
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
// KarnofskyStatus must have a LOINC code `89243-0`: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-karnofsky-performance-status.html#conformance
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
// Comorbidities must have a code `comorbidities-elixhauser` from codesystem `http://hl7.org/fhir/us/mcode/CodeSystem/loinc-requested-cs`: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-comorbidities-elixhauser.html#conformance
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
// ECOG must have a LOINC code `89247-1`: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-ecog-performance-status.html#conformance
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
// CancerRelatedMedicationRequests must have a reference to a CancerCondition: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-cancer-related-medication-request.html#conformance
function getCancerRelatedMedicationRequest(bundle) {
  return fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-related-medication-request')",
  );
}
// CancerRelatedMedicationAdministration must have a reference to a CancerCondition: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-cancer-related-medication-administration.html#conformance
function getCancerRelatedMedicationAdministration(bundle) {
  return fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-related-medication-administration')",
  );
}
// CancerRelatedMedicationSurgicalProcedure must have a SNOMED code `387713003`: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-cancer-related-surgical-procedure.html#conformance
function getCancerRelatedSurgicalProcedure(bundle) {
  const metaProfiledResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-related-surgical-procedure')",
  );
  const constrainedResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.ofType(Observation).where(code.coding.system = 'http://snomed.info/sct' and code.coding.code = '387713003')",
  );
  return metaProfiledResources || constrainedResources;
}
// Radiotheraphy Course Summary must have a code `USCRS-33529` from codesystem `http://hl7.org/fhir/us/mcode/CodeSystem/snomed-requested-cs`, which differs from the stated conformance guidelines but is mentioned in the diff-table: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-radiotherapy-course-summary.html#conformance
function getRadiotherapyCourseSummary(bundle) {
  const metaProfiledResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.where(meta.profile = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-course-summary')",
  );
  const constrainedResources = fhirpath.evaluate(
    bundle,
    "Bundle.entry.resource.ofType(Observation).where(code.coding.system = 'http://hl7.org/fhir/us/mcode/CodeSystem/snomed-requested-cs' and code.coding.code = 'USCRS-33529')",
  );
  return metaProfiledResources || constrainedResources;
}
// Radiotherapy Volume must have a code from ValueSet `RadiotherapyVolumeTypeVS`: https://hl7.org/fhir/us/mcode/StructureDefinition-mcode-radiotherapy-volume.html#conformance
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
