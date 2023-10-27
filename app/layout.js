import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Portfolio Yolana Vichesa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="w-[90%] lg:max-w-6xl mx-auto my-28 p-4 h-screen items-center">
          {children}
        </div>
      </body>
    </html>
  );
}
