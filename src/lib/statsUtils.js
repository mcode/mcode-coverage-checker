function overallStats(coverageReport) {
  const stat = coverageReport ? 1 : 2;
  return { stat };
}

function patientStats(coverageReport) {
  const stat = coverageReport ? 1 : 2;
  return { stat };
}

module.exports = {
  overallStats,
  patientStats,
};
