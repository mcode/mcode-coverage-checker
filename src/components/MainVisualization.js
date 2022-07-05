import OverallStatsViz from './OverallStatsViz';
import PatientStatsViz from './PatientStatsViz';
import OutcomeStatsViz from './OutcomeStatsViz';
import DiseaseStatsViz from './DiseaseStatsViz';
import TreatmentStatsViz from './TreatmentStatsViz';
import AssessmentStatsViz from './AssessmentStatsViz';

function MainVisualization({ coverageData }) {
  return (
    <>
      <OverallStatsViz coverageData={coverageData} />
      <PatientStatsViz coverageData={coverageData} />
      <OutcomeStatsViz coverageData={coverageData} />
      <DiseaseStatsViz coverageData={coverageData} />
      <TreatmentStatsViz coverageData={coverageData} />
      <AssessmentStatsViz coverageData={coverageData} />
    </>
  );
}

export default MainVisualization;
