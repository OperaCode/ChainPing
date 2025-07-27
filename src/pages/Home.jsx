import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ChainGrid from "../components/ChainGrid";
import LatencyChart from "../components/LatencyChart";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      <header className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">🛰️ ChainPing</h1>
        <Link to="/">
          <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white font-medium">
            ← Back to Home
          </button>
        </Link>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-4xl font-extrabold text-center mb-6">
          RPC Monitoring Dashboard
        </h2>
        <p className="text-center text-gray-300 max-w-xl mx-auto mb-10">
          View the health, latency, and status of blockchain RPC endpoints in
          real-time.
        </p>

        {/* RPC dashboard component*/}
        <div className="">
          <ChainGrid />
          <div>
            <h2 className="text-xl font-bold mb-4">Latency Over Time</h2>
            <LatencyChart />
          </div>
        </div>
      </main>

      <footer className="text-center mt-20 p-4 text-gray-500 text-sm">
        Built with 💻 by Raphael | #30DaysOf30Apps
      </footer>
    </div>
  );
};

export default Home;
