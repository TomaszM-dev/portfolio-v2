import Navbar from "@/components/nav";
import Hydrate from "@/components/preloader/hydrate";
import { AnimatePresence } from "framer-motion";
import type { Metadata } from "next";
import { Abhaya_Libre } from "next/font/google";
import "./globals.css";

const abhaya = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tomasz Malocha Portfolio",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={abhaya.className}>
        <Hydrate>
          <Navbar />
          {children}
        </Hydrate>
      </body>
    </html>
  );
}
