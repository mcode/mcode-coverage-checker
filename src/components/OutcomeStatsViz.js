// import PropTypes from 'prop-types';
import { getOutcomeStats } from '../lib/coverageStats/coverageStats';
import SimpleStatsViz from './SimpleStatsViz';

// eslint-disable-next-line react/prop-types
function OutcomeStatsViz({ coverageData }) {
  const stats = getOutcomeStats(coverageData);

  return <SimpleStatsViz title="Outcome Coverage" stats={stats} />;
}

// OutcomeStatsViz.propTypes = {
//   coverageData: PropTypes.shape({}).isRequired,
// };

export default OutcomeStatsViz;
