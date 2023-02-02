import React, { useState } from 'react';
import LineChart from './LineChart';
import Metrics from './Metrics';

function Logitudinal() {
  const dataStatic = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const [selectedOption, setSelectedOption] = useState('Last 7 days');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="bg-white p-5 w-1/2 float-right rounded-lg shadow-widgit">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">
          <span style={{ color: '#8a45d9' }}>Outcome</span> Longitudinal Data
        </h2>
        <div className="float-right">
          <select
            className="bg-white border rounded-lg p-2 shadow-widgit"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="Last 7 days">Last 7 days</option>
            <option value="Last 30 days">Last 30 days</option>
            <option value="Last quarter">Last quarter</option>
            <option value="Last year">Last year</option>
            <option value="All time">All time</option>
          </select>
        </div>
      </div>
      <LineChart className="p-2" data={dataStatic} xKey="name" yKey="uv" hexColor="#8a45d9" />
      <Metrics />
    </div>
  );
}

export default Logitudinal;
