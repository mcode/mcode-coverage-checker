import { Icon } from '@iconify/react';
import SectionCard from './SectionCard';
import {
  getAssessmentStats,
  getDiseaseStats,
  getGenomicsStats,
  getOutcomeStats,
  getOverallStats,
  getPatientStats,
  getTreatmentStats,
} from '../lib/coverageStats/coverageStats';
import { getAllFieldCoveredCounts } from '../lib/coverageStats/statsUtils';
import {
  patientSectionId,
  outcomeSectionId,
  diseaseSectionId,
  treatmentSectionId,
  assessmentSectionId,
  genomicsSectionId,
  overallSectionId,
} from '../lib/coverageSectionIds';

function MainVisualization({ className, coverageData, selectedSection, setSelectedSection }) {
  const overall = getOverallStats(coverageData);
  const patient = getPatientStats(coverageData);
  const outcome = getOutcomeStats(coverageData);
  const disease = getDiseaseStats(coverageData);
  const treatment = getTreatmentStats(coverageData);
  const assessment = getAssessmentStats(coverageData);
  const genomics = getGenomicsStats(coverageData);

  const fields = getAllFieldCoveredCounts(coverageData);
  const patientSubcategories = `${
    fields.filter((field) => field.section === patientSectionId && field.percentage === 1).length
  }/${fields.filter((field) => field.section === patientSectionId).length}`;
  const outcomeSubcategories = `${
    fields.filter((field) => field.section === outcomeSectionId && field.percentage === 1).length
  }/${fields.filter((field) => field.section === outcomeSectionId).length}`;
  const diseaseSubcategories = `${
    fields.filter((field) => field.section === diseaseSectionId && field.percentage === 1).length
  }/${fields.filter((field) => field.section === diseaseSectionId).length}`;
  const treatmentSubcategories = `${
    fields.filter((field) => field.section === treatmentSectionId && field.percentage === 1).length
  }/${fields.filter((field) => field.section === treatmentSectionId).length}`;
  const assessmentSubcategories = `${
    fields.filter((field) => field.section === assessmentSectionId && field.percentage === 1).length
  }/${fields.filter((field) => field.section === assessmentSectionId).length}`;
  const genomicsSubcategories = `${
    fields.filter((field) => field.section === genomicsSectionId && field.percentage === 1).length
  }/${fields.filter((field) => field.section === genomicsSectionId).length}`;

  return (
    <div className={`grid grid-cols-3 gap-5 flex-auto ${className}`}>
      <SectionCard
        className={selectedSection === overallSectionId ? 'h-48 border-2 border-black' : 'h-48'}
        buttonClassName="col-span-3"
        header={<p className="font-sans font-bold text-4xl">Overall mCODE Coverage</p>}
        text={
          <div className="flex flex-row">
            <Icon icon="bi:people-fill" height="24" color="#9ca3af" className="pr-2" />
            <p className="text-s text-gray-400">{patient.possible} Patients</p>
          </div>
        }
        gaugeSize="h-44 w-44"
        percentage={overall.percentage}
        color="#000000"
        onClick={() => setSelectedSection(overallSectionId)}
      />
      <SectionCard
        className={selectedSection === patientSectionId ? 'border-2 border-patient' : ''}
        header={<p className="font-sans font-bold text-{32px}">Patient</p>}
        text={<p className="text-xs text-gray-400">{patientSubcategories} Subcategories</p>}
        gaugeSize="h-24 w-24"
        percentage={patient.percentage}
        color="#d24200"
        onClick={() => setSelectedSection(patientSectionId)}
      />
      <SectionCard
        className={selectedSection === outcomeSectionId ? 'border-2 border-outcome' : ''}
        header={<p className="font-sans font-bold text-{32px}">Outcome</p>}
        text={<p className="text-xs text-gray-400">{outcomeSubcategories} Subcategories</p>}
        gaugeSize="h-24 w-24"
        percentage={outcome.percentage}
        color="#8a45d9"
        onClick={() => setSelectedSection(outcomeSectionId)}
      />
      <SectionCard
        className={selectedSection === diseaseSectionId ? 'border-2 border-disease' : ''}
        header={<p className="font-sans font-bold text-{32px}">Disease</p>}
        text={<p className="text-xs text-gray-400">{diseaseSubcategories} Subcategories</p>}
        gaugeSize="h-24 w-24"
        percentage={disease.percentage}
        color="#f2b84b"
        onClick={() => setSelectedSection(diseaseSectionId)}
      />
      <SectionCard
        className={selectedSection === treatmentSectionId ? 'border-2 border-treatment' : ''}
        header={<p className="font-sans font-bold text-{32px}">Treatment</p>}
        text={<p className="text-xs text-gray-400">{treatmentSubcategories} Subcategories</p>}
        gaugeSize="h-24 w-24"
        percentage={treatment.percentage}
        color="#04b2d9"
        onClick={() => setSelectedSection(treatmentSectionId)}
      />
      <SectionCard
        className={selectedSection === assessmentSectionId ? 'border-2 border-assessment' : ''}
        header={<p className="font-sans font-bold text-{32px}">Assessment</p>}
        text={<p className="text-xs text-gray-400">{assessmentSubcategories} Subcategories</p>}
        gaugeSize="h-24 w-24"
        percentage={assessment.percentage}
        color="#f2913d"
        onClick={() => setSelectedSection(assessmentSectionId)}
      />
      <SectionCard
        className={selectedSection === genomicsSectionId ? 'border-2 border-genomics' : ''}
        header={<p className="font-sans font-bold text-{32px}">Genomics</p>}
        text={<p className="text-xs text-gray-400">{genomicsSubcategories} Subcategories</p>}
        gaugeSize="h-24 w-24"
        percentage={genomics.percentage}
        color="#26c485"
        onClick={() => setSelectedSection(genomicsSectionId)}
      />
    </div>
  );
}

export default MainVisualization;
