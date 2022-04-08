// import PropTypes from 'prop-types';
import { getOverallStats } from '../lib/coverageStats/coverageStats';
import SimpleStatsViz from './SimpleStatsViz';

// eslint-disable-next-line react/prop-types
function OverallStatsViz({ coverageData }) {
  const stats = getOverallStats(coverageData);

  return <SimpleStatsViz title="Overall Coverage" stats={stats} larger />;
}

// OverallStatsViz.propTypes = {
//   coverageData: PropTypes.shape({}).isRequired,
// };

export default OverallStatsViz;
