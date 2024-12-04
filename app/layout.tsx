import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const circularBook = localFont({
  src: "./fonts/CircularStd-Book.otf",
  variable: "--font-circular-book",
  weight: "100",
});

const circularMedium = localFont({
  src: "./fonts/CircularStd-Medium.otf",
  variable: "--font-circular-medium",
  weight: "400",
});

const circularBold = localFont({
  src: "./fonts/CircularStd-Bold.otf",
  variable: "--font-circular-bold",
  weight: "700",
});

const circularBlack = localFont({
  src: "./fonts/CircularStd-Black.otf",
  variable: "--font-circular-black",
  weight: "900",
});

export const metadata: Metadata = {
  title: "Sandra Tang",
  description: "Sandra Tang personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${circularBook.variable} ${circularMedium.variable} ${circularBold.variable} ${circularBlack.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
