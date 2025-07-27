import axios from "axios";

export const pingRpc = async (url) => {
  const start = performance.now();
  try {
    await axios.post(url, {
      jsonrpc: "2.0",
      id: 1,
      method: "eth_blockNumber",
      params: [],
    }, {
      timeout: 4000
    });

    const latency = Math.round(performance.now() - start);
    return { status: "success", latency };
  } catch (error) {
    return { status: "fail", latency: null };
  }
};
