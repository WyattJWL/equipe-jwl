import type { Metadata } from "next";
import { Caveat, Anton, DM_Sans } from "next/font/google";
import "./globals.css";

const brush = Caveat({ subsets: ["latin"], weight: ["700"], variable: "--font-brush" });
const blocky = Anton({ subsets: ["latin"], weight: ["400"], variable: "--font-blocky" });
const body = DM_Sans({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "JWL Marketing — Équipe",
  description: "Choisis ta destination : Wyatt ou Jodie.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${brush.variable} ${blocky.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
