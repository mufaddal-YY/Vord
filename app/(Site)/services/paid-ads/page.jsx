import Cta from "@/components/Common/Cta";
import PageBanner from "@/components/Common/PageBanner";
import AdsManagement from "@/components/Paid_Ads/AdsManagement";
import DrivingB2BGrowth from "@/components/Paid_Ads/DrivingB2BGrowth";
import PaidAdAdvantage from "@/components/Paid_Ads/PaidAdAdvantage";
import WhyPaidAds from "@/components/Paid_Ads/WhyPaidAds";
import { getPaidAds } from "@/sanity/fetchedData";

export default async function PaidAds() {
  const paidadsData = await getPaidAds();
  return (
    <main>
      {paidadsData.map((item, idx) => (
        <div key={idx}>
          <PageBanner headline="Strategic Paid Advertising" />
        </div>
      ))}
      <DrivingB2BGrowth paidadsData={paidadsData} />
      <WhyPaidAds paidadsData={paidadsData} />
      <AdsManagement paidadsData={paidadsData} />
      <PaidAdAdvantage paidadsData={paidadsData} />

      {paidadsData.map((item, idx) => (
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
