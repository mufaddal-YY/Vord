import Image from "next/image";
import PortableTextComponent from "../ui/PortableTextComponent";
import { Separator } from "../ui/separator";

const WhySeo = ({ seoData }) => {
  return (
    <main className="bg-white">
      <section className="container py-[50px]">
        {seoData.map((item, idx) => (
          <article
            key={idx}
            className="flex flex-col lg:flex-row justify-between bg-primary rounded-xl">
            <div className="w-full lg:w-1/2 p-4 lg:p-12">
              <h4 className="text-3xl lg:text-4xl mb-6 text-white font-bold">
                {item?.whySeo}
              </h4>
              <Separator className="my-4" />
              <div className="w-full py-4 [&_p]:!text-white [&_h1]:!text-white [&_h2]:!text-white [&_h3]:!text-white [&_h4]:!text-white [&_h5]:!text-white [&_h6]:!text-white [&_li]:!text-white [&_span]:!text-white">
                <PortableTextComponent content={item?.content} />
              </div>
              <div className="relative w-full h-[300px] overflow-hidden rounded-lg py-2">
                <Image
                  src={item?.whySeoImage}
                  alt={item?.headline || "Why SEO image"}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center-top"
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
              {item?.seoApproach?.map((item, idx) => (
                <div className="flex p-2" key={idx}>
                  <div className="flex flex-col bg-white p-6 rounded-xl gap-4">
                    <h4 className="text-left font-bold text-gray700">
                      {item?.title}
                    </h4>
                    <Separator />
                    <p className="text-left text-primary">
                      {item?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default WhySeo;
