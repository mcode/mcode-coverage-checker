import React from 'react';
import { useRecoilValue } from 'recoil';
import LineChart from './LineChart';
import Metrics from './Metrics';
import { getAllFieldCoveredCounts } from '../lib/coverageStats/statsUtils';
import {
  patientSectionId,
  outcomeSectionId,
  diseaseSectionId,
  treatmentSectionId,
  assessmentSectionId,
  genomicsSectionId,
  overallSectionId,
} from '../lib/coverageSectionIds';
import {
  getAssessmentStats,
  getDiseaseStats,
  getGenomicsStats,
  getOutcomeStats,
  getPatientStats,
  getTreatmentStats,
  getOverallStats,
} from '../lib/coverageStats/coverageStats';
import { filterState, selectedFileState, selectedSectionState } from '../recoil_state';

const sectionTextColors = {
  [patientSectionId]: 'text-patient',
  [outcomeSectionId]: 'text-outcome',
  [diseaseSectionId]: 'text-disease',
  [treatmentSectionId]: 'text-treatment',
  [assessmentSectionId]: 'text-assessment',
  [genomicsSectionId]: 'text-genomics',
  [overallSectionId]: 'text-black',
};

const sectionLineColors = {
  [patientSectionId]: '#d24200',
  [outcomeSectionId]: '#8a45d9',
  [diseaseSectionId]: '#f2b84b',
  [treatmentSectionId]: '#04b2d9',
  [assessmentSectionId]: '#f2913d',
  [genomicsSectionId]: '#26c485',
  [overallSectionId]: '#000000',
};

const sectionPercentages = {
  [patientSectionId]: getPatientStats,
  [outcomeSectionId]: getOutcomeStats,
  [diseaseSectionId]: getDiseaseStats,
  [treatmentSectionId]: getTreatmentStats,
  [assessmentSectionId]: getAssessmentStats,
  [genomicsSectionId]: getGenomicsStats,
  [overallSectionId]: getOverallStats,
};

function Longitudinal({ className, coverageData, data }) {
  const fieldFilter = useRecoilValue(filterState);
  const selectedSection = useRecoilValue(selectedSectionState);
  const selectedFile = useRecoilValue(selectedFileState);
  const lineChartData = data
    .map((file) => ({
      name: file.name,
      date: Date.parse(file.dateAdded),
      coverage: file.stats[selectedSection],
    }))
    .sort((a, b) => a.date - b.date);

  const index = lineChartData.findIndex((item) => item.name === selectedFile);
  const isGreater = index === 0 ? true : lineChartData[index].coverage - lineChartData[index - 1].coverage > 0;

  const percentIncrease =
    index === 0
      ? 0
      : (
          ((lineChartData[index].coverage - lineChartData[index - 1].coverage) / lineChartData[index - 1].coverage) *
          100
        ).toFixed(2); // (lineChartData.reduce((accum, item) => accum + item.coverage, 0) / lineChartData.length).toFixed(2);

  const fields = getAllFieldCoveredCounts(coverageData, fieldFilter);
  const sectionFractions = {
    [patientSectionId]: `${
      fields.filter((field) => field.section === patientSectionId && field.percentage === 1).length
    }/${fields.filter((field) => field.section === patientSectionId).length}`,
    [outcomeSectionId]: `${
      fields.filter((field) => field.section === outcomeSectionId && field.percentage === 1).length
    }/${fields.filter((field) => field.section === outcomeSectionId).length}`,
    [diseaseSectionId]: `${
      fields.filter((field) => field.section === diseaseSectionId && field.percentage === 1).length
    }/${fields.filter((field) => field.section === diseaseSectionId).length}`,
    [treatmentSectionId]: `${
      fields.filter((field) => field.section === treatmentSectionId && field.percentage === 1).length
    }/${fields.filter((field) => field.section === treatmentSectionId).length}`,
    [assessmentSectionId]: `${
      fields.filter((field) => field.section === assessmentSectionId && field.percentage === 1).length
    }/${fields.filter((field) => field.section === assessmentSectionId).length}`,
    [genomicsSectionId]: `${
      fields.filter((field) => field.section === genomicsSectionId && field.percentage === 1).length
    }/${fields.filter((field) => field.section === genomicsSectionId).length}`,
    [overallSectionId]: `${fields.filter((field) => field.percentage === 1).length}/${fields.length}`,
  };

  const sectionPercentage = sectionPercentages[selectedSection](coverageData, fieldFilter);
  const percentage = (sectionPercentage.percentage * 100).toFixed(2);

  return (
    <div className={`${className} bg-white px-5 my-2 rounded-lg shadow-widgit`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="py-4 font-sans font-semibold text-xl">
          <span className={`${sectionTextColors[selectedSection]}`}>{selectedSection}</span> Longitudinal Data
        </h3>
      </div>
      {/* Body */}
      <LineChart
        className="p-2 h-72"
        data={lineChartData}
        xKey="date"
        yKey="coverage"
        hexColor={sectionLineColors[selectedSection]}
        selectedFile={selectedFile}
      />
      <div className="flex items-start justify-center">
        <Metrics
          percentage={percentage}
          trendUp={isGreater}
          fraction={sectionFractions[selectedSection]}
          title="Current"
        />
        <Metrics percentage={percentIncrease} title="Percent Change" trendUp={percentIncrease > 0} />
      </div>
    </div>
  );
}

export default Longitudinal;
