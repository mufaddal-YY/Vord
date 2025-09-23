import { getBlogData, getCaseStudiesData } from "@/sanity/fetchedData";

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vord.marketing";

  const staticRoutes = ["", "/about", "/contact", "/blogs", "/case-studies"].map(
    (route) => ({ url: `${baseUrl}${route}`, lastModified: new Date() })
  );

  const [blogs, cases] = await Promise.all([
    getBlogData(),
    getCaseStudiesData(),
  ]);

  const blogRoutes = (blogs || []).map((b) => ({
    url: `${baseUrl}/blogs/${b.slug}`,
    lastModified: b._createdAt ? new Date(b._createdAt) : new Date(),
  }));

  const caseRoutes = (cases || []).map((c) => ({
    url: `${baseUrl}/case-studies/${c.slug}`,
    lastModified: c._createdAt ? new Date(c._createdAt) : new Date(),
  }));

  return [...staticRoutes, ...blogRoutes, ...caseRoutes];
}


