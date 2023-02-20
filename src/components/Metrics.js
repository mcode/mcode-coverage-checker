import React from 'react';
import { Icon } from '@iconify/react';

function Metrics({ percentage, fraction, color, rotation, title }) {
  return (
    <div className="w-full flex justify-center p-4">
      <div className="relative">
        <h1 className="text-slate-500 font-semibold">{title}</h1>
        <p className="text-4xl font-bold">{percentage}%</p>
        <div className="flex items-center">
          <Icon icon="fa-solid:arrow-alt-circle-up" style={{ color }} rotate={rotation} />
          <p className="text-slate-500 pl-2 font-medium">{fraction}</p>
        </div>
      </div>
    </div>
  );
}

export default Metrics;
