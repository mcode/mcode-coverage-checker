// import PropTypes from 'prop-types';
import OverallStatsViz from './OverallStatsViz';
import PatientStatsViz from './PatientStatsViz';
import OutcomeStatsViz from './OutcomeStatsViz';

// eslint-disable-next-line react/prop-types
function MainVisualization({ coverageData }) {
  return (
    <>
      <OverallStatsViz coverageData={coverageData} />
      <PatientStatsViz coverageData={coverageData} />
      <OutcomeStatsViz coverageData={coverageData} />
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
