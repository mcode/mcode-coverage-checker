import { useCallback, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { uploadedFiles, selectedFileState } from '../recoil_state';
import MainVisualization from '../components/MainVisualization';
import coverageChecker from '../lib/coverageChecker/coverageChecker';
import FileSelect from '../components/FileSelect';
import SubcategoryTable from '../components/SubcategoryTable';
import Longitudinal from '../components/LongitudinalSection';

function App() {
  const files = useRecoilValue(uploadedFiles);
  const [selectedFile, setSelectedFile] = useRecoilState(selectedFileState);
  const [coverageData, setCoverageData] = useState(
    coverageChecker(files.find((file) => file.name === selectedFile).body),
  );

  const changeDataSource = useCallback(
    (event) => {
      const newFile = files.find((file) => file.id === event.target.value);
      setCoverageData(coverageChecker(newFile.body));
      setSelectedFile(newFile.name);
    },
    [files],
  );

  return (
    <div className="-mt-6 max-w-7xl w-full">
      {/* Negative margin sized to height of fileSelect –  moves select moved up into margins, aligns titles */}
      <FileSelect files={files} onChange={changeDataSource} />
      <h1 className="font-sans font-bold text-4xl">Coverage Overview</h1>
      <p className="text-sm text-gray-600 pb-2">Select a category to analyze it in finer detail</p>
      <div className="flex flex-row max-lg:flex-wrap pb-5 gap-5 items-stretch">
        <MainVisualization className="max-lg:w-full lg:w-3/5" coverageData={coverageData} />
        <Longitudinal className="h-[500px] lg:w-2/5 max-lg:w-full" coverageData={coverageData} data={files} />
      </div>
      <h2 className="font-sans font-semibold text-2xl">Analysis</h2>
      <p className="text-sm text-gray-600">Fine tune your analysis through your selection of subcategories</p>
      <div className="flex flex-row max-lg:flex-wrap gap-5 items-start">
        <SubcategoryTable className="max-h-[500px] min-h-[300px] max-lg:w-full" coverageData={coverageData} />
      </div>
    </div>
  );
}

export default App;
