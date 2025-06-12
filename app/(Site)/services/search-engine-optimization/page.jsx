import Cta from "@/components/Common/Cta";
import PageBanner from "@/components/Common/PageBanner";
import SeoSearchIntent from "@/components/Seo/SeoSearchIntent";
import SeoServices from "@/components/Seo/SeoServices";
import VordAdvantage from "@/components/Seo/VordAdvantage";
import WhySeo from "@/components/Seo/WhySeo";
import { getSeoData } from "@/sanity/fetchedData";

export default async function SearchEngineOptimization() {
  const seoData = await getSeoData();
  return (
    <main>
      {seoData.map((item, idx) => (
        <div key={idx}>
          <PageBanner headline={item?.headline} />
        </div>
      ))}
      <WhySeo seoData={seoData} />
      <SeoSearchIntent seoData={seoData} />
      <SeoServices seoData={seoData} />
      <VordAdvantage seoData={seoData} />
      {seoData.map((item, idx) => (
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
