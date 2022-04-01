// import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function OverallStatsViz({ stats }) {
  return (
    <>
      <h1>Overall Coverage</h1>
      <p>{JSON.stringify(stats)}</p>
    </>
  );
}

// OverallStatsViz.propTypes = {
//   coverageData: PropTypes.shape({}).isRequired,
// };

export default OverallStatsViz;
