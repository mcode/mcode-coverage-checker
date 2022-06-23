import { getDiseaseStats } from '../lib/coverageStats/coverageStats';
import SimpleStatsViz from './SimpleStatsViz';

function DiseaseStatsViz({ coverageData }) {
  const stats = getDiseaseStats(coverageData);

  return <SimpleStatsViz title="Disease Coverage" stats={stats} />;
}

export default DiseaseStatsViz;
