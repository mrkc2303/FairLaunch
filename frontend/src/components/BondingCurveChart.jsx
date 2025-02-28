import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const BondingCurveChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Define supply range (1 to 1000 tokens)
    const supply = Array.from({ length: 100 }, (_, i) => i + 1);

    // Define bonding curve formulas
    const linearCurve = supply.map(x => 0.01 * x);
    const exponentialCurve = supply.map(x => 0.005 * Math.exp(0.005 * x));
    const logarithmicCurve = supply.map(x => 0.5 * Math.log(x + 1));

    // Set chart data
    setChartData({
      labels: supply,
      datasets: [
        {
          label: "Linear Curve",
          data: linearCurve,
          borderColor: "#22C55E", // Green
          backgroundColor: "rgba(34, 197, 94, 0.2)",
          borderWidth: 2,
          pointRadius: 1,
        },
        {
          label: "Exponential Curve",
          data: exponentialCurve,
          borderColor: "#FACC15", // Yellow
          backgroundColor: "rgba(250, 204, 21, 0.2)",
          borderWidth: 2,
          pointRadius: 1,
        },
        {
          label: "Logarithmic Curve",
          data: logarithmicCurve,
          borderColor: "#3B82F6", // Blue
          backgroundColor: "rgba(59, 130, 246, 0.2)",
          borderWidth: 2,
          pointRadius: 1,
        },
      ],
    });
  }, []);

  return (
    <div className="bg-[#1A1A2E] p-6 rounded-lg border border-[#292B3A] shadow-lg">
      <h2 className="text-white text-xl font-bold mb-4">Bonding Curve Visualization</h2>
      {chartData && <Line data={chartData} />}
    </div>
  );
};

export default BondingCurveChart;
