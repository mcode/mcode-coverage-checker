/* eslint-disable no-param-reassign */
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useRecoilValue } from 'recoil';
import {
  patientSectionId,
  outcomeSectionId,
  diseaseSectionId,
  treatmentSectionId,
  assessmentSectionId,
  genomicsSectionId,
  overallSectionId,
} from '../lib/coverageSectionIds';
import { getProfileFieldsCoveredSum, getProfileFieldsCoveredCount } from '../lib/coverageStats/statsUtils';
import ProgressBar from './ProgressBar';
import FieldCountPopup from './FieldCountPopup';
import { filterState, selectedSectionState } from '../recoil_state';

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

const sectionIconColors = {
  [patientSectionId]: '#d24200',
  [outcomeSectionId]: '#8a45d9',
  [diseaseSectionId]: '#f2b84b',
  [treatmentSectionId]: '#04b2d9',
  [assessmentSectionId]: '#f2913d',
  [genomicsSectionId]: '#26c485',
  [overallSectionId]: '#000000',
};

function SubcategoryTable({ className, coverageData }) {
  const fieldFilter = useRecoilValue(filterState);
  const selectedSection = useRecoilValue(selectedSectionState);
  let profiles;
  if (selectedSection === overallSectionId) {
    profiles = [];
    coverageData.forEach((section) => {
      profiles.push(
        ...section.data.map((profile) => {
          const fields = getProfileFieldsCoveredCount(profile, selectedSection, fieldFilter);
          return {
            name: profile.profile,
            section: section.section,
            count: profile.coverage.length,
            covered: fields.map((f) => f.covered).reduce((a, b) => a + b, 0),
            total: fields.map((f) => f.total).reduce((a, b) => a + b, 0),
            fields,
            fieldSums: getProfileFieldsCoveredSum(profile, selectedSection, fieldFilter),
          };
        }),
      );
    });
  } else {
    profiles = coverageData
      .filter((x) => x.section === selectedSection)[0]
      ?.data?.map((profile) => {
        const fields = getProfileFieldsCoveredCount(profile, selectedSection, fieldFilter);
        return {
          name: profile.profile,
          section: selectedSection,
          count: profile.coverage.length,
          covered: fields.map((f) => f.covered).reduce((a, b) => a + b, 0),
          total: fields.map((f) => f.total).reduce((a, b) => a + b, 0),
          fields,
          fieldSums: getProfileFieldsCoveredSum(profile, selectedSection, fieldFilter),
        };
      });
  }

  const initialOpen = {};
  profiles.forEach((profile) => {
    initialOpen[profile.name] = false;
  });
  const [open, setOpen] = useState(initialOpen);

  return (
    <div className={`${className} flex flex-col bg-white my-2 rounded-widgit`}>
      {/* Header */}
      <h3 className="p-4 font-sans font-semibold text-xl">
        <span className={`${sectionTextColors[selectedSection]}`}>{selectedSection}</span> Subcategories
      </h3>
      <div className="grow overflow-y-auto">
        {/* Table of profiles */}
        <table className="w-full table-fixed text-left">
          <thead className="bg-gray-100 text-gray-500 font-thin rounded">
            <tr>
              <th scope="col" className="px-6 font-normal py-2">
                Name
              </th>
              <th scope="col" className="font-normal py-2">
                Coverage
              </th>
              <th scope="col" className="font-normal py-2">
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
                      <div className="group relative">
                        <p className="pl-2">
                          <span className="text-[15px] font-medium">{profile.name}</span>{' '}
                          <span className="text-[10px] italic text-gray-400">{profile.count} instances</span>
                        </p>
                        <FieldCountPopup fieldCounts={profile.fieldSums} />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-row flex-nowrap items-center">
                      <ProgressBar
                        className="mr-1"
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
                          <Icon
                            icon={field.covered ? 'ph:check-circle-fill' : 'ph:x-circle-fill'}
                            color={field.covered ? sectionIconColors[profile.section] : '#808080'}
                            height="24"
                          />
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
