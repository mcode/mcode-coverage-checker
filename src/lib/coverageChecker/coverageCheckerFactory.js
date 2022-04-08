const { error } = require('../logger');
const { getPatientCoverage } = require('./patientCoverage');
const { getOutcomeCoverage } = require('./outcomeCoverage');
const { patientId, outcomeId } = require('../coverageSectionIds');

/**
 *
 * @param {SectionId} section that matches a sectionId found in coverageSectionIds
 * @returns Function for calculating coverage statistics for that section
 */
function coverageCheckerFactory(section) {
  switch (section) {
    case patientId:
      return getPatientCoverage;
    case outcomeId:
      return getOutcomeCoverage;
    default: {
      const errmsg = `Trying to get coverage checker for an unrecognized section type \`${section}\``;
      error(errmsg);
      throw Error(errmsg);
    }
  }
}

module.exports = coverageCheckerFactory;
