import { getDiseaseStats } from '../lib/coverageStats/coverageStats';
import CircleGauge from './CircleGauge';
import SimpleStatsViz from './SimpleStatsViz';

function DiseaseStatsViz({ coverageData }) {
  const stats = getDiseaseStats(coverageData);

  return (
    <>
      <SimpleStatsViz title="Disease Coverage" stats={stats} />
      <CircleGauge percentage={stats.percentage} width={200} height={200} color="#F2B84B" />
    </>
  );
}

export default DiseaseStatsViz;
