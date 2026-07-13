import type { Metadata } from "next";
import { Anton, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import OSOverlay from "@/components/OSOverlay";
import Sidebar from "@/components/Sidebar";
import IntroScreen from "@/components/IntroScreen";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "MOSA// ENGINEERING SYSTEM",
  description: "Career Operating System of Mosa Lichaba, Full Stack Software Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anton.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable} antialiased bg-engineering-grid min-h-screen flex text-neo-black`}
      >
        <IntroScreen />
        <CustomCursor />
        <OSOverlay />
        <Sidebar />

        {/* Main Content Area */}
        <main className="ml-64 flex-1 min-w-0">
          {children}
        </main>
      </body>
    </html>
  );
}
