import { groq } from "next-sanity";
import { client } from "./lib/client";

const defaultFetchOptions = { cache: "no-cache" };

export async function getHomeData() {
  const result = await client.fetch(
    groq`*[_type == "home"]{
         _id,
          _createdAt,
         metaTitle,
         metaDescription,
         metaKeywords,
         headline,
         subHeadline,
         problemHeadline,
         problemSubHeadline,
         problemSlider[]{
          problemTitle,
          "problemImage": problemImage.asset->url,
          alt,
         },
         revenueHeadline,
         revenueSubHeadline,
         revenueEngineMethodology[]{
          title,
          subTitle,
          "icon": icon.asset->url,
          alt,
         },
         revenueEngineProcess[]{
          title,
          subTitle,
           keyDeliverable,
           "icon": icon.asset->url,
           alt,
         },
         servicesHeadline,
         services[]{
           title,
           description,
         },
         resultHeadline,
         results[]{
           resultNumber,
           description,
         },
         insightTitle,
         insights[]{
          insightTitle,
          "insightImage": insightImage.asset->url,
          alt,
         },
         poweredByTitle,
         poweredBySubTitle,
         "poweredByImage": poweredByImage.asset->url,
         alt,
         content,
         poweredByBlockContent,
         whyChooseTitle,
         whyChooseUs[]{
           title,
           description,
           "icon": icon.asset->url,
           alt,
         },
        }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getAboutData() {
  const result = await client.fetch(
    groq`*[_type == "about"]{
         _id,
         _createdAt,
         metaTitle,
         metaDescription,
         metaKeywords,
         headline,
         subHeadline,
         missionHeadline,
         missionStatement,
         "missionImage": missionImage.asset->url,
         visionHeadline,
         visionStatement,
         "visionImage": visionImage.asset->url,
         team[]{
           memberName,
           "image": image.asset->url,
           alt,
         },
         
        }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getLinkedinData() {
  const result = await client.fetch(
    groq`*[_type == "linkedin"]{
         _id,
         _createdAt,
         metaTitle,
         metaDescription,
         metaKeywords,
         headline,
         whyLinkedin,
         "whyImage": whyImage.asset->url,
         content,
         serviceHeadline,
         "serviceImage": serviceImage.asset->url,
         services[]{
         serviceTitle,
         servicedescription,
         "image": image.asset->url,
         alt,
         },
         whyVord,
         whyContent,
         ctaTitle,
         ctaDescription,
         ctaPrimaryButton,
         ctalink,
         ctaSecondaryButton,
         ctaSecondarylink,
         
        }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getSeoData() {
  const result = await client.fetch(
    groq`*[_type == "seo"]{
         _id,
         _createdAt,
         metaTitle,
         metaDescription,
         metaKeywords,
         headline,
         whySeo,
         "whySeoImage": whySeoImage.asset->url,
         content,
         seoApproach[]{
         title,
         description,
         },
         searchIntent,
         searchContent,
         seoSearchIntent[]{
         title,
         description,
         },
         searchIntentFooter,
         serviceHeadline,
         "serviceImage": serviceImage.asset->url,
         services[]{
         serviceTitle,
         servicedescription,
         "image": image.asset->url,
         alt,
         },
         whyVord,
         advantage[]{
         title,
         "image": image.asset->url,
         description,
         },
         ctaTitle,
         ctaDescription,
         ctaPrimaryButton,
         ctalink,
         ctaSecondaryButton,
         ctaSecondarylink,
         
        }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getContentData() {
  const result = await client.fetch(
    groq`*[_type == "contentStrategy"]{
         _id,
         _createdAt,
         metaTitle,
         metaDescription,
         metaKeywords,
         headline,
         description,
         effectiveStrategyHeader,
         effectiveStrategy[]{
         title,
         description,
         },
         contentConverts,
         content,
         contentTypes,
         whyVord[]{
         description,
         },
         ctaTitle,
         ctaDescription,
         ctaPrimaryButton,
         ctalink,
         ctaSecondaryButton,
         ctaSecondarylink,
         
        }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getEmailData() {
  const result = await client.fetch(
    groq`*[_type == "emailMarketing"]{
         _id,
         _createdAt,
         metaTitle,
         metaDescription,
         metaKeywords,
         headline,
         description,
          "headImage": headImage.asset->url,
         whyEmail,
         emailDescription,
        "whyEmailImage": whyEmailImage.asset->url,
         approach[]{
         title,
         description,
          "image": image.asset->url,
         },
         "campaignImage": campaignImage.asset->url,
         campaignTypes,
         whyVord[]{
          title,
          description,
          "image": image.asset->url,
         },
         ctaTitle,
         ctaDescription,
         ctaPrimaryButton,
         ctalink,
         ctaSecondaryButton,
         ctaSecondarylink,
         
        }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getPaidAds() {
  const result = await client.fetch(
    groq`*[_type == "paidads"]{
         _id,
         _createdAt,
         metaTitle,
         metaDescription,
         metaKeywords,
         headline,
         description,
         whyPaidAds,
         adsManagement[]{
           title,
           description,
           processHeadline,
           process[]{
             content,
           },
           capabilities,
         },
         advantage[]{
           title,
           description,
         },
         ctaTitle,
         ctaDescription,
         ctaPrimaryButton,
         ctalink,
         ctaSecondaryButton,
         ctaSecondarylink,
        }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getClientele() {
  const result = await client.fetch(
    groq`*[_type == "clientele"]{
         _id,
         _createdAt,
         clientName,
         "image": image.asset->url,
         alt,
        }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getTestimonials() {
  const result = await client.fetch(
    groq`*[_type == "testimonials"]{
         _id,
         _createdAt,
         clientName,
         clientPosition,
         review,
        }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getFaqData() {
  const result = await client.fetch(
    groq`*[_type == "faqs"]{
         _id,
         _createdAt,
         faqQuestion,
         answer,
        }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getBlogData() {
  const result = await client.fetch(
    groq`*[_type == "blog"] | order(publishedAt desc){
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      publishedAt,
      metaTitle,
      metaDescription,
      metaKeywords,
      excerpt,
      "mainImage": mainImage.asset->url,
      author,
    }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getBlogDetailData(slug) {
  const result = await client.fetch(
    groq`*[_type == "blogs" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      publishedAt,
      metaTitle,
      metaDescription,
      metaKeywords,
      excerpt,
      "mainImage": mainImage.asset->url,
      author,
      content[]{
        _type == "image" => {
          "asset": asset->url
        }
      }
    }`,
    {},
    { slug, defaultFetchOptions }
  );
  return result;
}
