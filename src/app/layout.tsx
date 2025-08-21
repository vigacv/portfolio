import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./globalicons.css";
import Header from "./components/header";
import { ThemeProvider } from "./contexts/theme-context";

const interSans = Inter({
  variable: "--font-inter-sans",
  fallback: ["system-ui", "sans-serif"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gabriel Carmelo | Software Engineer",
  description: "Gabriel Carmelo's portfolio showcasing skills in software engineering, cloud-native solutions, and distributed architectures."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body className={`${interSans.variable}`}>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
