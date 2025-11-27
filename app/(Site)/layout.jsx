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
import ReCaptchaProvider from "@/components/Common/GoogleReCaptchaProvider";

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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vord Marketing",
    "url": "https://www.vord.marketing/",
    "logo": "https://www.vord.marketing/_next/static/media/logo.318d5310.png",
    "image": "https://www.vord.marketing/_next/static/media/logo.318d5310.png",
    "description": "Vord Marketing is a B2B digital marketing agency helping SaaS and technology companies in the US & UK increase revenue through integrated SEO, LinkedIn marketing, content strategy, and paid advertising.",
    "email": "info@vord.marketing",
    "telephone": "+91-9226002744",
    "sameAs": [
      "https://www.linkedin.com/company/vord-digital-marketing-solutions/",
      "https://x.com/VordDigital",
      "https://www.facebook.com/Vorddigitalmarketing"
    ],
    "knowsAbout": [
      "LinkedIn Marketing Services",
      "LinkedIn Marketing Agency",
      "LinkedIn Digital Marketing",
      "LinkedIn Marketing Strategy",
      "LinkedIn Profile Optimization Services",
      "LinkedIn Profile Makeover",
      "LinkedIn Advertising Services",
      "LinkedIn Lead Generation",
      "LinkedIn Ads Agency",
      "B2B Email Marketing Services",
      "B2B Lead Generation Services",
      "B2B Digital Marketing Strategies",
      "B2B Marketing on Social Media",
      "Best B2B Lead Generation Companies",
      "Digital Marketing Consultant",
      "Search Engine Optimisation Companies",
      "Search Engine Optimisation Consultancy",
      "Growth Marketing",
      "B2B SaaS Marketing",
      "Technology Marketing",
      "SEO for SaaS Companies",
      "Revenue Growth Marketing"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "B2B Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "LinkedIn Marketing Services",
            "alternateName": [
              "LinkedIn Marketing Agency",
              "LinkedIn Digital Marketing",
              "LinkedIn Marketing Strategy",
              "LinkedIn Advertising Services",
              "LinkedIn Lead Generation",
              "LinkedIn Ads Agency"
            ],
            "url": "https://www.vord.marketing/services/linkedin-marketing",
            "description": "Specialized LinkedIn marketing services for B2B SaaS and technology companies, including profile optimization, LinkedIn ads management, and lead generation strategies tailored to founders, VPs, and marketing heads."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Search Engine Optimization (SEO) for SaaS",
            "alternateName": [
              "Search Engine Optimisation Companies",
              "Search Engine Optimisation Consultancy",
              "Growth Marketing"
            ],
            "url": "https://www.vord.marketing/services/search-engine-optimization",
            "description": "Advanced SEO services tailored to SaaS and technology companies targeting US & UK markets, focused on increasing visibility and driving predictable revenue growth."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "B2B Email Marketing Services",
            "alternateName": [
              "B2B Lead Generation Services",
              "Best B2B Lead Generation Companies"
            ],
            "url": "https://www.vord.marketing/services/b2b-email-marketing",
            "description": "Email marketing strategies for B2B SaaS and technology companies to nurture leads, increase engagement, and generate high-quality conversions."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Content Strategy & Creation for SaaS",
            "alternateName": [
              "B2B Digital Marketing Strategies",
              "B2B Marketing on Social Media"
            ],
            "url": "https://www.vord.marketing/services/content-strategy-creation",
            "description": "Content strategy and creation services that position SaaS companies as industry leaders, improve organic visibility, and accelerate the buyer's journey."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Paid Ads Management (Google & LinkedIn)",
            "alternateName": [
              "Digital Marketing Consultant"
            ],
            "url": "https://www.vord.marketing/services/paid-ads",
            "description": "Paid advertising campaigns for predictable pipeline growth across Google Ads, LinkedIn Ads, and other performance-driven B2B channels."
          }
        }
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="NtGKpsfhzlgUHFWDi2B8FBRrfAWqrhTe7G5Fh1PfLFU"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
        <ReCaptchaProvider>
          <Header />
          <main className="mt-12">
            {children}
            <Toaster closeButton position="top-right" richColors />
          </main>
          <Footer />
          <Suspense>
            <ProgressBars />
          </Suspense>
        </ReCaptchaProvider>
      </body>
    </html>
  );
}
