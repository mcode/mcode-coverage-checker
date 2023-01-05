import { log } from '../lib/logger';
import MainVisualization from '../components/MainVisualization';
import coverageChecker from '../lib/coverageChecker/coverageChecker';
import testbundle from '../data/fullBundle.json';
import MainSvg from '../components/oldSvg/MainSvg';
import Rankings from '../components/Rankings';
import styles from '../styles/App.module.css';
import LineChart from '../components/LineChart';

function App() {
  const coverageData = coverageChecker(testbundle);
  // TODO: Remove this when website is in 1.0
  log(coverageData);
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

  return (
    <>
      <header className={styles['app-header']}>
        <div className={styles['app-header-content']}>mCODE Coverage Checker</div>
      </header>
      <div className={styles.app}>
        <div className="flex flex-row gap-5 items-start">
          <MainVisualization coverageData={coverageData} className={styles.app} />
          <Rankings coverageData={coverageData} />
        </div>
        <LineChart data={dataStatic} xKey="name" yKey="uv" color="#8884d8" />
        <MainSvg />
      </div>
    </>
  );
}

export default App;
