const { getPatientCoverage } = require('./patientCoverage');
const { getOutcomeCoverage } = require('./outcomeCoverage');
const { getDiseaseCoverage } = require('./diseaseCoverage');
const { getTreatmentCoverage } = require('./treatmentCoverage');
const { getAssessmentCoverage } = require('./assessmentCoverage');
const { getGenomicsCoverage } = require('./genomicsCoverage');

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
