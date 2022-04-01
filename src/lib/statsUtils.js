// Number of covered fields nested in a profile object's individual patient coverage reports
function getProfileCoveredCount(profileObject) {
  return profileObject.coverage.reduce(
    // TODO: change when patient data model changes
    (accum2, patientObject) => accum2 + Object.values(patientObject).filter(Boolean).length,
    0,
  );
}

// Number of total coverable-fields nested in a profile object's individual patient coverage reports
function getProfileTotalCount(profileObject) {
  return profileObject.coverage.reduce(
    // TODO: change when patient data model changes
    (accum2, patientObject) => accum2 + Object.keys(patientObject).length,
    0,
  );
}

// Number of covered fields across an entire sections k-many profiles
function getSectionCoveredCount(sectionObject) {
  return sectionObject.data.reduce((accum, profileObject) => accum + getProfileCoveredCount(profileObject), 0);
}

// Number of coverable-fields across an entire sections k-many profiles
function getSectionTotalCount(sectionObject) {
  return sectionObject.data.reduce((accum, profileObject) => accum + getProfileTotalCount(profileObject), 0);
}

// Coverage stats - percentage and raw counts - for all sections
function getOverallStats(coverageData) {
  const totalCovered = coverageData.reduce((accum, sectionObject) => accum + getSectionCoveredCount(sectionObject), 0);
  const totalPossible = coverageData.reduce((accum, sectionObject) => accum + getSectionTotalCount(sectionObject), 0);
  return { percentage: totalCovered / totalPossible, covered: totalCovered, possible: totalPossible };
}

function getPatientStats(coverageData) {
  const PATIENTSECTIONID = 'Patient';
  const patientData = coverageData.filter((sectionObject) => sectionObject.section === PATIENTSECTIONID);
  return getOverallStats(patientData);
}

module.exports = {
  getOverallStats,
  getPatientStats,
};
