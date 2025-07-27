import React, { useState, useEffect } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { pingRpc } from "../utils/pingRpc";
import { ClipLoader } from "react-spinners";

const ChainGrid = ({ chains }) => {
  const [chainData, setChainData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkChains = async () => {
      setLoading(true);
      const results = await Promise.all(
        chains.map(async (chain) => {
          const result = await pingRpc(chain.rpc);
          return {
            ...chain,
            status: result.status,
            latency: result.latency,
          };
        })
      );
      setChainData(results);
      setLoading(false);
    };

    checkChains();
  }, [chains]);


  useEffect(() => {
  if (!autoRefresh) return;
  const interval = setInterval(() => {
    checkChains(); 
  }, 30000);
  return () => clearInterval(interval);
}, [autoRefresh]);


  const getStatusStyle = (status, latency) => {
    if (status === "fail") return "bg-red-100 border-red-200 text-red-700";
    if (latency < 300) return "bg-green-100 border-green-200 text-green-700";
    if (latency < 800) return "bg-yellow-100 border-yellow-200 text-yellow-700";
    return "bg-red-100 border-red-200 text-red-700";
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {loading ? (
        <div className="col-span-full space-y-6 text-center text-white text-lg font-medium">
          <h2>Fetching Data...</h2>
          <ClipLoader/>
        </div>
      ) : (
        chainData.map((chain, index) => {
          const statusStyle = getStatusStyle(chain.status, chain.latency);
          return (
            <div
              key={index}
              className={`rounded-2xl border ${statusStyle} p-6 shadow-md hover:shadow-lg transition duration-200 hover:scale-[1.01] bg-white dark:bg-neutral-900`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <img
                    src={chain.logo}
                    alt={`${chain.name} logo`}
                    className="h-6 w-6"
                  />
                  <span className="font-semibold">{chain.name}</span>
                </div>
                {chain.status === "success" ? (
                  <CheckCircleIcon className="w-6 h-6 text-green-500" />
                ) : (
                  <XCircleIcon className="w-6 h-6 text-red-500" />
                )}
              </div>

              <div className="text-sm mb-2 break-all text-gray-700 dark:text-gray-300">
                <span className="font-medium text-gray-800 dark:text-white">
                  RPC:
                </span>{" "}
                {chain.rpc}
              </div>

              <div className="text-sm mb-1 text-gray-700 dark:text-gray-300">
                <span className="font-medium text-gray-800 dark:text-white">
                  Latency:
                </span>{" "}
                {chain.latency !== null ? `${chain.latency} ms` : "❌ Timeout"}
              </div>

              <div className="text-sm text-gray-700 dark:text-gray-300">
                <span className="font-medium text-gray-800 dark:text-white">
                  Status:
                </span>{" "}
                {chain.status === "success" ? "🟢 Healthy" : "🔴 Down"}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default ChainGrid;
