import { getOutcomeStats } from '../lib/coverageStats/coverageStats';
import SimpleStatsViz from './SimpleStatsViz';

function OutcomeStatsViz({ coverageData }) {
  const stats = getOutcomeStats(coverageData);

  return <SimpleStatsViz title="Outcome Coverage" stats={stats} />;
}

export default OutcomeStatsViz;
