import type { Metadata } from "next";
import "./globals.css";
import { gloriaHallelujah } from "@/fonts";

export const metadata: Metadata = {
  title: "FOSSMeet'25",
  description: "Official Website of FOSSMeet'25",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gloriaHallelujah.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
