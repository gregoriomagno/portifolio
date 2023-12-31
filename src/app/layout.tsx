import type { Metadata } from "next";
import { Vollkorn } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav";


const vollkorn = Vollkorn({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={vollkorn.className}>
        
          <NavBar />
          {children}
     
      </body>
    </html>
  );
}
