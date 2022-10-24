import { getOverallStats } from '../lib/coverageStats/coverageStats';
import CircleGauge from './CircleGauge';
import SimpleStatsViz from './SimpleStatsViz';

function OverallStatsViz({ coverageData }) {
  const stats = getOverallStats(coverageData);

  return (
    <>
      <SimpleStatsViz title="Overall Coverage" stats={stats} larger />
      <CircleGauge percentage={stats.percentage} width={200} height={200} color="#000000" />
    </>
  );
}

export default OverallStatsViz;
