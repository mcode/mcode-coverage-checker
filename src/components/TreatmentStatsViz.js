import { getTreatmentStats } from '../lib/coverageStats/coverageStats';
import SimpleStatsViz from './SimpleStatsViz';

function TreatmentStatsViz({ coverageData }) {
  const stats = getTreatmentStats(coverageData);

  return <SimpleStatsViz title="Treatment Coverage" stats={stats} />;
}

export default TreatmentStatsViz;
