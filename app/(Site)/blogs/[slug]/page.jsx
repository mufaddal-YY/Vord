import BlogDetailSection from "@/components/Blogs/BlogDetailSection";
import Cta from "@/components/Common/Cta";
import PageBanner from "@/components/Common/PageBanner";
import { getBlogData, getBlogDetailData } from "@/sanity/fetchedData";

export const metadata = {
  title: "",
  description: "",
};

const BlogDetailPage = async ({ params }) => {
  const { slug } = await params; // Await params here
  const blogDetail = await getBlogDetailData(slug);
  const blogData = await getBlogData();

  return (
    <main>
      <PageBanner
        headline={blogDetail?.title}
        subHeadline={blogDetail?.excerpt}
      />
      <BlogDetailSection blogData={blogData} blogDetail={blogDetail} />
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

export default BlogDetailPage;
