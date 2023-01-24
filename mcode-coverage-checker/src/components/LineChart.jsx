import { ResponsiveContainer, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';

export default function LineChart({ className, data, xKey, yKey, hexColor }) {
  return (
    <div className={className}>
      <ResponsiveContainer height={400}>
        <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          {/* Defines a linear gradient SVG that we can reference for our Area's fill color */}
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={hexColor} stopOpacity={0.8} />
              <stop offset="60%" stopColor={hexColor} stopOpacity={0.2} />
              <stop offset="95%" stopColor={hexColor} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey={xKey} />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey={yKey} stroke={hexColor} fillOpacity={1} fill="url(#colorGradient)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
