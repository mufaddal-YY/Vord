import Cta from "@/components/Common/Cta";
import PageBanner from "@/components/Common/PageBanner";
import ServicesSection from "@/components/Linkedin_Optimization/ServicesSection";
import WhyLinkedin from "@/components/Linkedin_Optimization/WhyLinkedin";
import { getLinkedinData } from "@/sanity/fetchedData";

export async function generateMetadata() {
  const linkedinData = await getLinkedinData();
  const data = linkedinData?.[0];
  
  return {
    title: data?.metaTitle || "LinkedIn Marketing Services",
    description: data?.metaDescription || "",
    keywords: data?.metaKeywords || [],
  };
}

export default async function LinkedinOptimization() {
  const linkedinData = await getLinkedinData();
  return (
    <main>
      {linkedinData.map((item, idx) => (
        <div key={idx}>
          <PageBanner headline={item?.headline} />
        </div>
      ))}
      <WhyLinkedin linkedinData={linkedinData} />
      <ServicesSection linkedinData={linkedinData} />

      {linkedinData.map((item, idx) => (
        <div key={idx}>
          <Cta
            ctaTitle={item?.ctaTitle}
            ctaDescription={item?.ctaDescription}
            ctaPrimaryButton={item?.ctaPrimaryButton}
            ctalink={item?.ctalink}
            ctaSecondaryButton={item?.ctaSecondaryButton}
            ctaSecondarylink={item?.ctaSecondarylink}
          />
        </div>
      ))}
    </main>
  );
}
