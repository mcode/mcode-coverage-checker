// Think of this file as an ENUM
const patientSectionId = 'Patient';
const outcomeSectionId = 'Outcome';
const diseaseSectionId = 'Disease';
const treatmentSectionId = 'Treatment';
const assessmentSectionId = 'Assessment';
const genomicsSectionId = 'Genomics';

const sectionColors = {
  fill: {
    Patient: 'fill-patient',
    Outcome: 'fill-outcome',
    Disease: 'fill-disease',
    Treatment: 'fill-treatment',
    Assessment: 'fill-assessment',
    Genomics: 'fill-genomics',
    Overall: 'fill-black',
  },
  text: {
    Patient: 'text-patient',
    Outcome: 'text-outcome',
    Disease: 'text-disease',
    Treatment: 'text-treatment',
    Assessment: 'text-assessment',
    Genomics: 'text-genomics',
    Overall: 'text-black',
  },
  hex: {
    Patient: '#d24200',
    Outcome: '#8a45d9',
    Disease: '#f2b84b',
    Treatment: '#04b2d9',
    Assessment: '#f2913d',
    Genomics: '#26c485',
    Overall: '#000000',
  },
};

export {
  patientSectionId,
  outcomeSectionId,
  diseaseSectionId,
  treatmentSectionId,
  assessmentSectionId,
  genomicsSectionId,
  sectionColors,
};
