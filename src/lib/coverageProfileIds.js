// Think of this file as an ENUM
const treatmentProfileIds = {
  cancerRelatedMedicationRequestId: 'Cancer Related Medication Request',
  cancerRelatedMedicationAdministrationId: 'Cancer Related Medication Administration',
  cancerRelatedSurgicalProcedureId: 'Cancer Related Procedure',
  radiotherapyCourseSummaryId: 'Radiotherapy Course Summary',
  radiotherapyVolumeId: 'Radiotherapy Volume',
};

const assessmentProfileIds = {
  karnofskyPerformanceStatusId: 'Karnofsky Performance Status',
  comorbiditiesId: 'Comorbidities (Elixhauser)',
  ecogPerformanceStatusId: 'ECOG Performance Status',
};

const outcomeProfileIds = {
  diseaseStatusId: 'Disease Status',
  tumorId: 'Tumor',
  tumorSizeId: 'Tumor Size',
  tumorSpecimenId: 'Tumor Specimen',
};

const patientProfileIds = {
  cancerPatientId: 'Cancer Patient',
};

const diseaseProfileIds = {
  tumorMarkerTestId: 'Tumor Marker Test',
  primaryCancerConditionId: 'Primary Cancer Condition',
  secondaryCancerConditionId: 'Secondary Cancer Condition',
  stageGroupId: 'Stage Group',
  primaryTumorId: 'Primary Tumor Category',
  distantMetastasesId: 'Distant Metastases Category',
  regionalNodesId: 'Regional Nodes Category',
};

module.exports = { treatmentProfileIds, assessmentProfileIds, outcomeProfileIds, patientProfileIds, diseaseProfileIds };
