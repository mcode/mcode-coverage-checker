const { log } = require('../logger');
const { patientId, outcomeId } = require('../coverageSectionIds');
const coverageCheckerFactory = require('./coverageCheckerFactory');

function coverageChecker(bundle) {
  const sections = [patientId, outcomeId];
  return sections.map((section) => {
    log(coverageCheckerFactory);
    const sectionCoverageChecker = coverageCheckerFactory(section);
    return sectionCoverageChecker(bundle);
  });
}

export default coverageChecker;
