import "./globals.css";
import { Open_Sans } from "next/font/google";

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
        <body className={openSans.className}>{children}</body>
      </html>
    </>
  );
}
