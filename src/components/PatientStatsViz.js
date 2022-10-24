import { getPatientStats } from '../lib/coverageStats/coverageStats';
import CircleGauge from './CircleGauge';
import SimpleStatsViz from './SimpleStatsViz';

function PatientStatsViz({ coverageData }) {
  const stats = getPatientStats(coverageData);

  return (
    <>
      <SimpleStatsViz title="Patient Coverage" stats={stats} />
      <CircleGauge percentage={stats.percentage} width={200} height={200} color="#D24200" />
    </>
  );
}

export default PatientStatsViz;
