import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "@/public/styles.css";

const font = Kanit({
  subsets: ["latin"],
  weight: "400",
});

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
