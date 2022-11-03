import { log } from '../lib/logger';
import MainVisualization from '../components/MainVisualization';
import coverageChecker from '../lib/coverageChecker/coverageChecker';
import testbundle from '../data/fullBundle.json';
import styles from './App.module.css';
import MainSvg from '../components/oldSvg/MainSvg';
import Rankings from '../components/Rankings';

function App() {
  const coverageData = coverageChecker(testbundle);
  // TODO: Remove this when website is in 1.0
  log(coverageData);
  return (
    <>
      <header className={styles['app-header']}>
        <div className={styles['app-header-content']}>mCODE Coverage Checker</div>
      </header>
      <div className={styles.app}>
        <MainVisualization coverageData={coverageData} className={styles.app} />
        <Rankings coverageData={coverageData} />
        <MainSvg />
      </div>
    </>
  );
}

export default App;
