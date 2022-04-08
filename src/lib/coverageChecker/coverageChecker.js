const { getPatientCoverage } = require('./patientCoverage');
const { getOutcomeCoverage } = require('./outcomeCoverage');

/**
 * Computes mCODE coverage statistics for a FHIR bundle
 * @param {Object} bundle
 * @returns Array of coverage statistics for each bundle
 */
function coverageChecker(bundle) {
  return [getPatientCoverage(bundle), getOutcomeCoverage(bundle)];
}

export default coverageChecker;
