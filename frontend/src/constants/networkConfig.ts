
export const NETWORK_CONFIG: { [key: number]: { 
    name: string;
    rpcUrl: string;
    whitelisted: string;
    bonding: string;
    factory: string;
    USDCToken: string;
    startBlock: number;
  } } = {
    11155111: {
        name: "Sepolia",
        rpcUrl: "https://gateway.tenderly.co/public/sepolia",
        whitelisted: "0x7c353533C192e5096cE01C3F2D8BA2CDeC184920",
        bonding: "0xd6B1CC8a1eD4DAbEF0A0425030CcbE3571A239d4",
        factory: "0x1030beED2D98c68f45B791B9Bdc9E184bc53fef4",
        USDCToken: "0x9Fb12C42Fd17062EC67D29ac7C35Ad3957D1620b",
        startBlock: 7800000,
    },
  };