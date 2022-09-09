import { log } from '../lib/logger';
import coverageChecker from '../lib/coverageChecker/coverageChecker';
import testbundle from '../data/fullBundle.json';
import styles from './App.module.css';

function NewApp() {
  const coverageData = coverageChecker(testbundle);
  // TODO: Remove this when website is in 1.0
  log(coverageData);
  return (
    <header className={styles['app-header']}>
      <div className="font-sans font-bold text-4xl">File Upload</div>
    </header>
  );
}

export default NewApp;
