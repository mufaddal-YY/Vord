import BlogDetailSection from "@/components/Blogs/BlogDetailSection";
import Cta from "@/components/Common/Cta";
import PageBanner from "@/components/Common/PageBanner";
import { getBlogData, getBlogDetailData } from "@/sanity/fetchedData";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const blogDetail = await getBlogDetailData(slug);
  const title = blogDetail?.metaTitle || blogDetail?.title || "Blog";
  const description = blogDetail?.metaDescription || blogDetail?.excerpt || "";
  const url = `${process.env.NEXT_PUBLIC_SITE_URL || "https://vord.marketing"}/blogs/${slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title,
      description,
      url,
      images: blogDetail?.mainImage ? [{ url: blogDetail.mainImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: blogDetail?.mainImage ? [blogDetail.mainImage] : undefined,
    },
  };
}


const BlogDetailPage = async ({ params }) => {
  const { slug } = params;
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
