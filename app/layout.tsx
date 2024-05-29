import type { Metadata } from "next";
import { Geologica } from "next/font/google";
import "./globals.css";

const font = Geologica({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dylan James | Portfolio",
  description: "Just a boring ole' portfolio site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
