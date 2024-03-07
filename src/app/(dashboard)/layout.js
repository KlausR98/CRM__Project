import "./globals.css";
import { Open_Sans } from "next/font/google";
import Navbar from "@/src/components/Navbar/Navbar";
import Header from "@/src/components/Header/Header";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Healthy Collective",
  description: "Fully optional CRM App",
  icons: {
    icon: "/Browser__Logo__HC__CRM.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang='en'>
        <body className={openSans.className}>
          <div className='flex flex-row w-full h-full'>
            <Navbar />
            <div className='flex flex-col w-full px-1 pr-0 bg-[#F4F4F4]'>
              <Header />
              {children}
            </div>
          </div>
        </body>
      </html>
    </>
  );
}
