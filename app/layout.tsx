import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quick Folio",
  description:
    "A quick developer site, presenting your open source work published on GitHub.",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains_mono.variable}`}>
      <body>
        <div className="m-auto flex min-h-screen max-w-[1440px] flex-col justify-between">
          <div>
            <Header />
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
