import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Image from "next/image";
import BondingCurveChart from "../../components/BondingCurveChart";

// Dummy Token Data with initial values
const tokens = [
  { id: 1, name: "```Codeva AI```", ticker: "CODEVA", marketCap: 52200, supply: 10000, price: 5, image: "https://picsum.photos/400/300?random=1" },
  { id: 2, name: "One Day Challenge", ticker: "1DayChal", marketCap: 14000, supply: 5000, price: 2, image: "https://picsum.photos/400/300?random=2" },
  { id: 3, name: "PIX MIX", ticker: "PIX", marketCap: 4700, supply: 3000, price: 1.5, image: "https://picsum.photos/400/300?random=3" },
  { id: 4, name: "The Final Sendor", ticker: "SENDOR", marketCap: 12500, supply: 7000, price: 3, image: "https://picsum.photos/400/300?random=4" },
];

export default function TokenDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [token, setToken] = useState(null);
  const [tradeType, setTradeType] = useState("buy");
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    if (id) {
      const foundToken = tokens.find((t) => t.id == id);
      if (foundToken) setToken({ ...foundToken });
    }
  }, [id]);

  if (!token) return <div className="text-white text-center mt-20">Loading...</div>;

  // Simulated Bonding Curve Function (Linear for simplicity)
  const bondingCurvePrice = (supplyChange) => {
    return (token.price + (supplyChange * 0.01)).toFixed(4); // Adjust factor as needed
  };

  const handleTrade = () => {
    if (!amount || amount <= 0) return;
    
    let newSupply = tradeType === "buy" ? token.supply + parseFloat(amount) : token.supply - parseFloat(amount);
    let newPrice = bondingCurvePrice(tradeType === "buy" ? parseFloat(amount) : -parseFloat(amount));
    let newMarketCap = newSupply * newPrice;

    setToken({ ...token, supply: newSupply, price: newPrice, marketCap: newMarketCap });
  };

  return (
    <>
      <Header />
      <main className="container mx-auto p-6 max-w-2xl">
        <BondingCurveChart />
        <h2 className="text-3xl font-bold text-white text-center">{token.name} ({token.ticker})</h2>

        {/* Buy/Sell Toggle */}
        <div className="flex justify-center mt-6">
          <button 
            className={`px-4 py-2 rounded-l-lg w-1/2 ${tradeType === "buy" ? "bg-green-500 text-black" : "bg-gray-700 text-gray-400"}`}
            onClick={() => setTradeType("buy")}
          >
            Buy
          </button>
          <button 
            className={`px-4 py-2 rounded-r-lg w-1/2 ${tradeType === "sell" ? "bg-red-500 text-black" : "bg-gray-700 text-gray-400"}`}
            onClick={() => setTradeType("sell")}
          >
            Sell
          </button>
        </div>

        {/* Trade Box */}
        <div className="bg-[#1A1A2E] p-6 mt-4 rounded-lg border border-[#292B3A]">
          <div className="flex justify-between text-gray-300 text-sm">
            <span>Balance:</span>
            <span>0.0000 USDC</span>
          </div>

          <div className="relative mt-2">
            <input 
              type="number" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)} 
              placeholder="Enter amount" 
              className="w-full bg-[#2A2D3E] border border-[#3B3E5A] text-white p-3 rounded-lg focus:ring-2 focus:ring-[#7B3FE4]"
            />
          </div>

          {/* Preset Amounts */}
          <div className="flex justify-between mt-2">
            {["0.1", "0.5", "1", "max"].map((val, index) => (
              <button key={index} 
                onClick={() => setAmount(val === "max" ? token.supply : val)} 
                className="bg-gray-800 text-gray-400 px-3 py-1 rounded hover:bg-gray-700">
                {val} USDC
              </button>
            ))}
          </div>

          <button 
            onClick={handleTrade} 
            className={`w-full py-3 rounded-lg mt-4 hover:scale-105 transition ${tradeType === "buy" ? "bg-green-500 text-black" : "bg-red-500 text-white"}`}>
            {tradeType === "buy" ? `Buy Token @ ${token.price} USDC` : `Sell Token @ ${token.price} USDC`}
          </button>
        </div>

        {/* Token Info */}
        <div className="mt-6 text-center">
          <Image src={token.image} alt={token.name} width={300} height={200} className="rounded-lg mx-auto" />
          <h3 className="text-xl text-white mt-4">{token.name} ({token.ticker})</h3>
          <p className="text-gray-400">Market Cap: ${token.marketCap.toLocaleString()}</p>
          <p className="text-gray-400">Total Supply: {token.supply.toLocaleString()}</p>
          <p className="text-gray-400">Current Price: {token.price} USDC</p>
        </div>

        {/* Bonding Curve Progress */}
        <div className="mt-6">
          <p className="text-gray-400 text-sm">Bonding Curve Simulation:</p>
          <div className="w-full bg-gray-700 h-3 rounded-full mt-2">
            <div className="bg-green-500 h-3 rounded-full" style={{ width: `${Math.min(token.supply / 1000, 100)}%` }}></div>
          </div>
          <p className="text-gray-400 text-xs mt-2">
            As more tokens are purchased, price increases. As tokens are sold, price decreases.
          </p>
        </div>
      </main>
    </>
  );
}
