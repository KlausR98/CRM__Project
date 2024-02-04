import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar/Navbar";
import Header from "@/src/components/Header/Header";
import Users from "@/src/components/Users/Users";
import ChartContainer from "@/src/components/ChartContainer/ChartContainer";
import MarketingCampaigns from "@/src/components/MarketingCampaigns/MarketingCampaigns";
import SmallChartContainer from "@/src/components/SmallChartContainer/SmallChartContainer";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Healthy Collective",
  description: "Fully optional CRM App",
  icons: {
    icon: "/Browser__Logo__HC__CRM.svg"
  }
};

export default function RootLayout() {
  return (
    <>
      <html lang='en'>
        <body className={openSans.className}>
          <div className='flex flex-row w-full h-full'>
            <Navbar />
            <div className='flex flex-col w-full px-1 pr-0'>
              <Header />
              <Users />
              <ChartContainer />
              <MarketingCampaigns />
              <SmallChartContainer />
            </div>
          </div>
        </body>
      </html>
    </>
  );
}
