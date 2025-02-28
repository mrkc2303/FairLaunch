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

  const handleChange = (e) => {
    setTokenDetails({ ...tokenDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Deploying Token:", tokenDetails);
  };

  return (
    <>
      <Header />
      <main className="container mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Create a New Token</h2>
        <div className="bg-white shadow p-6 rounded-lg">
          <label className="block mb-2">Token Name</label>
          <input
            type="text"
            name="name"
            value={tokenDetails.name}
            onChange={handleChange}
            className="w-full border p-2 rounded mb-4"
            placeholder="Enter Token Name"
          />

          <label className="block mb-2">Ticker</label>
          <input
            type="text"
            name="ticker"
            value={tokenDetails.ticker}
            onChange={handleChange}
            className="w-full border p-2 rounded mb-4"
            placeholder="Enter Token Symbol (e.g. MEME)"
          />

          <label className="block mb-2">Token Image URL</label>
          <input
            type="text"
            name="image"
            value={tokenDetails.image}
            onChange={handleChange}
            className="w-full border p-2 rounded mb-4"
            placeholder="Enter Image URL"
          />

          <label className="block mb-2">Description</label>
          <textarea
            name="description"
            value={tokenDetails.description}
            onChange={handleChange}
            className="w-full border p-2 rounded mb-4"
            placeholder="Enter Token Description"
          />

          <label className="block mb-2">Initial USDC Amount</label>
          <input
            type="number"
            name="initialUSDC"
            value={tokenDetails.initialUSDC}
            onChange={handleChange}
            className="w-full border p-2 rounded mb-4"
            placeholder="Enter USDC Amount for Token Launch"
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-2 rounded-lg"
          >
            Deploy Token
          </button>
        </div>
      </main>
    </>
  );
}
