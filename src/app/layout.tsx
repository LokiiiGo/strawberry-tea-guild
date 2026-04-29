import type { Metadata } from "next";
import "./globals.css";

/* 
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

${geistSans.variable} ${geistMono.variable}
*/

export const metadata: Metadata = {
  title: "Strawberry Tea - Guilda de Brawlhalla",
  description: "===-===-===",
  icons: {
    icon: "/assets/logo-st.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`h-full antialiased`}
    >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap" rel="stylesheet" />
          <body className="lexend min-h-full flex flex-col">{children}</body>
        </html>
        );
}
