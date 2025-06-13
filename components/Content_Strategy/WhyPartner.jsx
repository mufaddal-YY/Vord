import React from "react";
import { Separator } from "../ui/separator";

const WhyPartner = ({ contentData }) => {
  return (
    <main className="bg-primary">
      <section className="container py-[50px]">
        {contentData.map((item, idx) => (
          <article className="lg:p-6" key={idx}>
            <div className="text-center space-y-2 p-2">
              <h4 className="w-full text-4xl text-white font-semibold">
                Why Partner with Vord
              </h4>
            </div>
            <div className="py-2">
              <div className="flex flex-col items-center lg:items-start">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                  {item.whyVord.map((data, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center relative w-full my-4">
                      {/* Card */}
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

export default WhyPartner;
