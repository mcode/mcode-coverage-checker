const { patientId } = require('../coverageChecker/coverageSectionIds');
const { getSectionCoveredCount, getSectionTotalCount } = require('./statsUtils');

// Coverage stats - percentage and raw counts - for all sections
function getOverallStats(coverageData) {
  const totalCovered = coverageData.reduce((accum, sectionObject) => accum + getSectionCoveredCount(sectionObject), 0);
  const totalPossible = coverageData.reduce((accum, sectionObject) => accum + getSectionTotalCount(sectionObject), 0);
  return { percentage: totalCovered / totalPossible, covered: totalCovered, possible: totalPossible };
}

function getPatientStats(coverageData) {
  const patientData = coverageData.filter((sectionObject) => sectionObject.section === patientId);
  return getOverallStats(patientData);
}

module.exports = {
  getOverallStats,
  getPatientStats,
};
