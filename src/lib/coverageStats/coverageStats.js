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
  const diseaseStatusData = coverageData.filter((sectionObject) => sectionObject.section === diseaseSectionId);
  return getOverallStats(diseaseStatusData);
}

/**
 * Compute coverage stats across only the Treatment section
 * @param {CoverageData Object} coverageData conforming to the standard CoverageData format (explored in README)
 * @returns An object reporting percentage coverage and raw counts
 */
function getTreatmentStats(coverageData) {
  const treatmentData = coverageData.filter((sectionObject) => sectionObject.section === treatmentSectionId);
  return getOverallStats(treatmentData);
}

/**
 * Compute coverage stats across only the Assessment section
 * @param {CoverageData Object} coverageData conforming to the standard CoverageData format (explored in README)
 * @returns An object reporting percentage coverage and raw counts
 */
function getAssessmentStats(coverageData) {
  const assessmentData = coverageData.filter((sectionObject) => sectionObject.section === assessmentSectionId);
  return getOverallStats(assessmentData);
}

/**
 * Compute coverage stats across only the Genomics section
 * @param {CoverageData Object} coverageData conforming to the standard CoverageData format (explored in README)
 * @returns An object reporting percentage coverage and raw counts
 */
function getGenomicsStats(coverageData) {
  const genomicsData = coverageData.filter((sectionObject) => sectionObject.section === genomicsSectionId);
  return getOverallStats(genomicsData);
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
