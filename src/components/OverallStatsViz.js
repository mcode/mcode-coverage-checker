import { getOverallStats } from '../lib/coverageStats/coverageStats';
import SimpleStatsViz from './SimpleStatsViz';

function OverallStatsViz({ coverageData }) {
  const stats = getOverallStats(coverageData);

  return <SimpleStatsViz title="Overall Coverage" stats={stats} larger />;
}

export default OverallStatsViz;
