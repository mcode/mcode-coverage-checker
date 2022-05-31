const fhirpath = require('fhirpath');
const {
  getTumorMarkerTest,
  getSecondaryCancerCondition,
  getPrimaryCancerCondition,
  getStageGroup,
  getTNMPrimaryTumorCategory,
  getTNMDistantMetastasesCategory,
  getTNMRegionalNodesCategory,
} = require('./resourceUtils');

/**
 * Takes a bundle and returns the coverage of tummor marker test resources in that bundle
 * @param {Object} bundle, an mCODE bundle
 * @return {Object}, an object representing the coverage of all tumor marker test resources
 */
function getTumorMarkerTestCoverage(bundle) {
  const tumorMarker = getTumorMarkerTest(bundle);
  const tumorMarkerCoverage = { profile: 'Tumor Marker Test', coverage: [] };
  tumorMarker.forEach((marker) => {
    tumorMarkerCoverage.coverage.push({
      resourceID: fhirpath.evaluate(marker, 'Observation.id')[0],
      data: {
        'Result Value': {
          covered: fhirpath.evaluate(
            marker,
            'Observation.valueString.exists() or Observation.valueQuantity.exists() or Observation.valueCodeableConcept.exists() or Observation.valueRatio.exists()',
          )[0],
        },
        'Test Type': {
          covered: fhirpath.evaluate(marker, 'Observation.code.exists()')[0],
        },
      },
    });
  });
  return tumorMarkerCoverage;
}

/**
 * Takes a bundle and returns the coverage of primary cancer condition resources in that bundle
 * @param {Object} bundle, an mCODE bundle
 * @return {Object}, an object representing the coverage of all primary cancer condition resources
 */
function getPrimaryCancerConditionCoverage(bundle) {
  const primaryCancer = getPrimaryCancerCondition(bundle);
  const primaryCancerCoverage = { profile: 'Primary Cancer Condition', coverage: [] };
  primaryCancer.forEach((condition) => {
    primaryCancerCoverage.coverage.push({
      resourceID: fhirpath.evaluate(condition, 'Condition.id')[0],
      data: {
        'Asserted Date': {
          covered: fhirpath.evaluate(
            condition,
            "Condition.extension.where(url = 'http://hl7.org/fhir/StructureDefinition/condition-assertedDate').valueDateTime.exists()",
          )[0],
        },
        'Histology/Morphology': {
          covered: fhirpath.evaluate(
            condition,
            "Condition.extension.where(url = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-histology-morphology-behavior').valueCodeableConcept.exists()",
          )[0],
        },
        'Body Site': {
          covered: fhirpath.evaluate(condition, 'Condition.bodySite.exists()')[0],
        },
        Laterality: {
          covered: fhirpath.evaluate(
            condition,
            "Condition.bodySite.extension.where(url = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-laterality-qualifier').valueCodeableConcept.exists()",
          )[0],
        },
        'Location Qualifier': {
          covered: fhirpath.evaluate(
            condition,
            "Condition.bodySite.extension.where(url = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-body-location-qualifier').valueCodeableConcept.exists()",
          )[0],
        },
      },
    });
  });
  return primaryCancerCoverage;
}

/**
 * Takes a bundle and returns the coverage of secondary cancer condition resources in that bundle
 * @param {Object} bundle, an mCODE bundle
 * @return {Object}, an object representing the coverage of all secondary cancer condition resources
 */
function getSecondaryCancerConditionCoverage(bundle) {
  const secondaryCancer = getSecondaryCancerCondition(bundle);
  const secondaryCancerCoverage = { profile: 'Secondary Cancer Condition', coverage: [] };
  secondaryCancer.forEach((condition) => {
    secondaryCancerCoverage.coverage.push({
      resourceID: fhirpath.evaluate(condition, 'Condition.id')[0],
      data: {
        'Related Condition': {
          covered: fhirpath.evaluate(
            condition,
            "Condition.extension.where(url = 'http://hl7.org/fhir/StructureDefinition/condition-related').valueReference.exists()",
          )[0],
        },
      },
    });
  });
  return secondaryCancerCoverage;
}

/**
 * Takes a bundle and returns the coverage of stage group resources in that bundle
 * @param {Object} bundle, an mCODE bundle
 * @return {Object}, an object representing the coverage of all stage group resources
 */
function getStageGroupCoverage(bundle) {
  const stageGroup = getStageGroup(bundle);
  const stageGroupCoverage = { profile: 'Stage Group', coverage: [] };
  stageGroup.forEach((group) => {
    stageGroupCoverage.coverage.push({
      resourceID: fhirpath.evaluate(group, 'Observation.id')[0],
      data: {
        'Staging System': {
          covered: fhirpath.evaluate(group, 'Observation.method.exists()')[0],
        },
        'Clinical/Pathological': {
          covered: fhirpath.evaluate(group, 'Observation.code.exists()')[0],
        },
      },
    });
  });
  return stageGroupCoverage;
}

/**
 * Takes a bundle and returns the coverage of primary tumor category resources in that bundle
 * @param {Object} bundle, an mCODE bundle
 * @return {Object}, an object representing the coverage of all primary tumor category resources
 */
function getTNMPrimaryTumorCategoryCoverage(bundle) {
  const tumorCategory = getTNMPrimaryTumorCategory(bundle);
  const tumorCategoryCoverage = { profile: 'Primary Tumor Category', coverage: [] };
  tumorCategory.forEach((category) => {
    tumorCategoryCoverage.coverage.push({
      resourceID: fhirpath.evaluate(category, 'Observation.id')[0],
      data: {
        'Result Value': {
          covered: fhirpath.evaluate(category, 'Observation.valueCodeableConcept.exists()')[0],
        },
      },
    });
  });
  return tumorCategoryCoverage;
}

/**
 * Takes a bundle and returns the coverage of distant metastases category resources in that bundle
 * @param {Object} bundle, an mCODE bundle
 * @return {Object}, an object representing the coverage of all distant metastases category resources
 */
function getTNMDistantMetastasesCategoryCoverage(bundle) {
  const metastasesCategory = getTNMDistantMetastasesCategory(bundle);
  const metastasesCategoryCoverage = { profile: 'Distant Metastases Category', coverage: [] };
  metastasesCategory.forEach((category) => {
    metastasesCategoryCoverage.coverage.push({
      resourceID: fhirpath.evaluate(category, 'Observation.id')[0],
      data: {
        'Result Value': {
          covered: fhirpath.evaluate(category, 'Observation.valueCodeableConcept.exists()')[0],
        },
      },
    });
  });
  return metastasesCategoryCoverage;
}

/**
 * Takes a bundle and returns the coverage of regional nodes category resources in that bundle
 * @param {Object} bundle, an mCODE bundle
 * @return {Object}, an object representing the coverage of all regional nodes category resources
 */
function getTNMRegionalNodesCategoryCoverage(bundle) {
  const nodesCategory = getTNMRegionalNodesCategory(bundle);
  const nodesCategoryCoverage = { profile: 'Regional Nodes Category', coverage: [] };
  nodesCategory.forEach((category) => {
    nodesCategoryCoverage.coverage.push({
      resourceID: fhirpath.evaluate(category, 'Observation.id')[0],
      data: {
        'Result Value': {
          covered: fhirpath.evaluate(category, 'Observation.valueCodeableConcept.exists()')[0],
        },
      },
    });
  });
  return nodesCategoryCoverage;
}

/**
 * Takes a bundle and returns the coverage of disease resources in that bundle
 * @param {Object} bundle, an mCODE bundle
 * @return {Object}, an object representing the coverage of the Disease section of the mCODE diagram
 */
function getDiseaseCoverage(bundle) {
  return {
    section: 'Disease',
    data: [
      getTumorMarkerTestCoverage(bundle),
      getPrimaryCancerConditionCoverage(bundle),
      getSecondaryCancerConditionCoverage(bundle),
      getStageGroupCoverage(bundle),
      getTNMPrimaryTumorCategoryCoverage(bundle),
      getTNMDistantMetastasesCategoryCoverage(bundle),
      getTNMRegionalNodesCategoryCoverage(bundle),
    ],
  };
}

module.exports = {
  getDiseaseCoverage,
};
