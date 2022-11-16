import OverallStatsViz from './OverallStatsViz';
import PatientStatsViz from './PatientStatsViz';
import OutcomeStatsViz from './OutcomeStatsViz';
import DiseaseStatsViz from './DiseaseStatsViz';
import TreatmentStatsViz from './TreatmentStatsViz';
import AssessmentStatsViz from './AssessmentStatsViz';
import GenomicsStatsViz from './GenomicsStatsViz';
import SectionCard from './SectionCard';
import OverallCard from './OverallCard';
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

function MainVisualization({ coverageData }) {
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
    <>
      <div className="grid grid-cols-3 gap-5">
        <OverallCard percentage={overall.percentage} numPatients={patient.possible} />
        <SectionCard
          section="Patient"
          percentage={patient.percentage}
          subcategories={patientSubcategories}
          color="#d24200"
        />
        <SectionCard
          section="Outcome"
          percentage={outcome.percentage}
          subcategories={outcomeSubcategories}
          color="#8a45d9"
        />
        <SectionCard
          section="Disease"
          percentage={disease.percentage}
          subcategories={diseaseSubcategories}
          color="#f2b84b"
        />
        <SectionCard
          section="Treatment"
          percentage={treatment.percentage}
          subcategories={treatmentSubcategories}
          color="#04b2d9"
        />
        <SectionCard
          section="Assessment"
          percentage={assessment.percentage}
          subcategories={assessmentSubcategories}
          color="#f2913d"
        />
        <SectionCard
          section="Genomics"
          percentage={genomics.percentage}
          subcategories={genomicsSubcategories}
          color="#26c485"
        />
      </div>
      <OverallStatsViz coverageData={coverageData} />
      <PatientStatsViz coverageData={coverageData} />
      <OutcomeStatsViz coverageData={coverageData} />
      <DiseaseStatsViz coverageData={coverageData} />
      <TreatmentStatsViz coverageData={coverageData} />
      <AssessmentStatsViz coverageData={coverageData} />
      <GenomicsStatsViz coverageData={coverageData} />
    </>
  );
}

export default MainVisualization;
