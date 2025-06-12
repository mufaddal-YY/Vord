import CampaignTypes from "@/components/B2B_Email/CampaignTypes";
import OurApproach from "@/components/B2B_Email/OurApproach";
import PrecisionSection from "@/components/B2B_Email/PrecisionSection";
import WhyChooseVord from "@/components/B2B_Email/WhyChooseVord";
import WhyEmail from "@/components/B2B_Email/WhyEmail";
import Cta from "@/components/Common/Cta";
import PageBanner from "@/components/Common/PageBanner";
import { getEmailData } from "@/sanity/fetchedData";

export default async function B2BEmailMarketing() {
  const emailData = await getEmailData();
  return (
    <main>
      {emailData.map((item, idx) => (
        <div key={idx}>
          <PageBanner headline="B2B Email Marketing Services" />
        </div>
      ))}
      <PrecisionSection emailData={emailData} />
      <WhyEmail emailData={emailData} />
      <OurApproach emailData={emailData} />
      <CampaignTypes emailData={emailData} />
      <WhyChooseVord emailData={emailData} />

      {emailData.map((item, idx) => (
        <div className="py-[50x]" key={idx}>
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
