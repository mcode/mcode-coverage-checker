import { useState } from 'react';
import { getAllFieldCoveredCounts } from '../lib/coverageStats/statsUtils';
import { sectionColors } from '../lib/coverageSectionIds';
import { Sparkline, StaticData } from './Sparklines';

const MINNUMSHOWN = 5;

function Rankings({ coverageData, className }) {
  const fields = getAllFieldCoveredCounts(coverageData);
  const [sortFunction, setSortFunction] = useState('Ascending');
  const [numShown, setNumShown] = useState(MINNUMSHOWN);

  function toggleRankingsShown() {
    if (numShown === MINNUMSHOWN) {
      setNumShown(fields.length);
    } else {
      setNumShown(MINNUMSHOWN);
    }
  }

  const SORT_FUNCTIONS = {
    Ascending: (a, b) => a.percentage - b.percentage,
    Descending: (a, b) => b.percentage - a.percentage,
    Alphabetical: (a, b) => a.name.localeCompare(b.name),
    'Reverse Alphabetical': (a, b) => b.name.localeCompare(a.name),
  };

  return (
    <div className={`flex-auto ${className}`}>
      <div className="bg-white p-2 rounded-widgit">
        <div className="pb-3 flex flex-row justify-between">
          <h1 className="font-bold text-xl">Rankings</h1>
          <select
            className="mx-2 px-2 bg-white border-2 rounded-widgit shadow-widgit border-background"
            id="sortSelect"
            onChange={(e) => setSortFunction(e.target.value)}
          >
            {Object.keys(SORT_FUNCTIONS).map((sort) => (
              <option value={sort} key={sort}>
                {sort}
              </option>
            ))}
          </select>
        </div>
        <div className="h-72 overflow-y-auto">
          <table className="table-auto">
            <tbody>
              {fields
                .sort(SORT_FUNCTIONS[sortFunction])
                .slice(0, numShown)
                .map((field) => (
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
                    <td className="px-2">
                      <Sparkline data={StaticData} />
                    </td>
                    <td className="text-[15px] py-1">{`${field.covered}/${field.total}`}</td>
                  </tr>
                ))}
              <tr>
                <td colSpan="3" className="text-center py-1">
                  <button onClick={() => toggleRankingsShown()} type="button">
                    {numShown === MINNUMSHOWN ? `See All ${fields.length}` : 'Hide'}
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