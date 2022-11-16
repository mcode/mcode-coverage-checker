import CircleGauge from './CircleGauge';

function OverallCard({ percentage, numPatients }) {
  return (
    <div className="h-48 col-span-3 bg-white shadow-widgit flex flex-nowrap justify-around">
      <CircleGauge className="h-48 w-48" percentage={percentage} color="#000000" />
      <div className="grid place-items-center">
        <div className="flex flex-col items-center">
          <p className="font-sans font-bold text-4xl">Overall mCODE Coverage</p>
          <p className="text-s text-gray-400">{`${numPatients} Patients`}</p>
        </div>
      </div>
    </div>
  );
}

export default OverallCard;
