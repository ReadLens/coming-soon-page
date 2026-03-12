import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sherika = localFont({
  src: [
    {
      path: "../public/fonts/Sherika Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Sherika Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Sherika Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Sherika Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Sherika Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Sherika ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Sherika Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/Sherika ThinItalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/fonts/Sherika LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/Sherika Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Sherika MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/Sherika BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/Sherika ExtraBoldItalic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/fonts/Sherika BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-sherika",
  fallback: ["Inter", "Arial", "Helvetica", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Readlens | Coming Soon",
  description: "Join the waitlist for the future of reading and learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </head>
      <body
        className={`${inter.variable} ${sherika.variable} antialiased`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
