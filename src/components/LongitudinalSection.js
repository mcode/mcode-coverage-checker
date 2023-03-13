import React, { useState } from 'react';
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

function Longitudinal({ className, selectedSection, coverageData }) {
  const dataStatic = [
    {
      name: 'Jan',
      uv: 20,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Feb',
      uv: 26,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Mar',
      uv: 37,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Apr',
      uv: 20,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      uv: 30,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Jun',
      uv: 50,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Jul',
      uv: 55,
      pv: 4300,
      amt: 2100,
    },
  ];

  const fields = getAllFieldCoveredCounts(coverageData);
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

  const sectionPercentage = sectionPercentages[selectedSection](coverageData);
  const percentage = (sectionPercentage.percentage * 100).toFixed(2);

  const [selectedOption, setSelectedOption] = useState('Last 7 days');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={`${className} bg-white px-5 my-2 rounded-lg shadow-widgit`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="py-4 font-sans font-semibold text-xl">
          <span className={`${sectionTextColors[selectedSection]}`}>{selectedSection}</span> Longitudinal Data
        </h3>
        <div className="float-right">
          <select
            className="hidden bg-white border rounded-lg p-2 shadow-widgit"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="Last 7 days">Last 7 days</option>
            <option value="Last 30 days">Last 30 days</option>
            <option value="Last quarter">Last quarter</option>
            <option value="Last year">Last year</option>
            <option value="All time">All time</option>
          </select>
        </div>
      </div>
      {/* Body */}
      <LineChart
        className="p-2 h-72"
        data={dataStatic}
        xKey="name"
        yKey="uv"
        hexColor={sectionLineColors[selectedSection]}
      />
      <div className="flex items-center justify-center">
        {/* hiding for now */}
        <Metrics
          percentage={percentage}
          rotation="180deg"
          color="#d24200"
          fraction={sectionFractions[selectedSection]}
          title="Current"
        />
        <Metrics
          percentage={percentage}
          rotation="0deg"
          color="#26c485"
          fraction={sectionFractions[selectedSection]}
          title="Monthly Average"
        />
      </div>
    </div>
  );
}

export default Longitudinal;
