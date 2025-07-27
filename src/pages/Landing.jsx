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

  // Trigger fade-in animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Handle newsletter signup
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Simulate API call for newsletter signup
    setTimeout(() => {
      setIsSubmitted(true);
      setEmail("");
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      {/* Header */}
      <header
        className="flex items-center justify-between p-6 max-w-7xl mx-auto"
        role="banner"
      >
        <h1
          className="text-2xl font-bold animate-fade-in"
          aria-label="ChainPing Logo"
        >
          🛰️ ChainPing
        </h1>
        <nav aria-label="Main navigation">
          <Link to="/dashboard">
            <button
              className="bg-blue-600 cursor-pointer hover:bg-blue-700 px-4 py-2 rounded-md text-white font-medium flex items-center gap-2"
              aria-label="Launch Dashboard"
            >
              <RocketLaunchIcon className="w-5 h-5" aria-hidden="true" />
              Launch Dashboard
            </button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="text-center mt-16 px-6" role="main">
        <h2
          className={`text-4xl md:text-5xl font-extrabold leading-tight transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Monitor Your Blockchain RPCs
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
          Get instant insights on the health, latency, and uptime of multiple
          RPC endpoints across Ethereum and Layer 2 chains.
        </p>

        {/* Features */}
        <div
          className="mt-10 grid gap-4 md:grid-cols-2 max-w-2xl mx-auto text-left"
          role="list"
        >
          {features.map((feature, i) => (
            <div
              key={i}
              className={`flex items-center space-x-3 transition-transform duration-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
              role="listitem"
            >
              <CheckCircleIcon
                className="w-6 h-6 text-green-400"
                aria-hidden="true"
              />
              <p className="text-gray-100">{feature}</p>
            </div>
          ))}
        </div>

        {/* Supported Chains */}
          <h3 className="mt-16 text-2xl font-semibold">Supported Chains</h3>
        <div className="mt-4 flex  w-2/4 m-auto " role="list">
          {chains.map((chain) => (
            <div className="gap-4 w-full p-4">
              <img
                src={chain.logo}
                alt={`${chain.name} Logo`}
                className="w-10 h-10 mb-4 m-auto"
              />
              <label className="text-xl font-semibold">{chain.name}</label>
            </div>
          ))}
        </div>

        {/* Educational Section: What is RPC */}
        <section
          className="mt-24 max-w-4xl mx-auto text-left bg-gray-800/50 p-8 rounded-xl shadow-lg"
          aria-labelledby="rpc-heading"
        >
          <h3
            id="rpc-heading"
            className="text-3xl font-bold mb-4 text-center p-4"
          >
            🤔 What is an RPC?
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            RPC stands for <strong>Remote Procedure Call</strong>. In
            blockchain, it allows applications like wallets and dApps to
            communicate with a blockchain node. RPCs are used to:
          </p>
          <ul
            className="list-disc list-inside text-gray-300 space-y-2"
            role="list"
          >
            <li role="listitem">
              Fetch account balances and transaction history
            </li>
            <li role="listitem">Send transactions to the blockchain</li>
            <li role="listitem">Query smart contract data</li>
            <li role="listitem">Monitor on-chain events in real-time</li>
          </ul>
          <p className="mt-6 text-gray-300">
            Every decentralized app depends on reliable RPC endpoints to
            function. Downtime or latency in RPCs can break user experiences,
            delay transactions, and cause trust issues.
          </p>
        </section>

        {/* Why ChainPing */}
        <section
          className="mt-16 max-w-4xl mx-auto text-left bg-gray-800/50 p-8 rounded-xl shadow-lg"
          aria-labelledby="why-chainping-heading"
        >
          <h3
            id="why-chainping-heading"
            className="text-3xl font-bold mb-4 text-center p-4"
          >
            ⚙️ Why Use ChainPing?
          </h3>
          <p className="text-gray-300 mb-4">
            ChainPing is built for developers, infrastructure teams, and devops
            engineers who manage or rely on blockchain nodes.
          </p>
          <ul
            className="list-disc list-inside text-gray-300 space-y-2"
            role="list"
          >
            <li role="listitem">Visualize RPC performance in real-time</li>
            <li role="listitem">Instantly detect slow or failing endpoints</li>
            <li role="listitem">Compare latency across providers</li>
            <li role="listitem">Stay informed with automated status checks</li>
          </ul>
        </section>

        {/* Newsletter Signup */}
        <section
          className="mt-16 max-w-4xl mx-auto text-center bg-gray-800/50 p-8 rounded-xl shadow-lg"
          aria-labelledby="newsletter-heading"
        >
          <h3 id="newsletter-heading" className="text-3xl font-bold mb-4">
            📬 Stay Updated
          </h3>
          <p className="text-gray-300 mb-4">
            Join our newsletter for the latest ChainPing updates and blockchain
            insights.
          </p>
          {isSubmitted ? (
            <p className="text-green-400">Thank you for signing up!</p>
          ) : (
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-600"
                required
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-md text-white font-semibold"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </form>
          )}
        </section>

        {/* Call to Action */}
        <Link to="/dashboard">
          <button
            className="mt-12 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl text-white font-semibold text-lg shadow-lg transition"
            aria-label="Launch RPC Dashboard"
          >
            🚀 Launch RPC Dashboard
          </button>
        </Link>
      </main>

      {/* Footer */}
      <footer
        className="text-center mt-20 p-4 text-gray-500 text-sm"
        role="contentinfo"
      >
        Built with 💻 by Raphael | #30DaysOf30Apps |{" "}
        <a
          href="https://x.com/chainping"
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

// LandingPage.propTypes = {
//   // No props are passed, but adding PropTypes for future extensibility
// };

export default memo(LandingPage);
