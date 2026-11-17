import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleNetwork from "@/components/ParticleNetwork";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#090b10",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Injamam Ul Hoque Sifat | Flutter Mobile App Developer (Android & iOS)",
  description:
    "Portfolio of Injamam Ul Hoque Sifat — Flutter Mobile App Developer specializing in performant, cross-platform Android & iOS applications with Clean Architecture.",
  keywords: [
    "Injamam Ul Hoque Sifat",
    "Flutter Developer",
    "Flutter Mobile App Developer",
    "Android & iOS",
    "Dart",
    "Clean Architecture",
    "GetX",
    "BLoC",
    "Firebase",
    "REST API",
  ],
  authors: [{ name: "Injamam Ul Hoque Sifat", url: "https://github.com/injamam03" }],
  creator: "Injamam Ul Hoque Sifat",
  metadataBase: new URL("https://injamam.dev"),
  openGraph: {
    title: "Injamam Ul Hoque Sifat | Flutter Mobile App Developer (Android & iOS)",
    description:
      "Crafting high-performance, cross-platform mobile apps for Android & iOS with Clean Architecture and pixel-perfect design.",
    url: "https://injamam.dev",
    siteName: "Injamam Ul Hoque Sifat Portfolio",
    images: [
      {
        url: "/assets/profile.jpg",
        width: 800,
        height: 800,
        alt: "Injamam Ul Hoque Sifat — Flutter Mobile App Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Injamam Ul Hoque Sifat | Flutter Mobile App Developer (Android & iOS)",
    description:
      "Crafting high-performance, cross-platform mobile apps for Android & iOS with Clean Architecture and pixel-perfect design.",
    images: ["/assets/profile.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased relative min-h-screen flex flex-col selection:bg-[var(--color-accent)] selection:text-white`}
      >
        <ParticleNetwork />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
