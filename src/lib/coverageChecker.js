const { log } = require('./logger');
const { patientId } = require('./coverageSectionIds');
const coverageCheckerFactory = require('./coverageCheckerFactory');

function coverageChecker(bundle) {
  const sections = [patientId];
  return sections.map((section) => {
    log(coverageCheckerFactory);
    const sectionCoverageChecker = coverageCheckerFactory(section);
    return sectionCoverageChecker(bundle);
  });
}

export default coverageChecker;
