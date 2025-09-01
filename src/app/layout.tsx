import type { Metadata } from "next";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import { Inter_Tight, Poppins } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MoonMeme",
  description: "Create a playful, single-page site that explains the MoonMeme memecoin, showcases tokenomics, and guides users on how to buy, all with a fun, modern style.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} antialiased`}
        style={{ background: 'linear-gradient(135deg, #fff0f5 0%, #e8f7ff 100%)' }}
      >
        {children}
      </body>
    </html>
  );
}