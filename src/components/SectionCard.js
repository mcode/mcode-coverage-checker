import CircleGauge from './CircleGauge';

function SectionCard({ section, percentage, subcategories, color }) {
  return (
    <div className="bg-white shadow-widgit flex flex-nowrap justify-around">
      <CircleGauge className="h-24 w-24" percentage={percentage} color={color} />
      <div className="grid place-items-center">
        <div className="flex flex-col items-center">
          <p className="font-sans font-bold text-{32px}">{section}</p>
          <p className="text-xs text-gray-400">{subcategories} Subcategories</p>
        </div>
      </div>
    </div>
  );
}

export default SectionCard;
