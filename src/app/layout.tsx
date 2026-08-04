import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleNetwork from "@/components/ParticleNetwork";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

// TODO: Change these values to your own name / role / description.
export const metadata: Metadata = {
  title: "Your Name — Flutter Developer",
  description:
    "Flutter mobile app developer portfolio — projects, experience, and contact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        try {
          const saved = localStorage.getItem('theme');
          if (saved === 'light') document.documentElement.classList.add('light');
        } catch (e) {}
      `,
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased relative`}
      >
        <ParticleNetwork />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
