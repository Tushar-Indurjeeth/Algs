import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Head from "next/head";
import type { Metadata } from "next";
import { RecoilContextProvider } from "@/utils/RecoilContextProvider";

export const metadata: Metadata = {
  title: "Coding Algorithms",
  description:
    "Explore interactive visualizations and simple explanations of coding algorithms to help you understand complex concepts easily.",
};

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Coding Algorithms</title>
        <meta
          name="description"
          content="Explore interactive visualizations and simple explanations of coding algorithms to help you understand complex concepts easily."
        />
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <RecoilContextProvider>
          <Navbar />

          <main>{children}</main>
        </RecoilContextProvider>
      </body>
    </html>
  );
}
