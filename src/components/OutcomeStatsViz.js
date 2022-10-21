import { getOutcomeStats } from '../lib/coverageStats/coverageStats';
import CircleGauge from './CircleGauge';
import SimpleStatsViz from './SimpleStatsViz';

function OutcomeStatsViz({ coverageData }) {
  const stats = getOutcomeStats(coverageData);

  return (
    <>
      <SimpleStatsViz title="Outcome Coverage" stats={stats} />
      <CircleGauge percentage={stats.percentage} width={200} height={200} color="#8A45D9" />
    </>
  );
}

export default OutcomeStatsViz;
