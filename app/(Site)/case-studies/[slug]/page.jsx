import CaseDetailSection from "@/components/CaseStudies/CaseDetailSection";
import Cta from "@/components/Common/Cta";
import PageBanner from "@/components/Common/PageBanner";
import { getCaseStudiesData, getCaseStudiesDetailData } from "@/sanity/fetchedData";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const caseDetail = await getCaseStudiesDetailData(slug);
  const title = caseDetail?.metaTitle || caseDetail?.title || "Case Study";
  const description = caseDetail?.metaDescription || caseDetail?.excerpt || "";
  const url = `${process.env.NEXT_PUBLIC_SITE_URL || "https://vord.marketing"}/case-studies/${slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title,
      description,
      url,
      images: caseDetail?.mainImage ? [{ url: caseDetail.mainImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: caseDetail?.mainImage ? [caseDetail.mainImage] : undefined,
    },
  };
}

export const metadata = {};

const CaseStudiesDetailPage = async ({ params }) => {
  const { slug } = params;
  const caseDetail = await getCaseStudiesDetailData(slug);
  const caseData = await getCaseStudiesData();

  return (
    <main>
      <PageBanner
        headline={caseDetail?.title}
        subHeadline={caseDetail?.excerpt}
      />
      <CaseDetailSection caseData={caseData} caseDetail={caseDetail} />
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

export default CaseStudiesDetailPage;
