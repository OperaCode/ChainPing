import React, { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import { CheckCircleIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";
import chains from "../hooks/chainList";

const features = [
  "Multi-chain RPC monitoring",
  "Real-time latency checks",
  "Auto-refresh every 30s",
  "Status color indicators",
  "Supports Ethereum, BSC, Polygon, Base, and more",
];

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
      setEmail("");
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">🛰️ ChainPing</h1>
        <Link to="/dashboard">
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white font-medium flex items-center gap-2">
            <RocketLaunchIcon className="w-5 h-5" />
            Launch Dashboard
          </button>
        </Link>
      </header>

      {/* Hero Section */}
      <main className="text-center mt-16 px-6">
        <h2
          className={`text-5xl font-extrabold leading-tight transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Monitor Your Blockchain RPCs Instantly
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
          ChainPing gives you live status, latency, and uptime of RPC endpoints across multiple chains.
        </p>

         <Link to="/dashboard">
          <button className="mt-12 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl text-white font-semibold text-lg shadow-lg transition">
            🚀 Launch RPC Dashboard
          </button>
        </Link>

        <div className="mt-10 grid gap-4 md:grid-cols-2 max-w-2xl mx-auto text-left">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`flex items-center space-x-3 transition duration-500 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <CheckCircleIcon className="w-6 h-6 text-green-400" />
              <p className="text-gray-100">{feature}</p>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <section className="mt-24 max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-8 text-center">⚙️ How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-gray-800/50 p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold mb-2">1. Ping</h4>
              <p className="text-gray-300">We regularly ping each RPC endpoint using lightweight `HEAD` requests.</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold mb-2">2. Measure</h4>
              <p className="text-gray-300">We calculate the round-trip latency and response status for each chain.</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold mb-2">3. Display</h4>
              <p className="text-gray-300">Results are displayed on the dashboard with visual indicators and charts.</p>
            </div>
          </div>
        </section>

        {/* Supported Chains */}
        <section className="mt-24">
          <h3 className="text-3xl font-semibold mb-4">🌐 Supported Chains</h3>
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {chains.map((chain, i) => (
              <div key={i} className="flex flex-col items-center bg-gray-800/50 px-6 py-4 rounded-lg shadow-md">
                <img src={chain.logo} alt={`${chain.name} Logo`} className="w-10 h-10 mb-2" />
                <p className="text-lg font-medium">{chain.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What is RPC Section */}
        <section className="mt-24 max-w-4xl mx-auto text-left bg-gray-800/50 p-8 rounded-xl shadow-lg">
          <h3 className="text-3xl font-bold mb-4 text-center">🔍 What is an RPC?</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            RPC stands for <strong>Remote Procedure Call</strong>. In blockchain, RPCs enable communication between apps (like wallets or dApps) and nodes.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Fetch account balances and transactions</li>
            <li>Send transactions and contract calls</li>
            <li>Subscribe to on-chain events</li>
            <li>Query blockchain data in real-time</li>
          </ul>
        </section>

        {/* Why ChainPing */}
        <section className="mt-16 max-w-4xl mx-auto text-left bg-gray-800/50 p-8 rounded-xl shadow-lg">
          <h3 className="text-3xl font-bold mb-4 text-center">🧠 Why ChainPing?</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>🚨 Alerts you to failing or slow RPCs</li>
            <li>📊 See trends with visual latency charts</li>
            <li>⚡ Optimized for real-time use with no backend</li>
            <li>🔄 Constant refresh for live insights</li>
          </ul>
        </section>

       
        {/* Final CTA */}
        <Link to="/dashboard">
          <button className="mt-12 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl text-white font-semibold text-lg shadow-lg transition">
            🚀 Launch ChainPing Dashboard
          </button>
        </Link>
      </main>

      {/* Footer */}
      <footer className="text-center mt-20 p-4 text-gray-500 text-sm">
        Built with 💻 by Opera | #30DaysOf30Apps |{" "}
        <a
          href="https://x.com/OperaFaboyinde"
          className="underline hover:text-gray-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow us on X
        </a>
      </footer>
    </div>
  );
};

export default LandingPage;
