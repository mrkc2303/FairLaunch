import { createContext, useContext, useState, useEffect } from "react";
import { getCampaignCreatedEvents } from "../utils/getEvents";
import { startBlock } from "../constants/networkMapping";

const CampaignContext = createContext(null);

export const CampaignProvider = ({ children }) => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    async function fetchCampaigns() {
      const events = await getCampaignCreatedEvents();
      setCampaigns(events);
    }
    fetchCampaigns();
  }, []);

  return (
    <CampaignContext.Provider value={{ campaigns, setCampaigns }}>
      {children}
    </CampaignContext.Provider>
  );
};

export const useCampaigns = () => {
  return useContext(CampaignContext);
};
