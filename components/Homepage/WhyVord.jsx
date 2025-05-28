import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const WhyVord = ({ homeData }) => {
  return (
    <main className="bg-white bg-dot-black/[0.1]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <section className="container pb-[50px]">
        {homeData.map((item, idx) => (
          <article className="rounded-[25px] lg:p-6" key={idx}>
            <div className="border-b-2 text-center space-y-2 p-2">
              <h4 className="text-3xl text-primary font-semibold">
                {item?.whyChooseTitle}
              </h4>
            </div>
            <div className="py-6">
              <div className="items-center">
                <div className="py-6">
                  <div className="flex flex-col items-center lg:flex-row lg:gap-8">
                    {item.whyChooseUs.map((data, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center relative w-full max-w-[400px]">
                        {/* Card */}
                        <div className="mt-4 p-4 w-full bg-white rounded-lg shadow-[0px_0px_10px_1px_#edf2f7] text-center lg:text-left flex flex-col justify-between">
                          <div>
                            <div className="w-[40px] h-[40px] rounded-md bg-primary p-2 flex items-center justify-center mx-auto lg:mx-0 mb-2">
                              <Image
                                src={data.icon}
                                width={30}
                                height={30}
                                alt={data.alt}
                              />
                            </div>
                            <h4 className="text-md font-medium pb-2 border-b border-primary">
                              {data.title}
                            </h4>
                            <p className="text-sm py-4 text-gray-700">
                              {data.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4 flex justify-center">
              <Button>Discover Our Approach</Button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default WhyVord;
