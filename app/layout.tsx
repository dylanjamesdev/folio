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
    <>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body className={font.className}>{children}</body>
      </html>
    </>
  );
}
