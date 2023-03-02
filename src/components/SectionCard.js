import CircleGauge from './CircleGauge';

function SectionCard({ className, buttonClassName, header, text, gaugeSize, percentage, color, onClick }) {
  return (
    <button type="button" onClick={onClick} className={buttonClassName}>
      <div
        className={`${className} p-2 bg-white rounded-widgit shadow-widgit grid grid-cols-2 gap-2 place-items-center`}
      >
        <CircleGauge className={gaugeSize} percentage={percentage} color={color} />
        <div className="flex flex-col items-center">
          {header}
          {text}
        </div>
      </div>
    </button>
  );
}

export default SectionCard;
