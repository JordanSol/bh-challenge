import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Head from "next/head";
import "./globals.css";

/* components */
import Header from "@/components/site/header/header";
import Hero from "@/components/site/hero";
import Footer from "@/components/site/footer";
import CartModal from "@/components/cart-modal/cart-modal";

/* context */
import CartContextProvider from "@/components/context/cart-context";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BetterTacos",
  description: "An interview project",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preload" href="/icons/add-cart-outline.svg" />
        <link rel="preload" href="/icons/add-cart.svg" />
        <link rel="preload" href="/icons/cart.svg" />
        <link rel="preload" href="/icons/close.svg" />
        <link rel="preload" href="/icons/minus.svg" />
        <link rel="preload" href="/icons/plus.svg" />
        <link rel="preload" href="/icons/star.svg" />
        <link rel="preload" href="/icons/trash-outline.svg" />
        <link rel="preload" href="/icons/trash.svg" />
      </Head>
      <body
        className={`${openSans.variable} antialiased overflow-x-hidden min-h-screen`}
      >
        <CartContextProvider>
          <Header />
          <Hero />
          {children}
          <Footer />
          <CartModal />
        </CartContextProvider>
      </body>
    </html>
  );
}
