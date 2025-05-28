import CustomRevenueEngine from "@/components/Homepage/CustomRevenueEngine";
import HeroBanner from "@/components/Homepage/HeroBanner";
import Insights from "@/components/Homepage/Insights";
import PoweredBySection from "@/components/Homepage/PoweredBySection";
import RevenueEngine from "@/components/Homepage/RevenueEngine";
import Services from "@/components/Homepage/Services";
import Statistics from "@/components/Homepage/Statistics";
import WhyVord from "@/components/Homepage/WhyVord";
import {
  getClientele,
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

  return (
    <main className="mt-12">
      <HeroBanner
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
    </main>
  );
}
