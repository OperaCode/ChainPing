import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircleIcon, ArrowPathIcon } from "@heroicons/react/24/solid";
import ChainGrid from "../components/ChainGrid";
import { pingRpc } from "../utils/pingRpc";

const chains = [
  {
    name: "Ethereum",
    rpc: "https://eth.llamarpc.com",
    logo:"ᛟ"
  },
  {
    name: "Polygon",
    rpc: "https://polygon-rpc.com",
    logo:""
  },
  {
    name: "BSC",
    rpc: "https://bsc-dataseed.binance.org",
    logo:""
  },
  {
    name: "Arbitrum",
    rpc: "https://arb1.arbitrum.io/rpc",
    logo:""
  },
  {
    name: "Optimism",
    rpc: "https://mainnet.optimism.io",
    logo:""
  },
  {
    name: "Base",
    rpc: "https://mainnet.base.org",
    logo:""
  }
];

const Home = () => {
    

    
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      <header className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">🛰️ ChainPing</h1>
        <Link to="/">
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white font-medium">
            ← Back to Home
          </button>
        </Link>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-4xl font-extrabold text-center mb-6">
          RPC Monitoring Dashboard
        </h2>
        <p className="text-center text-gray-300 max-w-xl mx-auto mb-10">
          View the health, latency, and status of blockchain RPC endpoints in real-time.
        </p>

        {/* Example dashboard component grid */}
        <div className="">
          
          <ChainGrid chains={chains}/>
        </div>
      </main>

      <footer className="text-center mt-20 p-4 text-gray-500 text-sm">
        Built with 💻 by Raphael | #30DaysOf30Apps
      </footer>
    </div>
  );
};

export default Home;
