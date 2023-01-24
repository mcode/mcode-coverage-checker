import { getGenomicsStats } from '../lib/coverageStats/coverageStats';
import SimpleStatsViz from './SimpleStatsViz';

function DiseaseStatsViz({ coverageData }) {
  const stats = getGenomicsStats(coverageData);

  return <SimpleStatsViz title="Genomics Coverage" stats={stats} />;
}

export default DiseaseStatsViz;
