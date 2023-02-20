/* eslint-disable no-param-reassign */
import { useState } from 'react';
import { Icon } from '@iconify/react';
import {
  patientSectionId,
  outcomeSectionId,
  diseaseSectionId,
  treatmentSectionId,
  assessmentSectionId,
  genomicsSectionId,
  overallSectionId,
} from '../lib/coverageSectionIds';
import { getProfileFieldsCoveredCount } from '../lib/coverageStats/statsUtils';
import ProgressBar from './ProgressBar';

const sectionTextColors = {
  [patientSectionId]: 'text-patient',
  [outcomeSectionId]: 'text-outcome',
  [diseaseSectionId]: 'text-disease',
  [treatmentSectionId]: 'text-treatment',
  [assessmentSectionId]: 'text-assessment',
  [genomicsSectionId]: 'text-genomics',
  [overallSectionId]: 'text-black',
};

const sectionBarColors = {
  [patientSectionId]: 'bg-patient',
  [outcomeSectionId]: 'bg-outcome',
  [diseaseSectionId]: 'bg-disease',
  [treatmentSectionId]: 'bg-treatment',
  [assessmentSectionId]: 'bg-assessment',
  [genomicsSectionId]: 'bg-genomics',
  [overallSectionId]: 'bg-black',
};

function SubcategoryTable({ className, selectedSection, coverageData }) {
  let profiles;
  if (selectedSection === overallSectionId) {
    profiles = [];
    coverageData.forEach((section) => {
      profiles.push(
        ...section.data.map((profile) => {
          const fields = getProfileFieldsCoveredCount(profile, selectedSection);
          return {
            name: profile.profile,
            section: section.section,
            covered: fields.map((f) => f.covered).reduce((a, b) => a + b, 0),
            total: fields.map((f) => f.total).reduce((a, b) => a + b, 0),
            fields,
          };
        }),
      );
    });
  } else {
    profiles = coverageData
      .filter((x) => x.section === selectedSection)[0]
      ?.data?.map((profile) => {
        const fields = getProfileFieldsCoveredCount(profile, selectedSection);
        return {
          name: profile.profile,
          section: selectedSection,
          covered: fields.map((f) => f.covered).reduce((a, b) => a + b, 0),
          total: fields.map((f) => f.total).reduce((a, b) => a + b, 0),
          fields,
        };
      });
  }

  const initialOpen = {};
  profiles.forEach((profile) => {
    initialOpen[profile.name] = false;
  });
  const [open, setOpen] = useState(initialOpen);

  return (
    <div className={`${className} flex flex-col bg-white my-2 rounded-widgit w-1/2 h-96`}>
      {/* Header */}
      <h3 className="p-4 font-sans font-semibold text-xl">
        <span className={`${sectionTextColors[selectedSection]}`}>{selectedSection}</span> Subcategories
      </h3>
      <div className="grow overflow-y-auto">
        {/* Table of profiles */}
        <table className="w-full table-fixed text-left">
          <thead className="bg-gray-100 text-gray-500 font-thin rounded">
            <tr>
              <th scope="col" className="px-6 font-normal py-3">
                Name
              </th>
              <th scope="col" className="font-normal py-3">
                Coverage
              </th>
              <th scope="col" className="font-normal py-3">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {profiles?.map((profile) => (
              <>
                <tr
                  onClick={() => {
                    setOpen({ ...open, [profile.name]: !open[profile.name] });
                  }}
                  className="h-10 hover:bg-gray-200 border-y-2 border-gray-200"
                  key={profile.name}
                >
                  <td>
                    <div className="flex flex-row items-center">
                      <Icon
                        icon="bi:caret-down-fill"
                        className="ml-2"
                        height="12"
                        rotate={open[profile.name] ? '0deg' : '270deg'}
                      />
                      <p className="pl-2 text-[15px] font-medium">{profile.name}</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-row flex-nowrap items-center">
                      <ProgressBar
                        percentage={(profile.covered / profile.total) * 100}
                        color={sectionBarColors[profile.section]}
                      />
                      <p className="text-[12px]">
                        {profile.covered}/{profile.total}
                      </p>
                    </div>
                  </td>
                  <td>
                    <a
                      href="https://build.fhir.org/ig/HL7/fhir-mCODE-ig/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pl-2 flex flex-row items-center"
                    >
                      <p className="text-link">link placeholder</p>
                      <Icon icon="humbleicons:external-link" color="#2f80ed" height="24" />
                    </a>
                  </td>
                </tr>
                {open[profile.name] &&
                  profile.fields.map((field) => (
                    <tr className="h-10 hover:bg-gray-200 border-y-2 border-gray-200" key={field.name}>
                      <td>
                        <p className="pl-10 text-[15px] font-medium">{field.name}</p>
                      </td>
                      <td>
                        <div className="flex flex-row flex-nowrap items-center">
                          <ProgressBar
                            percentage={(field.covered / field.total) * 100}
                            color={sectionBarColors[profile.section]}
                          />
                          <p className="text-[12px]">
                            {field.covered}/{field.total}
                          </p>
                        </div>
                      </td>
                      <td>
                        <a
                          href="https://build.fhir.org/ig/HL7/fhir-mCODE-ig/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pl-2 flex flex-row items-center"
                        >
                          <p className="text-link">link placeholder</p>
                          <Icon icon="humbleicons:external-link" color="#2f80ed" height="24" />
                        </a>
                      </td>
                    </tr>
                  ))}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SubcategoryTable;