const TumorMarkerTestVS = require('./valueSets/ValueSet-mcode-tumor-marker-test-vs.json');
const SecondaryCancerDisorderVS = require('./valueSets/ValueSet-mcode-secondary-cancer-disorder-vs.json');
const PrimaryCancerDisorderVS = require('./valueSets/ValueSet-mcode-primary-cancer-disorder-vs.json');
const RadiotherapyVolumeTypeVS = require('./valueSets/ValueSet-mcode-radiotherapy-volume-type-vs.json');
const GenomicSpecimenTypeVS = require('./valueSets/ValueSet-mcode-genomic-specimen-type-vs.json');

// Map names used in VS to the corresponding JSON
const DEFAULTVSLOOKUP = {
  TumorMarkerTestVS,
  SecondaryCancerDisorderVS,
  PrimaryCancerDisorderVS,
  RadiotherapyVolumeTypeVS,
  GenomicSpecimenTypeVS,
};

function getConceptFromVSExpansion(valueSet, code, codeSystem) {
  if (!code || !codeSystem || !valueSet) return undefined;
  return valueSet.expansion.contains.find(
    (containsItem) =>
      containsItem && containsItem.system && code === containsItem.code && codeSystem === containsItem.system,
  );
}

function getConceptFromVSCompose(valueSet, code, codeSystem) {
  if (!code || !codeSystem || !valueSet) return undefined;
  const includeItem = valueSet.compose.include.find(
    (item) => item && item.system && item.system === codeSystem && item.concept,
  );
  if (!includeItem) return undefined;
  return includeItem.concept.find((concept) => concept.code === code);
}
class ValueSetCodeChecker {
  constructor(valueSetLookup = DEFAULTVSLOOKUP) {
    this.valueSetLookup = valueSetLookup;
  }

  /**
   * Check if code is in value set
   * @param {string} code value to look for in a valueSet
   * @param {string} codeSystem the system to which the code value belongs
   * @param {string} valueSetName the name of the value set to be searched
   * @return {boolean} true if condition is in valueSet's compose block or expansion block
   */
  checkCodeInVs(code, codeSystem, valueSetName) {
    const valueSet = this.valueSetLookup[valueSetName];
    let inVSExpansion = false;
    let inVSCompose = false;
    if (valueSet.expansion) {
      // If valueSet has expansion, we only need to check these codes
      inVSExpansion = getConceptFromVSExpansion(valueSet, code, codeSystem) !== undefined;
    } else {
      // Checks if code is in any of the valueSet.compose.include arrays
      inVSCompose = getConceptFromVSCompose(valueSet, code, codeSystem) !== undefined;
    }
    return inVSCompose || inVSExpansion;
  }
}

module.exports = {
  ValueSetCodeChecker,
};
