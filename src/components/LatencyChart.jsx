import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import chains from "../hooks/chainList"; 



const LatencyChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(async () => {
      const timestamp = new Date().toLocaleTimeString();
      const latencyEntry = { time: timestamp };

      await Promise.all(
        chains.map(async (chain) => {
          const start = performance.now();
          try {
            await fetch(chain.rpc, { method: "HEAD", mode: "no-cors" }); 
            const end = performance.now();
            const latency = Math.round(end - start);
            latencyEntry[chain.name] = latency;
          } catch (err) {
            latencyEntry[chain.name] = null; 
          }
        })
      );

      setData((prev) => {
        const updated = [...prev, latencyEntry];
        return updated.slice(-20); // Keep last 20 points
      });
    }, 10000); // Every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={["auto", "auto"]} />
          <Tooltip />
          <Legend />
          {chains.map((chain, index) => (
            <Line
              key={chain.name}
              type="monotone"
              dataKey={chain.name}
              stroke={COLORS[index % COLORS.length]}
              dot={false}
              isAnimationActive={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff7300",
  "#413ea0",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
];

export default LatencyChart;
