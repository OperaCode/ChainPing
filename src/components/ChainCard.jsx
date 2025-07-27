import React from "react";

const ChainCard = ({ name, rpc, latency, status }) => {
  const getStatusStyle = () => {
    if (status === "fail") return "bg-red-100 text-red-700";
    if (latency < 300) return "bg-green-100 text-green-700";
    if (latency < 800) return "bg-yellow-100 text-yellow-700";
    return "bg-red-100 text-red-700";
  };

  return (
    <div className={`p-4 rounded shadow-md ${getStatusStyle()}`}>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="mt-1 text-sm break-all"><strong>RPC:</strong> {rpc}</p>
      <p className="mt-2 text-lg">
        Latency: {latency !== null ? `${latency} ms` : "❌ Timeout"}
      </p>
      <p>Status: {status === "success" ? "✅ Healthy" : "❌ Down"}</p>
    </div>
  );
};

export default ChainCard;
