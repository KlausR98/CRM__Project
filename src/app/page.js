import Navbar from "@/src/components/Navbar/Navbar";
import Users from "@/src/components/Users/Users";
import Header from "@/src/components/Header/Header";
import ChartContainer from "@/src/components/ChartContainer/ChartContainer";
import MarketingCampaigns from "@/src/components/MarketingCampaigns/MarketingCampaigns";
import SmallChartContainer from "@/src/components/SmallChartContainer/SmallChartContainer";

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
