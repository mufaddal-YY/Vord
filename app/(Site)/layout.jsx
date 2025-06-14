import "./globals.css";
import { Inter } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Suspense } from "react";
import Script from "next/script";
import { Toaster } from "sonner";
import Header from "@/components/Nav/Header";
import Footer from "@/components/Nav/Footer";
import ProgressBars from "@/components/Nav/ProgressBar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="mt-12">
          {children}
          <Toaster closeButton position="top-right" richColors />
        </main>
        <Footer />
        <Suspense>
          <ProgressBars />
        </Suspense>
      </body>
    </html>
  );
}
