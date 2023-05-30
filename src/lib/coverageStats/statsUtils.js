import fieldIds from '../coverageFieldIds';

// Number of covered fields nested in a profile object's several coverage objects
// Here a field is considered covered if at least resource has a true covered value for it
// thus the total can't exceed the number of fields in the profile
function getProfileCoveredCount(profileObject) {
  return fieldIds[profileObject.profile].filter((field) => profileObject.coverage.some((r) => r.data[field].covered))
    .length;
}

// Number of total fields covered across all resources
// this counts each instance of a field being covered across all resources
// thus the total can exceed the number of fields in the profile
function getProfileCoveredSum(profileObject) {
  return profileObject.coverage.reduce(
    (accum2, coverageObject) =>
      // Filter to only the elements in the coverageObject for whom the `covered` property is true
      accum2 + Object.values(coverageObject.data).filter((coverageData) => coverageData.covered).length,
    0,
  );
}

// Returns an array of objects representing if each field in a profile is covered
// Here a field is considered covered if at least one resource has a true covered value for it
// Thus total is always 1 and covered can be only 0 or 1
function getProfileFieldsCoveredCount(profileObject, section) {
  const fieldCounts = [];
  fieldIds[profileObject.profile].forEach((field) => {
    const coveredCount = profileObject.coverage.some((r) => r.data[field].covered) ? 1 : 0;
    fieldCounts.push({
      name: field,
      profile: profileObject.profile,
      section,
      covered: coveredCount,
      total: 1,
      percentage: coveredCount / 1,
    });
  });
  return fieldCounts;
}

// Returns an array of objects representing how many instances of each field in a profile are covered
// This counts each instance of a field being covered across all resources
// Thus total will be the number of resources present and covered can be between 0 and the number of resources
function getProfileFieldsCoveredSum(profileObject, section) {
  const fields = fieldIds[profileObject.profile];
  const fieldCounts = [];
  const totalCount = profileObject.coverage.length;
  fields.forEach((field) => {
    const coveredCount = profileObject.coverage.reduce(
      (accum, coverageObject) => accum + (coverageObject.data[field].covered ? 1 : 0),
      0,
    );
    fieldCounts.push({
      name: field,
      profile: profileObject.profile,
      section,
      covered: coveredCount,
      total: totalCount,
      percentage: coveredCount / totalCount,
    });
  });
  return fieldCounts;
}

// Returns an array of all fields covered counts (from getProfileFieldsCoveredCount) for each section
// Here a field is considered covered if at least one resource has a true covered value for it
// Thus total is always 1 and covered can be only 0 or 1
function getAllFieldCoveredCounts(coverageData) {
  const allFieldsCoveredCount = [];
  coverageData.forEach((section) => {
    section.data.forEach((profile) => {
      allFieldsCoveredCount.push(...getProfileFieldsCoveredCount(profile, section.section));
    });
  });
  return allFieldsCoveredCount;
}

// Returns an array of all fields covered sums (from getProfileFieldsCoveredSum) for each section
// This counts each instance of a field being covered across all resources
// Thus total will be the number of resources present and covered can be between 0 and the number of resources
function getAllFieldCoveredSums(coverageData) {
  const allFieldsCoveredSum = [];
  coverageData.forEach((section) => {
    section.data.forEach((profile) => {
      allFieldsCoveredSum.push(...getProfileFieldsCoveredSum(profile, section.section));
    });
  });
  return allFieldsCoveredSum;
}

// Number of total coverable-fields nested in a profile object's several coverage objects
function getProfileTotalCount(profileObject) {
  return fieldIds[profileObject.profile].length;
}

// Number of covered fields across an entire sections k-many profiles
function getSectionCoveredCount(sectionObject) {
  return sectionObject.data.reduce((accum, profileObject) => accum + getProfileCoveredCount(profileObject), 0);
}

// Number of coverable-fields across an entire sections k-many profiles
function getSectionTotalCount(sectionObject) {
  return sectionObject.data.reduce((accum, profileObject) => accum + getProfileTotalCount(profileObject), 0);
}

/**
 * Compute the aggregate coverage statistics for all sections in a given array
 * @param {CoverageData Object} coverageData conforming to the standard CoverageData format (explored in README)
 * @returns An object reporting percentage coverage - `percentage`,
 * raw counts for total possible dataelements covered - `possible`,
 * and the actual number of dataelements covered - `covered`
 */
function getAllSectionsCoverage(coverageData) {
  const totalCovered = coverageData.reduce((accum, sectionObject) => accum + getSectionCoveredCount(sectionObject), 0);
  // TODO: Since empty sections have no profiles with keys, totalPossible should be declarative informatino
  // stored elsewhere in the app, not inferred information based on sections
  const totalPossible = coverageData.reduce((accum, sectionObject) => accum + getSectionTotalCount(sectionObject), 0);
  return {
    percentage: totalPossible === 0 ? totalPossible : totalCovered / totalPossible,
    covered: totalCovered,
    possible: totalPossible,
  };
}

export {
  getAllSectionsCoverage,
  getProfileFieldsCoveredCount,
  getProfileFieldsCoveredSum,
  getAllFieldCoveredCounts,
  getProfileCoveredSum,
  getAllFieldCoveredSums,
};
