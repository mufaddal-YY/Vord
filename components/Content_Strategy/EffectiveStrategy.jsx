import React from "react";
import { Separator } from "../ui/separator";
import Image from "next/image";
import PortableTextComponent from "../ui/PortableTextComponent";

const EffectiveStrategy = ({ contentData }) => {
  return (
    <main className="bg-primary">
      <section className="container py-[50px]">
        {contentData.map((item, idx) => (
          <article className="lg:p-6" key={idx}>
            <div className="text-center text-white space-y-2 p-2">
              <PortableTextComponent content={item?.effectiveStrategyHeader} />
            </div>
            <div className="py-2">
              <div className="flex flex-col items-center lg:items-start">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                  {item.effectiveStrategy.map((data, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center relative w-full my-4">
                      {/* Card */}
                      <div className="mt-4 w-full flex flex-row">
                        {/* Image Section */}
                        <div className="w-full flex items-center gap-2">
                          <div className="rounded-lg p-2">
                            <Image
                              src={data?.image}
                              alt="Image"
                              width={30}
                              height={30}
                              className="object-cover rounded-lg"
                            />
                          </div>
                          <h4 className="text-lg lg:text-xl font-bold text-white">
                            {data?.title}
                          </h4>
                        </div>
                      </div>
                      <Separator className="my-2" />
                      <p className="text-md lg:text-lg text-white">
                        {data?.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default EffectiveStrategy;
