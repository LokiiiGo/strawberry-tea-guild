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
  description: "Feito com Next.JS",
  icons: {
    icon: "/images/logo-st.png",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
