import Cta from "@/components/Common/Cta";
import Faqs from "@/components/Common/Faqs";
import CustomRevenueEngine from "@/components/Homepage/CustomRevenueEngine";
import HeroBanner from "@/components/Homepage/HeroBanner";
import Insights from "@/components/Homepage/Insights";
import MarketingPerformance from "@/components/Homepage/MarketingPerformance";
import PoweredBySection from "@/components/Homepage/PoweredBySection";
import RevenueEngine from "@/components/Homepage/RevenueEngine";
import Services from "@/components/Homepage/Services";
import Statistics from "@/components/Homepage/Statistics";
import WhyVord from "@/components/Homepage/WhyVord";
import {
  getClientele,
  getFaqData,
  getHomeData,
  getTestimonials,
} from "@/sanity/fetchedData";

export const metadata = {
  title: "Vord Marketing",
  description: "",
};

export default async function Home() {
  const homeData = await getHomeData();
  const clienteleData = await getClientele();
  const testimonialsData = await getTestimonials();
  const faqData = await getFaqData();

  return (
    <main className="mt-12">
      <HeroBanner
        homeData={homeData}
        clienteleData={clienteleData}
        testimonialsData={testimonialsData}
      />
      <RevenueEngine homeData={homeData} />
      <CustomRevenueEngine homeData={homeData} />
      <Services homeData={homeData} />
      <Statistics homeData={homeData} />
      <Insights homeData={homeData} />
      <PoweredBySection homeData={homeData} />
      <WhyVord homeData={homeData} />
      <MarketingPerformance
        homeData={homeData}
        testimonialsData={testimonialsData}
      />
      <Faqs faqData={faqData} />
      <Cta
        ctaTitle={"Ready to Transform Your Marketing Into a Revenue Engine?"}
        ctaDescription={
          "Discover how our integrated approach can deliver predictable growth in engagement, authority, and revenue for your business."
        }
        ctaPrimaryButton={"Schedule Your Revenue Strategy Session"}
        ctalink={"#"}
        ctaSecondaryButton={"See Our Process"}
        ctaSecondarylink={"#"}
      />
    </main>
  );
}
