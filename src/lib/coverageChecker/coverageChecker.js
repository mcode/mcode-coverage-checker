const { log } = require('../logger');
const { patientId, outcomeId } = require('../coverageSectionIds');
const coverageCheckerFactory = require('./coverageCheckerFactory');

// The sections against which we should compute coverage statistics;
// These need to be sectionIds as defined by coverageSectionIds and
// These need to be sectionIds supported by the coverageCheckerFactory
const SECTIONS = [patientId, outcomeId];

/**
 * Computes mCODE coverage statistics for a FHIR bundle
 * @param {Object} bundle
 * @returns Array of coverage statistics for each bundle
 */
function coverageChecker(bundle) {
  return SECTIONS.map((section) => {
    log(coverageCheckerFactory);
    const sectionCoverageChecker = coverageCheckerFactory(section);
    return sectionCoverageChecker(bundle);
  });
}

export default coverageChecker;
