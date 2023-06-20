import Footer from "./components/footer";
import NavBar from "./components/navBar";
import "./globals.css";
import { Inter } from "next/font/google";

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
    <html lang="en">
      <body className={`${inter.className} xl:max-w-7xl max-w-6xl mx-auto`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
