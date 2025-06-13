import Cta from "@/components/Common/Cta";
import PageBanner from "@/components/Common/PageBanner";
import ContentType from "@/components/Content_Strategy/ContentType";
import EffectiveStrategy from "@/components/Content_Strategy/EffectiveStrategy";
import StrategyProcess from "@/components/Content_Strategy/StrategyProcess";
import WhyContent from "@/components/Content_Strategy/WhyContent";
import WhyPartner from "@/components/Content_Strategy/WhyPartner";
import { getContentData } from "@/sanity/fetchedData";

export default async function ContentStrategy() {
  const contentData = await getContentData();
  return (
    <main>
      {contentData.map((item, idx) => (
        <div key={idx}>
          <PageBanner headline="Content Strategy & Creation" />
        </div>
      ))}
      <WhyContent contentData={contentData} />
      <EffectiveStrategy contentData={contentData} />
      <StrategyProcess contentData={contentData} />
      <ContentType contentData={contentData} />
      <WhyPartner contentData={contentData} />
      {contentData.map((item, idx) => (
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
