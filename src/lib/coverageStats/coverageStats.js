const { patientId, outcomeId } = require('../coverageSectionIds');
const { getAllSectionsCoverage } = require('./statsUtils');

/**
 * Compute overall coverage stats across all sections
 * @param {CoverageData Object} coverageData conforming to the standard CoverageData format (explored in README)
 * @returns An object reporting percentage coverage and raw counts
 */
function getOverallStats(coverageData) {
  return getAllSectionsCoverage(coverageData);
}

/**
 * Compute coverage stats for the Patient section
 * @param {CoverageData Object} coverageData conforming to the standard CoverageData format (explored in README)
 * @returns An object reporting percentage coverage and raw counts
 */
function getPatientStats(coverageData) {
  const patientData = coverageData.filter((sectionObject) => sectionObject.section === patientId);
  return getOverallStats(patientData);
}

/**
 * Compute coverage stats across only the Outcome section
 * @param {CoverageData Object} coverageData conforming to the standard CoverageData format (explored in README)
 * @returns An object reporting percentage coverage and raw counts
 */
function getOutcomeStats(coverageData) {
  const outcomeData = coverageData.filter((sectionObject) => sectionObject.section === outcomeId);
  return getOverallStats(outcomeData);
}

module.exports = {
  getOverallStats,
  getPatientStats,
  getOutcomeStats,
};
