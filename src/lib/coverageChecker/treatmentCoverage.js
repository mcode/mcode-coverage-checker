const fhirpath = require('fhirpath');
const {
  getCancerRelatedMedicationRequest,
  getCancerRelatedMedicationAdministration,
  getCancerRelatedSurgicalProcedure,
  getRadiotherapyCourseSummary,
  getRadiotherapyVolume,
} = require('./resourceUtils');
const { treatmentSectionId } = require('../coverageSectionIds');
const { treatmentProfileIds } = require('../coverageProfileIds');

/**
 * Takes a bundle and returns the coverage of cancer related medication request resources in that bundle
 * @param {Object} bundle, an mCODE bundle
 * @return {Object}, an object representing the coverage of all cancer related medication request resources
 */
function getCancerRelatedMedicationRequestCoverage(bundle) {
  const cancerRelatedMedicationRequest = getCancerRelatedMedicationRequest(bundle);
  const { cancerRelatedMedicationRequestId } = treatmentProfileIds;
  const cancerRelatedMedicationRequestCoverage = { profile: cancerRelatedMedicationRequestId, coverage: [] };
  cancerRelatedMedicationRequest.forEach((request) => {
    cancerRelatedMedicationRequestCoverage.coverage.push({
      resourceId: fhirpath.evaluate(request, 'MedicationRequest.id')[0],
      data: {
        Medication: {
          covered: fhirpath.evaluate(
            request,
            'MedicationRequest.medicationCodeableConcept.coding.exists() or MedicationRequest.medicationReference.exists()',
          )[0],
        },
        Reason: {
          covered: fhirpath.evaluate(
            request,
            'MedicationRequest.reasonCode.exists() or MedicationRequest.reasonReference.exists()',
          )[0],
        },
        ProcedureIntent: {
          covered: fhirpath.evaluate(
            request,
            "MedicationRequest.extension.where(url = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-procedure-intent').exists()",
          )[0],
        },
        TerminationReason: {
          covered: fhirpath.evaluate(
            request,
            "MedicationRequest.extension.where(url = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-treatment-termination-reason').exists()",
          )[0],
        },
      },
    });
  });
  return cancerRelatedMedicationRequestCoverage;
}

/**
 * Takes a bundle and returns the coverage of cancer related medication administration resources in that bundle
 * @param {Object} bundle, an mCODE bundle
 * @return {Object}, an object representing the coverage of all cancer related medication administration resources
 */
function getCancerRelatedMedicationAdministrationCoverage(bundle) {
  const cancerRelatedMedicationAdministration = getCancerRelatedMedicationAdministration(bundle);
  const { cancerRelatedMedicationAdministrationId } = treatmentProfileIds;
  const cancerRelatedMedicationAdministrationCoverage = {
    profile: cancerRelatedMedicationAdministrationId,
    coverage: [],
  };
  cancerRelatedMedicationAdministration.forEach((administration) => {
    cancerRelatedMedicationAdministrationCoverage.coverage.push({
      resourceId: fhirpath.evaluate(administration, 'MedicationAdministration.id')[0],
      data: {
        Medication: {
          covered: fhirpath.evaluate(
            administration,
            'MedicationAdministration.medicationCodeableConcept.coding.exists() or MedicationRequest.medicationReference.exists()',
          )[0],
        },
        Reason: {
          covered: fhirpath.evaluate(
            administration,
            'MedicationAdministration.reasonCode.exists() or MedicationRequest.reasonReference.exists()',
          )[0],
        },
        'Procedure Intent': {
          covered: fhirpath.evaluate(
            administration,
            "MedicationAdministration.extension.where(url = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-procedure-intent').exists()",
          )[0],
        },
        'Termination Reason': {
          covered: fhirpath.evaluate(
            administration,
            "MedicationAdministration.extension.where(url = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-treatment-termination-reason').exists()",
          )[0],
        },
      },
    });
  });

  return cancerRelatedMedicationAdministrationCoverage;
}

/**
 * Takes a bundle and returns the coverage of cancer related surgical procedure resources in that bundle
 * @param {Object} bundle, an mCODE bundle
 * @return {Object}, an object representing the coverage of all cancer related surgical procedure resources
 */
function getCancerRelatedSurgicalProcedureCoverage(bundle) {
  const cancerRelatedSurgicalProcedure = getCancerRelatedSurgicalProcedure(bundle);
  const { cancerRelatedSurgicalProcedureId } = treatmentProfileIds;
  const cancerRelatedSurgicalProcedureCoverage = { profile: cancerRelatedSurgicalProcedureId, coverage: [] };
  cancerRelatedSurgicalProcedure.forEach((procedure) => {
    cancerRelatedSurgicalProcedureCoverage.coverage.push({
      resourceId: fhirpath.evaluate(procedure, 'Procedure.id')[0],
      data: {
        'Procedure Code': fhirpath.evaluate(procedure, 'Procedure.code.coding.exists()')[0],
        'Body Site': fhirpath.evaluate(procedure, 'Procedure.bodySite.exists()')[0],
        Laterality: fhirpath.evaluate(
          procedure,
          "Procedure.bodySite.extension.where(url = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-body-location-qualifier').exists()",
        )[0],
        'Location Qualifier': fhirpath.evaluate(
          procedure,
          "Procedure.bodySite.extension.where(url = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-laterality-qualifier').exists()",
        )[0],
      },
    });
  });
  return cancerRelatedSurgicalProcedureCoverage;
}

/**
 * Takes a bundle and returns the coverage of radiotherapy course summary resources in that bundle
 * @param {Object} bundle, an mCODE bundle
 * @return {Object}, an object representing the coverage of all radiotherapy course summary resources
 */
function getRadiotherapyCourseSummaryCoverage(bundle) {
  const radiotherapyCourseSummary = getRadiotherapyCourseSummary(bundle);
  const { radiotherapyCourseSummaryId } = treatmentProfileIds;
  const radiotherapyCourseSummaryCoverage = { profile: radiotherapyCourseSummaryId, coverage: [] };
  radiotherapyCourseSummary.forEach((procedure) => {
    radiotherapyCourseSummaryCoverage.coverage.push({
      resourceId: fhirpath.evaluate(procedure, 'Procedure.id')[0],
      data: {
        'No. Sessions': fhirpath.evaluate(
          procedure,
          "Procedure.extension.where(url = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-sessions').exists()",
        )[0],
        'Modality and Technique': fhirpath.evaluate(
          procedure,
          "Procedure.extension.where(url = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-modality-and-technique').exists()",
        )[0],
        Modality: fhirpath.evaluate(
          procedure,
          "Procedure.extension.where(url = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-modality-and-technique').extension.where(url = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-modality').exists()",
        )[0],
        Technique: fhirpath.evaluate(
          procedure,
          "Procedure.extension.where(url = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-modality-and-technique').extension.where(url = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-technique').exists()",
        )[0],
        'Doses Delivered': fhirpath.evaluate(
          procedure,
          "Procedure.extension.where(url = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-dose-delivered-to-volume').exists()",
        )[0],
        'Total Dose': fhirpath.evaluate(
          procedure,
          "Procedure.extension.where(url = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-dose-delivered-to-volume').extension.where(url = 'totalDoseDelivered').exists()",
        )[0],
        'No. Fractions': fhirpath.evaluate(
          procedure,
          "Procedure.extension.where(url = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-dose-delivered-to-volume').extension.where(url = 'fractionsDelivered').exists()",
        )[0],
        'Body Volume': fhirpath.evaluate(
          procedure,
          "Procedure.extension.where(url = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-dose-delivered-to-volume').extension.where(url = 'volume').exists()",
        )[0],
      },
    });
  });
  return radiotherapyCourseSummaryCoverage;
}

/**
 * Takes a bundle and returns the coverage of radiotherapy volume resources in that bundle
 * @param {Object} bundle, an mCODE bundle
 * @return {Object}, an object representing the coverage of all radiotherapy volume resources
 */
function getRadiotherapyVolumeCoverage(bundle) {
  const radiotherapyVolume = getRadiotherapyVolume(bundle);
  const { radiotherapyVolumeId } = treatmentProfileIds;
  const radiotherapyVolumeCoverage = { profile: radiotherapyVolumeId, coverage: [] };
  radiotherapyVolume.forEach((bodyStructure) => {
    radiotherapyVolumeCoverage.coverage.push({
      resourceId: fhirpath.evaluate(bodyStructure, 'BodyStructure.id')[0],
      data: {
        'Volume Type': fhirpath.evaluate(bodyStructure, 'BodyStructure.morphology.codeableConcept.coding.exists()'),
        Location: fhirpath.evaluate(bodyStructure, 'BodyStructure.location.codeableConcept.coding.exists()'),
        'Location Qualifier': fhirpath.evaluate(
          bodyStructure,
          'BodyStructure.locationQualifier.codeableConcept.coding.exists()',
        ),
      },
    });
  });
  return radiotherapyVolumeCoverage;
}

/**
 * Takes a bundle and returns the coverage of treatment-related resources in that bundle
 * @param {Object} bundle, an mCODE bundle
 * @return {Object}, an object representing the coverage of the Treatment section of the mCODE diagram
 */
function getTreatmentCoverage(bundle) {
  return {
    section: treatmentSectionId,
    data: [
      getCancerRelatedMedicationRequestCoverage(bundle),
      getCancerRelatedMedicationAdministrationCoverage(bundle),
      getCancerRelatedSurgicalProcedureCoverage(bundle),
      getRadiotherapyCourseSummaryCoverage(bundle),
      getRadiotherapyVolumeCoverage(bundle),
    ],
  };
}

module.exports = {
  getTreatmentCoverage,
};
