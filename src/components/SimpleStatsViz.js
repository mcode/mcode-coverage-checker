import styles from './SimpleStatsViz.module.css';

function coverageDisplayText(stats) {
  return `${(stats.percentage * 100).toFixed(2).toString()}% Covered`;
}

function isCoverageComplete(stats) {
  return stats.percentage === 1;
}

function isCoverageZero(stats) {
  return stats.percentage === 0;
}

function SimpleStatsViz({ title, stats, larger = false }) {
  return (
    <div className={styles['stats-container']}>
      <h1 className={`${styles.title} ${larger && styles.larger}`}>{title}</h1>
      <p
        className={`${styles.stat} ${(isCoverageComplete(stats) && styles.complete) || ''} ${
          (isCoverageZero(stats) && styles.zero) || ''
        }`}
      >
        {coverageDisplayText(stats)}
      </p>
    </div>
  );
}

export default SimpleStatsViz;
