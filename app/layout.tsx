import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";;

const inter = Source_Code_Pro({ subsets: ['latin'],display: 'swap' });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is Rajveer Singh's personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <hr/>
        <Footer/>
      </body>
    </html>
  );
}
