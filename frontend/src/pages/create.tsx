import Header from "../components/Header";
import { useState } from "react";

export default function CreateToken() {
  const [tokenDetails, setTokenDetails] = useState({
    name: "",
    ticker: "",
    image: "",
    description: "",
    initialUSDC: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setTokenDetails({ ...tokenDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Deploying Token:", tokenDetails);
  };

  return (
    <>
      <Header />
      <main className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          🚀 Create a New Token
        </h2>

        <div className="bg-[#1A1A2E] shadow-lg p-8 rounded-xl border border-[#292B3A] w-full max-w-2xl mx-auto">
          <label className="block mb-2 text-gray-300">Token Name</label>
          <input
            type="text"
            name="name"
            value={tokenDetails.name}
            onChange={handleChange}
            className="w-full bg-[#2A2D3E] border border-[#3B3E5A] text-white p-3 rounded-lg mb-4 focus:ring-2 focus:ring-[#7B3FE4]"
            placeholder="Enter Token Name"
          />

          <label className="block mb-2 text-gray-300">Ticker</label>
          <input
            type="text"
            name="ticker"
            value={tokenDetails.ticker}
            onChange={handleChange}
            className="w-full bg-[#2A2D3E] border border-[#3B3E5A] text-white p-3 rounded-lg mb-4 focus:ring-2 focus:ring-[#7B3FE4]"
            placeholder="Enter Token Symbol (e.g. MEME)"
          />

          <label className="block mb-2 text-gray-300">Token Image URL</label>
          <input
            type="text"
            name="image"
            value={tokenDetails.image}
            onChange={handleChange}
            className="w-full bg-[#2A2D3E] border border-[#3B3E5A] text-white p-3 rounded-lg mb-4 focus:ring-2 focus:ring-[#7B3FE4]"
            placeholder="Enter Image URL"
          />

          <label className="block mb-2 text-gray-300">Description</label>
          <textarea
            name="description"
            value={tokenDetails.description}
            onChange={handleChange}
            className="w-full bg-[#2A2D3E] border border-[#3B3E5A] text-white p-3 rounded-lg mb-4 focus:ring-2 focus:ring-[#7B3FE4]"
            placeholder="Enter Token Description"
          />

          <label className="block mb-2 text-gray-300">Initial USDC Amount</label>
          <input
            type="number"
            name="initialUSDC"
            value={tokenDetails.initialUSDC}
            onChange={handleChange}
            className="w-full bg-[#2A2D3E] border border-[#3B3E5A] text-white p-3 rounded-lg mb-4 focus:ring-2 focus:ring-[#7B3FE4]"
            placeholder="Enter USDC Amount for Token Launch"
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-[#7B3FE4] to-[#4F1F9B] text-white py-3 rounded-lg hover:scale-105 transition transform duration-300 shadow-md hover:shadow-lg"
          >
            🚀 Deploy Token
          </button>
        </div>
      </main>
    </>
  );
}
