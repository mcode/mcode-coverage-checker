import { log } from '../lib/logger';
import MainVisualization from '../components/MainVisualization';
import coverageChecker from '../lib/coverageChecker/coverageChecker';
import testbundle from '../data/fullBundle.json';
import styles from './App.module.css';
import MainSvg from '../components/oldSvg/MainSvg';

function App() {
  const coverageData = coverageChecker(testbundle);
  log(coverageData);
  return (
    <>
      <header className={styles['app-header']}>
        <div className={styles['app-header-content']}>mCODE Coverage Checker</div>
      </header>
      <div className={styles.app}>
        <MainVisualization coverageData={coverageData} className={styles.app} />
        <MainSvg />
      </div>
    </>
  );
}

export default App;
