import OverallStatsViz from './OverallStatsViz';
import PatientStatsViz from './PatientStatsViz';
import OutcomeStatsViz from './OutcomeStatsViz';
import DiseaseStatsViz from './DiseaseStatsViz';
import TreatmentStatsViz from './TreatmentStatsViz';

function MainVisualization({ coverageData }) {
  return (
    <>
      <OverallStatsViz coverageData={coverageData} />
      <PatientStatsViz coverageData={coverageData} />
      <OutcomeStatsViz coverageData={coverageData} />
      <DiseaseStatsViz coverageData={coverageData} />
      <TreatmentStatsViz coverageData={coverageData} />
    </>
  );
}

export default MainVisualization;
