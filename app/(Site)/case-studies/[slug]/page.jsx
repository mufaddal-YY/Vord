import CaseDetailSection from "@/components/CaseStudies/CaseDetailSection";
import Cta from "@/components/Common/Cta";
import PageBanner from "@/components/Common/PageBanner";
import { getCaseStudiesData, getCaseStudiesDetailData } from "@/sanity/fetchedData";

export const metadata = {
  title: "",
  description: "",
};

const CaseStudiesDetailPage = async ({ params }) => {
  const { slug } = await params; // Await params here
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
