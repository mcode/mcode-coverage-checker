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
  let sectionData;
  if (selectedSection === overallSectionId) {
    sectionData = [];
    coverageData.forEach((section) => {
      sectionData.push(...section.data);
    });
  } else {
    sectionData = coverageData.filter((x) => x.section === selectedSection)[0]?.data;
  }
  const profiles = sectionData?.map((profile) => {
    const fields = getProfileFieldsCoveredCount(profile, selectedSection);
    return {
      name: profile.profile,
      covered: fields.map((f) => f.covered).reduce((a, b) => a + b, 0),
      total: fields.map((f) => f.total).reduce((a, b) => a + b, 0),
      fields,
    };
  });

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
              <tr className="h-10 border-y-2 border-gray-200" key={profile.name}>
                <td className="h-10 hover:bg-gray-200" colSpan={3}>
                  <details>
                    <summary className="cursor-pointer">
                      <div className="grid grid-cols-3 items-center">
                        <p className="pl-2 text-[15px] font-medium">{profile.name}</p>
                        <div className="flex flex-row flex-nowrap items-center">
                          <ProgressBar
                            percentage={(profile.covered / profile.total) * 100}
                            color={sectionBarColors[selectedSection]}
                          />
                          <p className="text-[12px]">
                            {profile.covered}/{profile.total}
                          </p>
                        </div>
                        <a
                          href="https://build.fhir.org/ig/HL7/fhir-mCODE-ig/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pl-2 flex flex-row items-center"
                        >
                          <p className="text-link">link placeholder</p>
                          <Icon icon="humbleicons:external-link" color="#2f80ed" height="24" />
                        </a>
                      </div>
                    </summary>
                    {/* Table of fields in a profile */}
                    <table className="w-full table-fixed text-left">
                      {profile.fields.map((field) => (
                        <tr className="h-10 border-y-2 border-gray-200 bg-white" key={field.name}>
                          <td className="pl-5 text-[15px] font-medium">{field.name}</td>
                          <td>
                            <div className="flex flex-row flex-nowrap items-center">
                              <ProgressBar
                                percentage={(field.covered / field.total) * 100}
                                color={sectionBarColors[selectedSection]}
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
                    </table>
                  </details>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SubcategoryTable;
