import { getPatientStats } from '../lib/coverageStats/coverageStats';
import SimpleStatsViz from './SimpleStatsViz';

function PatientStatsViz({ coverageData }) {
  const stats = getPatientStats(coverageData);

  return <SimpleStatsViz title="Patient Coverage" stats={stats} />;
}

export default PatientStatsViz;
