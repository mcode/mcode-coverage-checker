// Number of covered fields nested in a profile object's several coverage objects
function getProfileCoveredCount(profileObject) {
  return profileObject.coverage.reduce(
    (accum2, coverageObject) =>
      // Filter to only the elements in the coverageObject for whom the `covered` property is true
      accum2 + Object.values(coverageObject.data).filter((coverageData) => coverageData.covered).length,
    0,
  );
}

function getProfileFieldsCoveredCount(profileObject, section) {
  if (profileObject.coverage.length === 0) {
    return [];
  }
  const fields = Object.keys(profileObject.coverage[0].data);
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

function getAllFieldCoveredCounts(coverageData) {
  const allFieldsCoveredCount = [];
  coverageData.forEach((section) => {
    section.data.forEach((profile) => {
      allFieldsCoveredCount.push(...getProfileFieldsCoveredCount(profile, section.section));
    });
  });
  return allFieldsCoveredCount;
}

// Number of total coverable-fields nested in a profile object's several coverage objects
function getProfileTotalCount(profileObject) {
  return profileObject.coverage.reduce((accum2, coverageObject) => accum2 + Object.keys(coverageObject.data).length, 0);
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

export { getAllSectionsCoverage, getAllFieldCoveredCounts };
