import { getAssessmentStats } from '../lib/coverageStats/coverageStats';
import CircleGauge from './CircleGauge';
import SimpleStatsViz from './SimpleStatsViz';

function AssessmentStatsViz({ coverageData }) {
  const stats = getAssessmentStats(coverageData);

  return (
    <>
      <SimpleStatsViz title="Assessment Coverage" stats={stats} />
      <CircleGauge percentage={stats.percentage} width={200} height={200} color="#F2913D" />
    </>
  );
}

export default AssessmentStatsViz;
