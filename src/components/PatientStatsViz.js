// import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function PatientStatsViz({ stats }) {
  return (
    <>
      <h1>Patient Coverage</h1>
      <p>{JSON.stringify(stats)}</p>
    </>
  );
}

// PatientStatsViz.propTypes = {
//   coverageData: PropTypes.shape({}).isRequired,
// };

export default PatientStatsViz;
