import { getAssessmentStats } from '../lib/coverageStats/coverageStats';
import SimpleStatsViz from './SimpleStatsViz';

function AssessmentStatsViz({ coverageData }) {
  const stats = getAssessmentStats(coverageData);

  return <SimpleStatsViz title="Assessment Coverage" stats={stats} />;
}

export default AssessmentStatsViz;
