import PropTypes from 'prop-types';
import { overallStats } from '../lib/statsUtils';

function OverallStatsViz({ coverageData }) {
  const stats = overallStats(coverageData);
  return (
    <>
      <h1>Overall Coverage</h1>
      <p>{stats}</p>
    </>
  );
}

OverallStatsViz.propTypes = {
  coverageData: PropTypes.shape({}),
};

OverallStatsViz.defaultProps = {
  coverageData: null,
};

export default OverallStatsViz;
