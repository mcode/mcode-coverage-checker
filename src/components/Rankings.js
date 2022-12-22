import { useState } from 'react';
import { getAllFieldCoveredCounts } from '../lib/coverageStats/statsUtils';
import { sectionColors } from '../lib/coverageSectionIds';

const MINNUMSHOWN = 5;

function Rankings({ coverageData }) {
  const [fields, setFields] = useState(
    getAllFieldCoveredCounts(coverageData).sort((a, b) => a.percentage - b.percentage),
  );
  const [numShown, setNumShown] = useState(MINNUMSHOWN);
  const [buttonText, setButtonText] = useState(`See All ${fields.length}`);

  function toggleRankingsShown() {
    if (numShown === MINNUMSHOWN) {
      setNumShown(fields.length);
      setButtonText('Hide');
    } else {
      setNumShown(MINNUMSHOWN);
      setButtonText(`See All ${fields.length}`);
    }
  }

  const SORT_FUNCTIONS = {
    Ascending: (a, b) => a.percentage - b.percentage,
    Descending: (a, b) => b.percentage - a.percentage,
    Alphabetical: (a, b) => a.name.localeCompare(b.name),
    ReverseAlphabetical: (a, b) => b.name.localeCompare(a.name),
  };

  function changeSort(event) {
    setFields([...fields].sort(SORT_FUNCTIONS[event.target.value]));
  }

  return (
    <div className="flex-auto">
      <div className="bg-white p-2 rounded-widgit">
        <div className="flex flex-row justify-between">
          <h1 className="font-bold text-xl pb-3">Rankings</h1>
          <select id="sortSelect" onChange={changeSort}>
            <option value="Ascending" key="Ascending">
              Ascending
            </option>
            <option value="Descending" key="Descending">
              Descending
            </option>
            <option value="Alphabetical" key="Alphabetical">
              Alphabetical
            </option>
            <option value="ReverseAlphabetical" key="ReverseAphabetical">
              Reverse Alphabetical
            </option>
          </select>
        </div>
        <div className="h-72 overflow-y-auto">
          <table className="table-auto">
            <tbody>
              {fields.slice(0, numShown).map((field) => (
                <tr key={[field.profile, field.name].join()}>
                  <td className="w-5 py-1">
                    <svg className={`${sectionColors[field.section]}`} width="5" height="40">
                      <rect width="5" height="40" rx="1" />
                    </svg>
                  </td>
                  <td className="w-full py-1">
                    <p className="text-[15px]">{field.name}</p>
                    <p className="text-xs text-gray-400">{field.profile}</p>
                  </td>
                  <td className="text-[15px] py-1">{`${field.covered}/${field.total}`}</td>
                </tr>
              ))}
              <tr>
                <td colSpan="3" className="text-center py-1">
                  <button onClick={() => toggleRankingsShown()} type="button">
                    {buttonText}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Rankings;
