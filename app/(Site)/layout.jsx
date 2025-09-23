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

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://vord.marketing"),
  title: {
    default: "Vord Marketing",
    template: "%s | Vord Marketing",
  },
  description:
    "Vord is a B2B growth partner offering SEO, content, LinkedIn, email and paid acquisition to build your revenue engine.",
  keywords: [
    "B2B marketing",
    "SEO",
    "content marketing",
    "LinkedIn marketing",
    "email marketing",
    "paid ads",
  ],
  authors: [{ name: "Vord Marketing" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Vord Marketing",
    title: "Vord Marketing",
    description:
      "Vord is a B2B growth partner offering SEO, content, LinkedIn, email and paid acquisition to build your revenue engine.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vord Marketing",
    description:
      "Vord is a B2B growth partner offering SEO, content, LinkedIn, email and paid acquisition to build your revenue engine.",
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="NtGKpsfhzlgUHFWDi2B8FBRrfAWqrhTe7G5Fh1PfLFU"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MH1P5WPGY6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MH1P5WPGY6');
          `}
        </Script>
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
