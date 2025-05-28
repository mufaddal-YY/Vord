import Image from "next/image";
import { Button } from "../ui/button";
import PortableTextComponent from "../ui/PortableTextComponent";

const PoweredBySection = ({ homeData }) => {
  return (
    <main className="bg-white bg-dot-black/[0.1]">
       <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <section className="container py-[50px]">
        {homeData.map((item, idx) => (
          <article className="lg:p-6" key={idx}>
            <div className="text-center space-y-2 p-2">
              <h4 className="text-3xl text-primary font-semibold">
                {item.poweredByTitle}
              </h4>
              <h6 className="text-lg font-medium">{item.poweredBySubTitle}</h6>
            </div>
            <div className="flex flex-col items-center lg:flex-row p-2 py-12">
              <div className="w-full flex justify-center lg:w-1/2 ">
                <Image
                  src={item?.poweredByImage}
                  alt={item?.alt}
                  width={500}
                  height={400}
                />
              </div>
              <div className="w-full lg:w-1/2">
                <div className="text-lg lg:text-2xl my-4">
                  <PortableTextComponent content={item?.content} />
                </div>
                <div className="my-6 p-4 lg:p-8 bg-primary rounded-xl">
                  <h4 className="text-white text-xl p-8 lg:border-l-2 border-white">
                    {item?.poweredByBlockContent}
                  </h4>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default PoweredBySection;
