import fieldIds from '../coverageFieldIds';

// NOTES
// getProfileCoveredCount and getProfileTotalCount are pretty much the root functions here, everything else calls them
// dont use recoil stuff here, these should be pure functions

const getFilteredFields = (fieldFilter, profile) =>
  Object.keys(fieldFilter[profile]).filter((field) => fieldFilter[profile][field]);

// Number of covered fields nested in a profile object's several coverage objects
// Here a field is considered covered if at least resource has a true covered value for it
// thus the total can't exceed the number of fields in the profile
function getProfileCoveredCount(profileObject, fieldFilter = null) {
  const fields = fieldFilter ? getFilteredFields(fieldFilter, profileObject.profile) : fieldIds[profileObject.profile];
  return fields.filter((field) => profileObject.coverage.some((r) => r.data[field].covered)).length;
}

// Number of total fields covered across all resources
// this counts each instance of a field being covered across all resources
// thus the total can exceed the number of fields in the profile
function getProfileCoveredSum(profileObject, fieldFilter = null) {
  const fields = fieldFilter ? getFilteredFields(fieldFilter, profileObject.profile) : fieldIds[profileObject.profile];
  return profileObject.coverage.reduce((accum2, coverageObject) => {
    let sum = 0;
    Object.entries(coverageObject.data).forEach(([key, value]) => {
      if (fields.includes(key) && value.covered) sum += 1;
    });
    return accum2 + sum;
  }, 0);
}

// Returns an array of objects representing if each field in a profile is covered
// Here a field is considered covered if at least one resource has a true covered value for it
// Thus total is always 1 and covered can be only 0 or 1
function getProfileFieldsCoveredCount(profileObject, section, fieldFilter = null) {
  const fieldCounts = [];
  const fields = fieldFilter ? getFilteredFields(fieldFilter, profileObject.profile) : fieldIds[profileObject.profile];
  fields.forEach((field) => {
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
function getProfileFieldsCoveredSum(profileObject, section, fieldFilter = null) {
  const fields = fieldFilter ? getFilteredFields(fieldFilter, profileObject.profile) : fieldIds[profileObject.profile];
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
function getAllFieldCoveredCounts(coverageData, fieldFilter = null) {
  const allFieldsCoveredCount = [];
  coverageData.forEach((section) => {
    section.data.forEach((profile) => {
      allFieldsCoveredCount.push(...getProfileFieldsCoveredCount(profile, section.section, fieldFilter));
    });
  });
  return allFieldsCoveredCount;
}

// Returns an array of all fields covered sums (from getProfileFieldsCoveredSum) for each section
// This counts each instance of a field being covered across all resources
// Thus total will be the number of resources present and covered can be between 0 and the number of resources
function getAllFieldCoveredSums(coverageData, fieldFilter = null) {
  const allFieldsCoveredSum = [];
  coverageData.forEach((section) => {
    section.data.forEach((profile) => {
      allFieldsCoveredSum.push(...getProfileFieldsCoveredSum(profile, section.section, fieldFilter));
    });
  });
  return allFieldsCoveredSum;
}

// Number of total coverable-fields nested in a profile object's several coverage objects
function getProfileTotalCount(profileObject, fieldFilter = null) {
  const fields = fieldFilter ? getFilteredFields(fieldFilter, profileObject.profile) : fieldIds[profileObject.profile];
  return fields.length;
}

// Number of covered fields across an entire sections k-many profiles
function getSectionCoveredCount(sectionObject, fieldFilter = null) {
  return sectionObject.data.reduce(
    (accum, profileObject) => accum + getProfileCoveredCount(profileObject, fieldFilter),
    0,
  );
}

// Number of coverable-fields across an entire sections k-many profiles
function getSectionTotalCount(sectionObject, fieldFilter = null) {
  return sectionObject.data.reduce(
    (accum, profileObject) => accum + getProfileTotalCount(profileObject, fieldFilter),
    0,
  );
}

/**
 * Compute the aggregate coverage statistics for all sections in a given array
 * @param {CoverageData Object} coverageData conforming to the standard CoverageData format (explored in README)
 * @returns An object reporting percentage coverage - `percentage`,
 * raw counts for total possible dataelements covered - `possible`,
 * and the actual number of dataelements covered - `covered`
 */
function getAllSectionsCoverage(coverageData, fieldFilter = null) {
  const totalCovered = coverageData.reduce(
    (accum, sectionObject) => accum + getSectionCoveredCount(sectionObject, fieldFilter),
    0,
  );
  const totalPossible = coverageData.reduce(
    (accum, sectionObject) => accum + getSectionTotalCount(sectionObject, fieldFilter),
    0,
  );
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
