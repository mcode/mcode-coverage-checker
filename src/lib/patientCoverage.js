const fhirpath = require('fhirpath');
const { getPatient } = require('./resourceUtils');
const testbundle = require('../../test/fullBundle.json');
/**
 * Takes a bundle and returns the coverage of patient resources in that bundle
 * @param {Object} bundle, an mCODE bundle
 * @return {Object}, an object representing the coverage of the Patient dection of the mCODE diagram
 */
function getPatientCoverage(bundle) {
  const patients = getPatient(bundle);
  const patientCoverage = { profile: 'Cancer Patient', coverage: [] };
  patients.forEach((patient) => {
    patientCoverage.coverage.push({
      resourceID: fhirpath.evaluate(patient, 'Patient.id')[0],
      data: {
        Name: { covered: fhirpath.evaluate(patient, 'Patient.name.exists()')[0] },
        'Contact Info': { covered: fhirpath.evaluate(patient, 'Patient.contact.telecom.exists()')[0] },
        'Birth Date': { covered: fhirpath.evaluate(patient, 'Patient.birthDate.exists()')[0] },
        Gender: { covered: fhirpath.evaluate(patient, 'Patient.gender.exists()')[0] },
        'Zip Code': {
          covered: fhirpath.evaluate(patient, 'Patient.address.exists() and Patient.address.postalCode.exists()')[0],
        },
        'US Core Race': {
          covered: fhirpath.evaluate(
            patient,
            "Patient.extension.where(url='http://hl7.org/fhir/us/core/StructureDefinition/us-core-race').exists()",
          )[0],
        },
        'US Core Ethnicity': {
          covered: fhirpath.evaluate(
            patient,
            "Patient.extension.where(url='http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity').exists()",
          )[0],
        },
      },
    });
  });
  return {
    section: 'Patient',
    data: [patientCoverage],
  };
}

console.log(JSON.stringify(getPatientCoverage(testbundle), null, 2));

module.exports = {
  getPatientCoverage,
};
