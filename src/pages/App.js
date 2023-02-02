import { useCallback, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { uploadedFiles } from '../recoil_state';
import MainVisualization from '../components/MainVisualization';
import coverageChecker from '../lib/coverageChecker/coverageChecker';
import FileSelect from '../components/FileSelect';
import Rankings from '../components/Rankings';
import SubcategoryTable from '../components/SubcategoryTable';
import { overallSectionId } from '../lib/coverageSectionIds';
import Longitudinal from '../components/LongitudinalSection';

function App() {
  const files = useRecoilValue(uploadedFiles);
  const [coverageData, setCoverageData] = useState(coverageChecker(files[0].body));
  const [selectedSection, setSelectedSection] = useState(overallSectionId);

  const changeDataSource = useCallback(
    (event) => {
      setCoverageData(coverageChecker(files.find((file) => file.id === event.target.value).body));
    },
    [files],
  );

  return (
    <div className="-mt-6">
      {/* Negative margin sized to height of fileSelect –  moves select moved up into margins, aligns titles */}
      <FileSelect files={files} onChange={changeDataSource} />
      <h1 className="font-sans font-bold text-4xl">Coverage Overview</h1>
      <p className="text-sm text-gray-600">Select a category to analyze it in finer detail</p>
      <div className="flex flex-row pb-5 gap-5 items-start">
        <MainVisualization
          coverageData={coverageData}
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
        />
        <Rankings coverageData={coverageData} />
      </div>
      <h2 className="font-sans font-semibold text-2xl">Analysis</h2>
      <p className="text-sm text-gray-600">Fine tune your analysis through your selection of subcategories</p>
      <div className="flex flex-row gap-5 items-start">
        <SubcategoryTable selectedSection={selectedSection} coverageData={coverageData} />
      </div>
      <div className="pw-2 py-10">
        <Longitudinal />
      </div>
    </div>
  );
}

export default App;
