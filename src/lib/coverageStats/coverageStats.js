const { patientSectionId, outcomeSectionId, diseaseSectionId, treatmentSectionId } = require('../coverageSectionIds');
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
  const patientData = coverageData.filter((sectionObject) => sectionObject.section === patientSectionId);
  return getOverallStats(patientData);
}

/**
 * Compute coverage stats across only the Outcome section
 * @param {CoverageData Object} coverageData conforming to the standard CoverageData format (explored in README)
 * @returns An object reporting percentage coverage and raw counts
 */
function getOutcomeStats(coverageData) {
  const outcomeData = coverageData.filter((sectionObject) => sectionObject.section === outcomeSectionId);
  return getOverallStats(outcomeData);
}

/**
 * Compute coverage stats across only the Disease section
 * @param {CoverageData Object} coverageData conforming to the standard CoverageData format (explored in README)
 * @returns An object reporting percentage coverage and raw counts
 */
function getDiseaseStats(coverageData) {
  const outcomeData = coverageData.filter((sectionObject) => sectionObject.section === diseaseSectionId);
  return getOverallStats(outcomeData);
}

/**
 * Compute coverage stats across only the Treatment section
 * @param {CoverageData Object} coverageData conforming to the standard CoverageData format (explored in README)
 * @returns An object reporting percentage coverage and raw counts
 */
function getTreatmentStats(coverageData) {
  const outcomeData = coverageData.filter((sectionObject) => sectionObject.section === treatmentSectionId);
  return getOverallStats(outcomeData);
}

module.exports = {
  getOverallStats,
  getPatientStats,
  getOutcomeStats,
  getDiseaseStats,
  getTreatmentStats,
};
