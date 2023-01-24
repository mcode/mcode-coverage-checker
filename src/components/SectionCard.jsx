import CircleGauge from './CircleGauge';

function SectionCard({ className, header, text, gaugeSize, percentage, color }) {
  return (
    <div className={`${className} p-2 bg-white rounded-widgit shadow-widgit flex flex-nowrap justify-around`}>
      <CircleGauge className={gaugeSize} percentage={percentage} color={color} />
      <div className="grid place-items-center">
        <div className="flex flex-col items-center">
          {header}
          {text}
        </div>
      </div>
    </div>
  );
}

export default SectionCard;
