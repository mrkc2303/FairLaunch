import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Header() {
  return (
    <div className="flex flex-row w-full justify-between items-center px-6 py-4 bg-gray-900 text-white">
      {/* Logo */}
      <h1 className="w-96 text-xl font-bold">FairLaunch</h1>

      {/* Wallet Connect Button */}
      <ConnectButton />
    </div>
  );
}
