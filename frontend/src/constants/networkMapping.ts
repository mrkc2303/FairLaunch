import { ethers } from "ethers";
import { NETWORK_CONFIG } from "./networkConfig"; // Import multi-chain config
import factoryABI from "./TokenFactoryABI.json";
import whitelistedABI from "./WhitelistedABI.json";
import ERC20ABI from "./ERC20ABI.json";
import BondingCurveABI from "./BondingCurveABI.json";

// 🔥 Function to get chain-specific configurations dynamically
export const getNetworkConfig = async () => {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const network = await provider.getNetwork();
  return NETWORK_CONFIG[network.chainId] || NETWORK_CONFIG[11155111]; // Default to Sepolia if chainId not found
};

// 🔥 Functions to get contract instances dynamically based on network
export const getFactoryContract = async (signer: any) => {
  const networkConfig = await getNetworkConfig();
  return new ethers.Contract(networkConfig.factory, factoryABI, signer);
};

export const getWhitelistedContract = async (signer: any) => {
  const networkConfig = await getNetworkConfig();
  return new ethers.Contract(networkConfig.whitelisted, whitelistedABI, signer);
};

export const getBondingContract = async (signer: any) => {
  const networkConfig = await getNetworkConfig();
  return new ethers.Contract(networkConfig.bonding, BondingCurveABI, signer);
};

export const getERC20Contract = async (signer: any) => {
  const networkConfig = await getNetworkConfig();
  return new ethers.Contract(networkConfig.USDCToken, ERC20ABI, signer);
};
