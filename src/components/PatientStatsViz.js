import PropTypes from 'prop-types';
import { patientStats } from '../lib/statsUtils';

function PatientStatsViz({ coverageData }) {
  const stats = patientStats(coverageData);
  return (
    <>
      <h1>Patient Coverage</h1>
      <p>{stats}</p>
    </>
  );
}

PatientStatsViz.propTypes = {
  coverageData: PropTypes.shape({}),
};

PatientStatsViz.defaultProps = {
  coverageData: null,
};

export default PatientStatsViz;
