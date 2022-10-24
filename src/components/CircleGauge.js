import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function gaugeDisplayText(percentage) {
  return `${(percentage * 100).toFixed(2).toString()}%`;
}

function CircleGauge({ percentage, width, height, color }) {
  return (
    <div style={{ width, height }}>
      <CircularProgressbar
        value={percentage * 100}
        text={gaugeDisplayText(percentage)}
        styles={buildStyles({
          pathColor: color,
          textColor: color,
          textSize: '90%',
        })}
      />
    </div>
  );
}

export default CircleGauge;
