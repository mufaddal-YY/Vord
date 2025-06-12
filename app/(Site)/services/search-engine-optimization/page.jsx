import Cta from "@/components/Common/Cta";
import PageBanner from "@/components/Common/PageBanner";
import SeoSearchIntent from "@/components/Seo/SeoSearchIntent";
import WhySeo from "@/components/Seo/WhySeo";
import { getSeoData } from "@/sanity/fetchedData";
import seo from "@/sanity/schemaTypes/seo";

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
      {/* {seoData.map((item, idx) => (
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
      ))} */}
    </main>
  );
}
