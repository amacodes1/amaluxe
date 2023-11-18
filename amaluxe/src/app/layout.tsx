import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavTop from "@/components/NavTop";
import NavBar from "@/components/NavBar";
import NavBarMain from "@/components/NavBarMain";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AmaLuxe",
  description: "Created by Amacodes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavTop />
        <NavBar />
        <NavBarMain />
        {children}
      </body>
    </html>
  );
}
