import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const BondingCurveChart = () => {
  const [chartData, setChartData] = useState(null);
  const [selectedCurve, setSelectedCurve] = useState("linear"); // Default curve

  useEffect(() => {
    // Define supply range (1 to 1000 tokens)
    const supply = Array.from({ length: 100 }, (_, i) => i + 1);

    // Define bonding curve formulas
    const curves = {
      linear: supply.map(x => 0.01 * x),
      exponential: supply.map(x => 0.005 * Math.exp(0.005 * x)),
      logarithmic: supply.map(x => 0.5 * Math.log(x + 1)),
      quadratic: supply.map(x => 0.00005 * x ** 2), // x² curve (scaled down)
    };

    // Set chart data based on selected curve
    setChartData({
      labels: supply,
      datasets: [
        {
          label: `${selectedCurve.charAt(0).toUpperCase() + selectedCurve.slice(1)} Curve`,
          data: curves[selectedCurve],
          borderColor: selectedCurve === "linear" ? "#22C55E" :
                       selectedCurve === "exponential" ? "#FACC15" :
                       selectedCurve === "logarithmic" ? "#3B82F6" : "#E11D48", // Red for Quadratic
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderWidth: 2,
          pointRadius: 1,
        },
      ],
    });
  }, [selectedCurve]); // Runs whenever the selected curve changes

  return (
    <div className="bg-[#1A1A2E] p-6 rounded-lg border border-[#292B3A] shadow-lg">
      <h2 className="text-white text-xl font-bold mb-4">Bonding Curve Visualization</h2>
      
      {/* Dropdown to select curve */}
      <select 
        className="w-full bg-[#2A2D3E] text-white p-2 rounded-lg mb-4 border border-[#3B3E5A]"
        value={selectedCurve}
        onChange={(e) => setSelectedCurve(e.target.value)}
      >
        <option value="linear">Linear</option>
        <option value="exponential">Exponential</option>
        <option value="logarithmic">Logarithmic</option>
        <option value="quadratic">Quadratic (x²)</option>
      </select>

      {/* Display chart */}
      {chartData && <Line data={chartData} />}
    </div>
  );
};

export default BondingCurveChart;
