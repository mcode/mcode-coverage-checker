// import PropTypes from 'prop-types';
import { getOverallStats, getPatientStats } from '../lib/statsUtils';
import OverallStatsViz from './OverallStatsViz';
import PatientStatsViz from './PatientStatsViz';

// eslint-disable-next-line react/prop-types
function MainVisualization({ coverageData }) {
  const overallStats = getOverallStats(coverageData);
  const patientStats = getPatientStats(coverageData);

  return (
    <>
      <OverallStatsViz stats={overallStats} />
      <PatientStatsViz stats={patientStats} />
    </>
  );
}

// MainVisualization.propTypes = {
//   coverageData: PropTypes.arrayOf(
//     PropTypes.shape({
//       section: PropTypes.string,
//       data: PropTypes.arrayOf(
//         PropTypes.shape({
//           profile: PropTypes.string,
//           coverage: PropTypes.arrayOf(
//             PropTypes.shape({
//               Name: PropTypes.shape({
//                 covered: PropTypes.bool,
//               }),
//               'Contact Info': PropTypes.shape({
//                 covered: PropTypes.bool,
//               }),
//               'Birth Date': PropTypes.shape({
//                 covered: PropTypes.bool,
//               }),
//               Gender: PropTypes.shape({
//                 covered: PropTypes.bool,
//               }),
//               'Zip Code': PropTypes.shape({
//                 covered: PropTypes.bool,
//               }),
//               'US Core Race': PropTypes.shape({
//                 covered: PropTypes.bool,
//               }),
//               'US Core Ethnicity': PropTypes.shape({
//                 covered: PropTypes.bool,
//               }),
//             }),
//           ),
//         }),
//       ),
//     }),
//   ).isRequired,
// };

export default MainVisualization;
