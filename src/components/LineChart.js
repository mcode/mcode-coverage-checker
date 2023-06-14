import { ResponsiveContainer, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, Dot } from 'recharts';

const formatDate = (tickValue) => new Date(tickValue).toLocaleDateString();

function CustomizedDot({ cx, cy, payload, selectedFile, color }) {
  if (payload.name === selectedFile) {
    return <Dot cx={cx} cy={cy} r={5} stroke="white" fill={color} />;
  }

  return <svg />;
}

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border-2 border-black p-1">
        <p className="label">{payload[0].payload.name}</p>
        <p className="label">{formatDate(label)}</p>
        <p className="label">{`Coverage: ${payload[0].value}%`}</p>
      </div>
    );
  }

  return null;
}

export default function LineChart({ className, data, xKey, yKey, hexColor, selectedFile }) {
  const formatPercent = (tickValue) => `${tickValue}%`;

  return (
    <div className={className}>
      <ResponsiveContainer>
        <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          {/* Defines a linear gradient SVG that we can reference for our Area's fill color */}
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={hexColor} stopOpacity={0.8} />
              <stop offset="60%" stopColor={hexColor} stopOpacity={0.2} />
              <stop offset="95%" stopColor={hexColor} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis style={{ fontSize: 12 }} dataKey={xKey} tickFormatter={formatDate} />
          <YAxis style={{ fontSize: 12 }} domain={[0, 100]} tickFormatter={formatPercent} />
          <CartesianGrid strokeDasharray="3 7" horizontal={false} />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey={yKey}
            stroke={hexColor}
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorGradient)"
            dot={<CustomizedDot selectedFile={selectedFile} color={hexColor} />}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
