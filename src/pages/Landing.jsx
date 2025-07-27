import React from "react";
import { Link } from "react-router-dom";
import { CheckCircleIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";

const features = [
  "Multi-chain RPC monitoring",
  "Real-time latency checks",
  "Auto-refresh every 30s",
  "Status color indicators",
  "Supports Ethereum, BSC, Polygon, Base, and more",
];

const chains = ["Ethereum", "Polygon", "BSC", "Base", "Optimism", "Arbitrum"];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      <header className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">🛰️ ChainPing</h1>
        <Link to="/dashboard">
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white font-medium flex items-center gap-2">
            <RocketLaunchIcon className="w-5 h-5" />
            Launch Dashboard
          </button>
        </Link>
      </header>

      <main className="text-center mt-16 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Monitor Your Blockchain RPCs
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
          Get instant insights on the health, latency, and uptime of multiple RPC endpoints across Ethereum and Layer 2 chains.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 max-w-2xl mx-auto text-left">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center space-x-3">
              <CheckCircleIcon className="w-6 h-6 text-green-400" />
              <p className="text-gray-100">{feature}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-16 text-2xl font-semibold">Supported Chains</h3>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          {chains.map((chain) => (
            <span
              key={chain}
              className="bg-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-200"
            >
              {chain}
            </span>
          ))}
        </div>

        <Link to="/dashboard">
          <button className="mt-12 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl text-white font-semibold text-lg shadow-lg transition">
            🚀 Launch RPC Dashboard
          </button>
        </Link>
      </main>

      <footer className="text-center mt-20 p-4 text-gray-500 text-sm">
        Built with 💻 by Raphael | #30DaysOf30Apps
      </footer>
    </div>
  );
};

export default LandingPage;
