import type { Metadata } from "next";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gridwork — Streaming Settlement for Physical Infrastructure",
  description:
    "Gridwork is a Soroban-native protocol that pays IoT sensors, mesh nodes, and community hardware in USDC or EURC, streamed per second, with no minimum payout and no batching delay.",
  metadataBase: new URL("https://gridwork.dev"),
  openGraph: {
    title: "Gridwork — Streaming Settlement for Physical Infrastructure",
    description:
      "Register hardware, submit proof of real-world contribution, get paid every second on Stellar.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
