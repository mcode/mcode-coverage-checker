const fhirpath = require('fhirpath');
const { getPatient } = require('./resourceUtils');

/**
 * Takes a bundle and returns the coverage of patient resources in that bundle
 * @param {Object} bundle, an mCODE bundle
 * @return {Array}, an array of objects where each object has keys corresponding to fields in the mCODE diagram
 * and boolean values indicating if the field is covered
 */
function getPatientCoverage(bundle) {
  const patients = getPatient(bundle);
  const coverage = [];
  patients.forEach((patient) => {
    coverage.push({
      Name: fhirpath.evaluate(patient, 'Patient.name.exists()')[0],
      'Contact Info': fhirpath.evaluate(patient, 'Patient.contact.telecom.exists()')[0],
      'Birth Date': fhirpath.evaluate(patient, 'Patient.birthDate.exists()')[0],
      Gender: fhirpath.evaluate(patient, 'Patient.gender.exists()')[0],
      'Zip Code': fhirpath.evaluate(patient, 'Patient.address.exists() and Patient.address.postalCode.exists()')[0],
      'US Core Race': fhirpath.evaluate(
        patient,
        "Patient.extension.where(url='http://hl7.org/fhir/us/core/StructureDefinition/us-core-race').exists()",
      )[0],
      'US Core Ethnicity': fhirpath.evaluate(
        patient,
        "Patient.extension.where(url='http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity').exists()",
      )[0],
    });
  });
  return coverage;
}

module.exports = {
  getPatientCoverage,
};
