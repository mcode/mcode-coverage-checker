// import PropTypes from 'prop-types';
import { getPatientStats } from '../lib/coverageStats/coverageStats';
import SimpleStatsViz from './SimpleStatsViz';

// eslint-disable-next-line react/prop-types
function PatientStatsViz({ coverageData }) {
  const stats = getPatientStats(coverageData);

  return <SimpleStatsViz title="Patient Coverage" stats={stats} />;
}

// PatientStatsViz.propTypes = {
//   coverageData: PropTypes.shape({}).isRequired,
// };

export default PatientStatsViz;
