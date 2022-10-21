import { getTreatmentStats } from '../lib/coverageStats/coverageStats';
import CircleGauge from './CircleGauge';
import SimpleStatsViz from './SimpleStatsViz';

function TreatmentStatsViz({ coverageData }) {
  const stats = getTreatmentStats(coverageData);

  return (
    <>
      <SimpleStatsViz title="Treatment Coverage" stats={stats} />
      <CircleGauge percentage={stats.percentage} width={200} height={200} color="#04B2D9" />
    </>
  );
}

export default TreatmentStatsViz;
