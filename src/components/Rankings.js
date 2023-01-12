import { useState } from 'react';
import { getAllFieldCoveredCounts } from '../lib/coverageStats/statsUtils';
import { sectionColors } from '../lib/coverageSectionIds';
import Sparkline from './Sparklines';

const MINNUMSHOWN = 5;

<<<<<<< HEAD
function Rankings({ coverageData, className }) {
  const fields = getAllFieldCoveredCounts(coverageData);
  const [sortFunction, setSortFunction] = useState('Ascending');
=======
const dataStatic = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function Rankings({ coverageData }) {
  const [fields, setFields] = useState(
    getAllFieldCoveredCounts(coverageData).sort((a, b) => a.percentage - b.percentage),
  );
>>>>>>> Added sparklines to the rankings section
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
<<<<<<< HEAD
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
                    <td className="text-[15px] py-1">{`${field.covered}/${field.total}`}</td>
                  </tr>
                ))}
=======
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
                  <td className="px-2">
                    <Sparkline data={dataStatic} />
                  </td>
                  <td className="text-[15px] py-1">{`${field.covered}/${field.total}`}</td>
                </tr>
              ))}
>>>>>>> Added sparklines to the rankings section
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
