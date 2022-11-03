import { useState } from 'react';
import { getAllFieldCoveredCounts } from '../lib/coverageStats/statsUtils';

const SectionColors = {
  Patient: 'fill-[#D24200]',
  Outcome: 'fill-[#8A45D9]',
  Disease: 'fill-[#F2B84B]',
  Treatment: 'fill-[#04B2D9]',
  Assessment: 'fill-[#F2913D]',
  Genomics: 'fill-[#26C485]',
};
const MINNUMSHOWN = 5;

function Rankings({ coverageData }) {
  const fields = getAllFieldCoveredCounts(coverageData).sort((a, b) => a.percentage - b.percentage);
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

  return (
    <div>
      <h1 className="font-bold text-xl pb-3">Rankings</h1>
      <table className="w-1/3">
        <tbody>
          {fields.slice(0, numShown).map((field) => (
            <tr key={[field.profile, field.name].join()}>
              <td>
                <svg className={`${SectionColors[field.section]}`} width="5" height="40">
                  <rect width="5" height="40" />
                </svg>
              </td>
              <td>
                <p className="text-[15px]">{field.name}</p>
                <p className="text-xs text-gray-400">{field.profile}</p>
              </td>
              <td className="text-[15px]">{`${field.covered}/${field.total}`}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="3" className="text-center">
              <button onClick={() => toggleRankingsShown()} type="button">
                {buttonText}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Rankings;
