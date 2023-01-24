import { getPatientCoverage } from './patientCoverage';
import { getOutcomeCoverage } from './outcomeCoverage';
import { getDiseaseCoverage } from './diseaseCoverage';
import { getTreatmentCoverage } from './treatmentCoverage';
import { getAssessmentCoverage } from './assessmentCoverage';
import { getGenomicsCoverage } from './genomicsCoverage';

/**
 * Computes mCODE coverage statistics for a FHIR bundle
 * @param {Object} bundle
 * @returns Array of coverage statistics for each bundle
 */
function coverageChecker(bundle) {
  return [
    getPatientCoverage(bundle),
    getOutcomeCoverage(bundle),
    getDiseaseCoverage(bundle),
    getTreatmentCoverage(bundle),
    getAssessmentCoverage(bundle),
    getGenomicsCoverage(bundle),
  ];
}

export default coverageChecker;
