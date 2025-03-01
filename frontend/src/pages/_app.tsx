import Head from 'next/head';
import { useState, useEffect } from "react";
import "../styles/globals.css";
import SplashScreen from "../components/SplashScreen";
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import AppProvider from "../components/providers";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';

import { config } from '../wagmi';
import { CampaignProvider } from '../context/CampaignContext';

const client = new QueryClient();

async function MyApp({ Component, pageProps }: AppProps) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  const session = await getServerSession(authOptions);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider>
          <Head>
            <link rel="icon" href="/favicon.ico" />
            <title>FairLaunch</title>
          </Head>
          <CampaignProvider>
            <AppProvider session={session}>
            <div className="min-h-screen bg-[#0D0D0D] text-white font-poppins">
              {loading ? <SplashScreen onFinish={() => setLoading(false)} /> : <Component {...pageProps} />}
            </div>
            </AppProvider>
          </CampaignProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp;
