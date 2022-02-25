import DiseaseSection from './DiseaseSection';
import PatientSection from './PatientSection';
import GenomicSection from './GenomicSection';
import OutcomeSection from './OutcomeSection';
import TreatmentSection from './TreatmentSection';
import LegendSection from './LegendSection';
import AssessmentSection from './AssessmentSection';
import ExternalProfilesSection from './ExternalProfilesSection';

function MainSvg() {
  return (
    <svg version="1.1" width="1101px" height="851px" viewBox="-0.5 -0.5 1101 851">
      <defs />
      <g>
        {/* Border around all content */}
        <rect
          x="1"
          y="1"
          width="1098"
          height="848"
          fill="none"
          stroke="rgba(0, 0, 0, 1)"
          strokeWidth="3"
          pointerEvents="all"
        />
        <DiseaseSection />
        <PatientSection />
        <GenomicSection />
        <OutcomeSection />
        <AssessmentSection />
        <LegendSection />
        <TreatmentSection />
        <ExternalProfilesSection />
      </g>
      {/* Displays if app fails to load SVG */}
      <switch>
        <g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" />
        <a
          transform="translate(0,-5)"
          href="https://www.diagrams.net/doc/faq/svg-export-text-problems"
          target="_blank"
          rel="noreferrer"
        >
          <text textAnchor="middle" fontSize="10px" x="50%" y="100%">
            Viewer does not support full SVG 1.1
          </text>
        </a>
      </switch>
    </svg>
  );
}

export default MainSvg;
