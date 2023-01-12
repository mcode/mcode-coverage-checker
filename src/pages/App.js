import { useCallback, useState } from 'react';
import { useRecoilValue } from 'recoil';
import MainVisualization from '../components/MainVisualization';
import coverageChecker from '../lib/coverageChecker/coverageChecker';
import FileSelect from '../components/FileSelect';
import Rankings from '../components/Rankings';
import LineChart from '../components/LineChart';
import { uploadedFiles } from '../recoil_state';
import PageWrapper from '../components/PageWrapper';

function App() {
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
  const files = useRecoilValue(uploadedFiles);
  const [coverageData, setCoverageData] = useState(coverageChecker(files[0].body));

  const changeDataSource = useCallback(
    (event) => {
      setCoverageData(coverageChecker(files.find((file) => file.id === event.target.value).body));
    },
    [files],
  );

  return (
    <PageWrapper>
      {/* Negative margin sized to height of fileSelect –  moves select moved up into margins, aligns titles */}
      <div className="-mt-6">
        <FileSelect files={files} onChange={changeDataSource} />
        <h1 className="font-sans font-bold text-4xl">Coverage Overview</h1>
        <p className="text-sm text-gray-600">Select a category to analyze it in finer detail</p>
        <div className="flex flex-row gap-5 items-start">
          <MainVisualization coverageData={coverageData} />
          <Rankings coverageData={coverageData} />
        </div>
        <LineChart data={dataStatic} xKey="name" yKey="uv" hexColor="#8884d8" />
      </div>
    </PageWrapper>
  );
}

export default App;
