function ProgressBar({ className, color, percentage }) {
  return (
    <div className={`${className} grow rounded-full bg-gray-300`}>
      <div style={{ width: `${percentage}%` }} className={`h-2.5 rounded-full ${color}`} />
    </div>
  );
}

export default ProgressBar;
