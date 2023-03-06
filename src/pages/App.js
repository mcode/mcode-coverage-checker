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
    <div className="-mt-6 max-w-6xl w-full">
      {/* Negative margin sized to height of fileSelect –  moves select moved up into margins, aligns titles */}
      <FileSelect files={files} onChange={changeDataSource} />
      <h1 className="font-sans font-bold text-4xl">Coverage Overview</h1>
      <p className="text-sm text-gray-600 pb-2">Select a category to analyze it in finer detail</p>
      <div className="flex flex-row max-lg:flex-wrap pb-5 gap-5 items-stretch">
        <MainVisualization
          className="max-lg:w-full lg:w-3/5"
          coverageData={coverageData}
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
        />
        <Rankings className="max-lg:w-full lg:w-2/5" coverageData={coverageData} />
      </div>
      <h2 className="font-sans font-semibold text-2xl">Analysis</h2>
      <p className="text-sm text-gray-600">Fine tune your analysis through your selection of subcategories</p>
      <div className="flex flex-row max-lg:flex-wrap gap-5 items-start">
        <SubcategoryTable
          className="h-[500px] lg:w-1/2 max-lg:w-full"
          selectedSection={selectedSection}
          coverageData={coverageData}
        />
        <Longitudinal
          className="h-[500px] lg:w-1/2 max-lg:w-full"
          selectedSection={selectedSection}
          coverageData={coverageData}
        />
      </div>
    </div>
  );
}

export default App;
