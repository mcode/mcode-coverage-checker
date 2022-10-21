import { getGenomicsStats } from '../lib/coverageStats/coverageStats';
import CircleGauge from './CircleGauge';
import SimpleStatsViz from './SimpleStatsViz';

function DiseaseStatsViz({ coverageData }) {
  const stats = getGenomicsStats(coverageData);

  return (
    <>
      <SimpleStatsViz title="Genomics Coverage" stats={stats} />
      <CircleGauge percentage={stats.percentage} width={200} height={200} color="#26C485" />
    </>
  );
}

export default DiseaseStatsViz;
