import fhirpath from 'fhirpath';
import { getKarnofskyPerformanceStatus, getComorbidities, getECOGPerfomanceStatus } from '../resourceFilters';
import { assessmentSectionId } from '../coverageSectionIds';
import { assessmentProfileIds } from '../coverageProfileIds';

/**
 * Takes a bundle and returns the coverage of Karnofsky performance status resources in that bundle
 * @param {Object} bundle, an mCODE bundle
 * @return {Object}, an object representing the coverage of all performance status resources
 */
function getKarnofskyPerformanceStatusCoverage(bundle) {
  const karnofsky = getKarnofskyPerformanceStatus(bundle);
  const { karnofskyPerformanceStatusId } = assessmentProfileIds;
  const karnofskyCoverage = { profile: karnofskyPerformanceStatusId, coverage: [] };
  karnofsky.forEach((status) => {
    karnofskyCoverage.coverage.push({
      resourceID: fhirpath.evaluate(status, 'Observation.id')[0],
      data: {
        Score: {
          covered: fhirpath.evaluate(status, 'Observation.valueInteger.exists()')[0],
        },
        Interpretation: {
          covered: fhirpath.evaluate(status, 'Observation.interpretation.exists()')[0],
        },
      },
    });
  });
  return karnofskyCoverage;
}

/**
 * Takes a bundle and returns the coverage of comorbidities resources in that bundle
 * @param {Object} bundle, an mCODE bundle
 * @return {Object}, an object representing the coverage of all comorbidities resources
 */
function getComorbiditiesCoverage(bundle) {
  const comorbidities = getComorbidities(bundle);
  const { comorbiditiesId } = assessmentProfileIds;
  const comorbiditiesCoverage = { profile: comorbiditiesId, coverage: [] };
  comorbidities.forEach((comorbid) => {
    comorbiditiesCoverage.coverage.push({
      resourceID: fhirpath.evaluate(comorbid, 'Observation.id')[0],
      data: {
        'Risk Score': {
          covered: fhirpath.evaluate(comorbid, 'Observation.valueInteger.exists()')[0],
        },
        Component: { covered: fhirpath.evaluate(comorbid, 'Observation.component.exists()')[0] },
        'Present/Absent': {
          covered: fhirpath.evaluate(comorbid, 'Observation.component.valueCodeableConcept.exists()')[0],
        },
        'Condition Code': {
          covered: fhirpath.evaluate(
            comorbid,
            "Observation.component.extension.where(url = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-comorbid-condition-code').valueCodeableConcept.exists()",
          )[0],
        },
        'Condition Reference': {
          covered: fhirpath.evaluate(
            comorbid,
            "Observation.component.extension.where(url = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-comorbid-condition-reference').valueReference.exists()",
          )[0],
        },
      },
    });
  });
  return comorbiditiesCoverage;
}

/**
 * Takes a bundle and returns the coverage of ECOG performance status resources in that bundle
 * @param {Object} bundle, an mCODE bundle
 * @return {Object}, an object representing the coverage of all ECOG performance status resources
 */
function getECOGPerfomanceStatusCoverage(bundle) {
  const ecog = getECOGPerfomanceStatus(bundle);
  const { ecogPerformanceStatusId } = assessmentProfileIds;
  const ecogCoverage = { profile: ecogPerformanceStatusId, coverage: [] };
  ecog.forEach((status) => {
    ecogCoverage.coverage.push({
      resourceID: fhirpath.evaluate(status, 'Observation.id')[0],
      data: {
        Score: {
          covered: fhirpath.evaluate(status, 'Observation.valueInteger.exists()')[0],
        },
        Interpretation: {
          covered: fhirpath.evaluate(status, 'Observation.interpretation.exists()')[0],
        },
      },
    });
  });
  return ecogCoverage;
}

/**
 * Takes a bundle and returns the coverage of assessment resources in that bundle
 * @param {Object} bundle, an mCODE bundle
 * @return {Object}, an object representing the coverage of the Assessment section of the mCODE diagram
 */
function getAssessmentCoverage(bundle) {
  return {
    section: assessmentSectionId,
    data: [
      getKarnofskyPerformanceStatusCoverage(bundle),
      getComorbiditiesCoverage(bundle),
      getECOGPerfomanceStatusCoverage(bundle),
    ],
  };
}

export default getAssessmentCoverage;
