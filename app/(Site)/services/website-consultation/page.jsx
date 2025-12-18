import Cta from "@/components/Common/Cta";
import PageBanner from "@/components/Common/PageBanner";
import IntroSection from "@/components/Website_Consultation/IntroSection";
import WhyNotConverting from "@/components/Website_Consultation/WhyNotConverting";
import ConsultationProcess from "@/components/Website_Consultation/ConsultationProcess";
import VordFramework from "@/components/Website_Consultation/VordFramework";
import WhoIsThisFor from "@/components/Website_Consultation/WhoIsThisFor";
import ProvenResults from "@/components/Website_Consultation/ProvenResults";
import WhatYouGet from "@/components/Website_Consultation/WhatYouGet";
import WebsiteFaqs from "@/components/Website_Consultation/WebsiteFaqs";
import { getWebsiteConsultationData } from "@/sanity/fetchedData";

export async function generateMetadata() {
  const consultationData = await getWebsiteConsultationData();
  const data = consultationData?.[0];

  return {
    title: data?.metaTitle || "B2B Website Consultation | VORD Marketing",
    description:
      data?.metaDescription ||
      "Turn your B2B website into a revenue machine with our proven framework for design, content strategy, and user flow.",
    keywords: data?.metaKeywords || [],
  };
}

export default async function WebsiteConsultation() {
  const consultationData = await getWebsiteConsultationData();
  return (
    <main>
      {consultationData.map((item, idx) => (
        <div key={idx}>
          <PageBanner headline={item?.headline} />
        </div>
      ))}
      <IntroSection consultationData={consultationData} />
      <WhyNotConverting consultationData={consultationData} />
      <ConsultationProcess consultationData={consultationData} />
      <VordFramework consultationData={consultationData} />
      <WhoIsThisFor consultationData={consultationData} />
      <ProvenResults consultationData={consultationData} />
      <WhatYouGet consultationData={consultationData} />
      <WebsiteFaqs consultationData={consultationData} />
      {consultationData.map((item, idx) => (
        <div className="py-[50px]" key={idx}>
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
