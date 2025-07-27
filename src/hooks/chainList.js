

import ethlogo from "../assets/ethLogo.svg";
import arbitrumlogo from "../assets/arbitrumlogo.png";
import bsclogo from "../assets/bsclogo.png";
import polygonlogo from "../assets/polygonlogo.png"; 
import optimismlogo from "../assets/optimismlogo.png"; 
import baselogo from "../assets/baselogo.png"; 

const chains = [
  {
    name: "Ethereum",
    rpc: "https://eth.llamarpc.com",
    logo: ethlogo
  },
  {
    name: "Polygon",
    rpc: "https://polygon-rpc.com",
    logo: polygonlogo
  },
  {
    name: "BSC",
    rpc: "https://bsc-dataseed.binance.org",
    logo: bsclogo
  },
  {
    name: "Arbitrum",
    rpc: "https://arb1.arbitrum.io/rpc",
    logo: arbitrumlogo
  },
  {
    name: "Optimism",
    rpc: "https://mainnet.optimism.io",
    logo: optimismlogo
  },
  {
    name: "Base",
    rpc: "https://mainnet.base.org",
    logo: baselogo
  }
];





export default chains
