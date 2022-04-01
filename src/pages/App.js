import { log } from '../lib/logger';
import MainVisualization from '../components/MainVisualization';
import coverageChecker from '../lib/coverageChecker';
import testbundle from '../data/fullBundle.json';

import './App.css';

function App() {
  const coverageData = coverageChecker(testbundle);
  log(coverageData);
  return (
    <div className="App">
      <header className="App-header">
        <MainVisualization coverageData={coverageData} />
      </header>
    </div>
  );
}

export default App;
