
import Footer from "./components/footer";

import NavBar from "./components/navBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./provider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-Shop",
  description: "Your one-stop shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
    <html lang="en">
      <body className={`${inter.className} xl:max-w-7xl max-w-6xl mx-auto`}>
        
        {/* <Nav/> */}
        <NavBar />{children}<Footer />
        <Toaster position="top-right"/>
      </body>
    </html>
    </Providers>
  );
}
