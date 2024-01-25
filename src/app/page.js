import Navbar from "@/components/Navbar/Navbar";
import Users from "@/components/Users/Users";
import Header from "@/components/Header/Header";
import ChartContainer from "@/components/ChartContainer/ChartContainer";
import MarketingCampaigns from "@/components/MarketingCampaigns/MarketingCampaigns";
import SmallChartContainer from "@/components/SmallChartContainer/SmallChartContainer";

export default function Home() {
  return (
    <>
      <Users />
      <ChartContainer />
      <MarketingCampaigns />
      <SmallChartContainer />
    </>
  );
}
