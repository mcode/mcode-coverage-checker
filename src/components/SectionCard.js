import CircleGauge from './CircleGauge';

function SectionCard({ className, buttonClassName, header, text, gaugeSize, percentage, color, onClick }) {
  return (
    <button type="button" onClick={onClick} className={buttonClassName}>
      <div className={`${className} p-2 bg-white rounded-widgit shadow-widgit flex flex-nowrap justify-around`}>
        <CircleGauge className={gaugeSize} percentage={percentage} color={color} />
        <div className="grid place-items-center">
          <div className="flex flex-col items-center">
            {header}
            {text}
          </div>
        </div>
      </div>
    </button>
  );
}

export default SectionCard;
