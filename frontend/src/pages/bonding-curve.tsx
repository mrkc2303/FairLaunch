import BondingCurveChart from "../components/BondingCurveChart";
import Header from "../components/Header";

export default function BondingCurvePage() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl text-white font-bold text-center mb-6">Token Bonding Curves</h1>
        <BondingCurveChart />
      </main>
    </>
  );
}
