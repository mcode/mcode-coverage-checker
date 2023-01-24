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

function MainVisualization({ coverageData, className }) {
  const overall = getOverallStats(coverageData);
  const patient = getPatientStats(coverageData);
  const outcome = getOutcomeStats(coverageData);
  const disease = getDiseaseStats(coverageData);
  const treatment = getTreatmentStats(coverageData);
  const assessment = getAssessmentStats(coverageData);
  const genomics = getGenomicsStats(coverageData);

  const fields = getAllFieldCoveredCounts(coverageData);
  const patientSubcategories = `${
    fields.filter((field) => field.section === 'Patient' && field.percentage === 1).length
  }/${fields.filter((field) => field.section === 'Patient').length}`;
  const outcomeSubcategories = `${
    fields.filter((field) => field.section === 'Outcome' && field.percentage === 1).length
  }/${fields.filter((field) => field.section === 'Outcome').length}`;
  const diseaseSubcategories = `${
    fields.filter((field) => field.section === 'Disease' && field.percentage === 1).length
  }/${fields.filter((field) => field.section === 'Disease').length}`;
  const treatmentSubcategories = `${
    fields.filter((field) => field.section === 'Treatment' && field.percentage === 1).length
  }/${fields.filter((field) => field.section === 'Treatment').length}`;
  const assessmentSubcategories = `${
    fields.filter((field) => field.section === 'Assessment' && field.percentage === 1).length
  }/${fields.filter((field) => field.section === 'Assessment').length}`;
  const genomicsSubcategories = `${
    fields.filter((field) => field.section === 'Genomics' && field.percentage === 1).length
  }/${fields.filter((field) => field.section === 'Genomics').length}`;

  return (
    <div className={`grid grid-cols-3 gap-5 flex-auto ${className}`}>
      <SectionCard
        className="h-48 col-span-3"
        header={<p className="font-sans font-bold text-4xl">Overall mCODE Coverage</p>}
        text={<p className="text-s text-gray-400">{patient.possible} Patients</p>}
        gaugeSize="h-44 w-44"
        percentage={overall.percentage}
        color="#000000"
      />
      <SectionCard
        header={<p className="font-sans font-bold text-{32px}">Patient</p>}
        text={<p className="text-xs text-gray-400">{patientSubcategories} Subcategories</p>}
        gaugeSize="h-24 w-24"
        percentage={patient.percentage}
        color="#d24200"
      />
      <SectionCard
        header={<p className="font-sans font-bold text-{32px}">Outcome</p>}
        text={<p className="text-xs text-gray-400">{outcomeSubcategories} Subcategories</p>}
        gaugeSize="h-24 w-24"
        percentage={outcome.percentage}
        color="#8a45d9"
      />
      <SectionCard
        header={<p className="font-sans font-bold text-{32px}">Disease</p>}
        text={<p className="text-xs text-gray-400">{diseaseSubcategories} Subcategories</p>}
        gaugeSize="h-24 w-24"
        percentage={disease.percentage}
        color="#f2b84b"
      />
      <SectionCard
        header={<p className="font-sans font-bold text-{32px}">Treatment</p>}
        text={<p className="text-xs text-gray-400">{treatmentSubcategories} Subcategories</p>}
        gaugeSize="h-24 w-24"
        percentage={treatment.percentage}
        color="#04b2d9"
      />
      <SectionCard
        header={<p className="font-sans font-bold text-{32px}">Assessment</p>}
        text={<p className="text-xs text-gray-400">{assessmentSubcategories} Subcategories</p>}
        gaugeSize="h-24 w-24"
        percentage={assessment.percentage}
        color="#f2913d"
      />
      <SectionCard
        header={<p className="font-sans font-bold text-{32px}">Genomics</p>}
        text={<p className="text-xs text-gray-400">{genomicsSubcategories} Subcategories</p>}
        gaugeSize="h-24 w-24"
        percentage={genomics.percentage}
        color="#26c485"
      />
    </div>
  );
}

export default MainVisualization;
