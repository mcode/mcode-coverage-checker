import {
  patientSectionId,
  outcomeSectionId,
  diseaseSectionId,
  treatmentSectionId,
  assessmentSectionId,
  genomicsSectionId,
} from '../coverageSectionIds';
import { getAllSectionsCoverage } from './statsUtils';

/**
 * Compute overall coverage stats across all sections
 * @param {CoverageData Object} coverageData conforming to the standard CoverageData format (explored in README)
 * @returns An object reporting percentage coverage and raw counts
 */
function getOverallStats(coverageData, fieldFilter = null) {
  return getAllSectionsCoverage(coverageData, fieldFilter);
}

/**
 * Compute coverage stats for the Patient section
 * @param {CoverageData Object} coverageData conforming to the standard CoverageData format (explored in README)
 * @returns An object reporting percentage coverage and raw counts
 */
function getPatientStats(coverageData, fieldFilter = null) {
  const patientData = coverageData.filter((sectionObject) => sectionObject.section === patientSectionId);
  return getOverallStats(patientData, fieldFilter);
}

/**
 * Compute coverage stats across only the Outcome section
 * @param {CoverageData Object} coverageData conforming to the standard CoverageData format (explored in README)
 * @returns An object reporting percentage coverage and raw counts
 */
function getOutcomeStats(coverageData, fieldFilter = null) {
  const outcomeData = coverageData.filter((sectionObject) => sectionObject.section === outcomeSectionId);
  return getOverallStats(outcomeData, fieldFilter);
}

/**
 * Compute coverage stats across only the Disease section
 * @param {CoverageData Object} coverageData conforming to the standard CoverageData format (explored in README)
 * @returns An object reporting percentage coverage and raw counts
 */
function getDiseaseStats(coverageData, fieldFilter = null) {
  const diseaseStatusData = coverageData.filter((sectionObject) => sectionObject.section === diseaseSectionId);
  return getOverallStats(diseaseStatusData, fieldFilter);
}

/**
 * Compute coverage stats across only the Treatment section
 * @param {CoverageData Object} coverageData conforming to the standard CoverageData format (explored in README)
 * @returns An object reporting percentage coverage and raw counts
 */
function getTreatmentStats(coverageData, fieldFilter = null) {
  const treatmentData = coverageData.filter((sectionObject) => sectionObject.section === treatmentSectionId);
  return getOverallStats(treatmentData, fieldFilter);
}

/**
 * Compute coverage stats across only the Assessment section
 * @param {CoverageData Object} coverageData conforming to the standard CoverageData format (explored in README)
 * @returns An object reporting percentage coverage and raw counts
 */
function getAssessmentStats(coverageData, fieldFilter = null) {
  const assessmentData = coverageData.filter((sectionObject) => sectionObject.section === assessmentSectionId);
  return getOverallStats(assessmentData, fieldFilter);
}

/**
 * Compute coverage stats across only the Genomics section
 * @param {CoverageData Object} coverageData conforming to the standard CoverageData format (explored in README)
 * @returns An object reporting percentage coverage and raw counts
 */
function getGenomicsStats(coverageData, fieldFilter = null) {
  const genomicsData = coverageData.filter((sectionObject) => sectionObject.section === genomicsSectionId);
  return getOverallStats(genomicsData, fieldFilter);
}

export {
  getOverallStats,
  getPatientStats,
  getOutcomeStats,
  getDiseaseStats,
  getTreatmentStats,
  getAssessmentStats,
  getGenomicsStats,
};
