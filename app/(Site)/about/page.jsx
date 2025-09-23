import Clientele from "@/components/Common/Clientele";
import Cta from "@/components/Common/Cta";
import PageBanner from "@/components/Common/PageBanner";
import Testimonials from "@/components/Common/Testimonials";
import Statistics from "@/components/Homepage/Statistics";
import { Separator } from "@/components/ui/separator";
import {
  getAboutData,
  getClientele,
  getHomeData,
  getTestimonials,
} from "@/sanity/fetchedData";
import Image from "next/image";

export default async function About() {
  const homeData = await getHomeData();
  const aboutData = await getAboutData();
  const clienteleData = await getClientele();
  const testimonialsData = await getTestimonials();
  return (
    <main>
      <div>
        <PageBanner headline="About us" />
      </div>

      <main className="bg-white">
        <section className="container py-[50px]">
          {aboutData.map((item, idx) => (
            <div className="flex flex-col justify-center items-center z-20" key={idx}>
              <Image
                className="hover:animate-pulse"
                src={item?.missionImage}
                height={100}
                width={100}
                alt={item?.missionHeadline || "Mission image"}
              />

              <h2 className="py-4 text-3xl text-primaruy font-semibold">
                {item?.missionHeadline}
              </h2>

              <div className="text-center w-full lg:w-3/4 mx-auto text-md text-primaruy font-regular">
                <p>{item?.missionStatement}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
      <Separator />
      <main className="bg-gray-50">
        <section className="container py-[50px]">
          {aboutData.map((item, idx) => (
            <div className="flex flex-col justify-center items-center z-20" key={idx}>
              <Image
                className="hover:animate-pulse"
                src={item?.visionImage}
                height={100}
                width={100}
                alt={item?.visionHeadline || "Vision image"}
              />

              <h2 className="py-4 text-3xl text-primaruy font-semibold">
                {item?.visionHeadline}
              </h2>

              <div className="text-center text-md w-full lg:w-3/4 mx-auto text-primaruy font-regular">
                <p>{item?.visionStatement}</p>
              </div>
            </div>
          ))}
        </section>
      </main>

      <section className="container">
        <div className="my-6">
          <Clientele clienteleData={clienteleData} />
        </div>
        <div>
          <Testimonials testimonialsData={testimonialsData} />
        </div>
      </section>

      <Statistics homeData={homeData} />

      {/* {aboutData.map((item, idx) => (
        <div className="py-[50px]" key={idx}>
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
