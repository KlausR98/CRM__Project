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
            <div className='flex flex-col w-full px-1 pr-0 bg-[#F4F4F4]'>
              <Header />
              <div className=' '>
                <h1 className='font-bold text-[22px] leading-5 ml-4'>Home</h1>
                <SmallChartContainer />
                <MarketingCampaigns />
                <ChartContainer />
                <Users />
              </div>
            </div>
          </div>
        </body>
      </html>
    </>
  );
}
