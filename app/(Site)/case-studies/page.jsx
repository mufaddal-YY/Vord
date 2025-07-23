import CaseCard from "@/components/CaseStudies/CaseCard";
import Cta from "@/components/Common/Cta";
import PageBanner from "@/components/Common/PageBanner";
import { getCaseStudiesData } from "@/sanity/fetchedData";

const CaseStudies = async () => {
  const caseData = await getCaseStudiesData();
  return (
    <main>
      <PageBanner headline="Case Studies" />

      <article className="py-[50px] container">
        <div className="flex flex-col lg:flex-row flex-wrap">
          {caseData.map((item, idx) => (
            <div className="w-full lg:w-1/2 p-2" key={idx}>
              <CaseCard
                mainImage={item?.mainImage}
                title={item?.title}
                slug={item?.slug}
                excerpt={item?.excerpt}
              />
            </div>
          ))}
        </div>
      </article>
      <Cta
        ctaTitle={"Ready to Transform Your Marketing Into a Revenue Engine?"}
        ctaDescription={
          "Discover how our integrated approach can deliver predictable growth in engagement, authority, and revenue for your business."
        }
        ctaPrimaryButton={"Explore Our Services"}
      />
    </main>
  );
};

export default CaseStudies;
