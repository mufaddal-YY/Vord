import BlogCard from "@/components/Blogs/BlogCard";
import Cta from "@/components/Common/Cta";
import PageBanner from "@/components/Common/PageBanner";
import { getBlogData } from "@/sanity/fetchedData";

export const metadata = {
  title: "Blogs | Vord Marketing",
  description: "Insights and strategies for B2B SaaS marketing, growth marketing, LinkedIn optimization, SEO, and content marketing.",
  keywords: ["B2B marketing blog", "SaaS marketing", "growth marketing", "LinkedIn marketing", "SEO"],
};

const BlogPage = async () => {
  const blogData = await getBlogData();
  return (
    <main>
      <PageBanner headline={"Blogs"} subHeadline={""} />
      <article className="py-[50px] container">
        <div className="flex flex-col lg:flex-row flex-wrap">
          {blogData.map((item, idx) => (
            <div className="w-full lg:w-1/3 p-2" key={idx}>
              <BlogCard
                mainImage={item.mainImage}
                title={item.title}
                slug={item.slug}
                excerpt={item.excerpt}
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

export default BlogPage;
