import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: '700',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Tyler Ruiz | Portfolio",
  description: "Next.JS Portfolio site for Tyler Ruiz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${roboto.className} antialiased`}
      >

        {children}
      </body>
    </html>
  );
}
