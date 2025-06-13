import Image from "next/image";
import React from "react";

const StrategyProcess = ({ contentData }) => {
  return (
    <main>
      <section className="py-[50px] container">
        {contentData.map((item, idx) => (
          <article className="flex flex-col lg:flex-row gap-4" key={idx}>
            <div className="w-full lg:w-5/12 p-2" id="enquiry">
              <div className="sticky-enquiry-form p-6 rounded-xl shadow-[0px_0px_10px_1px_#edf2f7] relative overflow-hidden flex flex-col">
                {/* Headline */}
                <h4 className="relative z-10 text-3xl lg:text-4xl text-primary text-center lg:text-left font-semibold">
                  {item?.contentConverts}
                </h4>

                {/* Image at Bottom */}
                <div className="relative z-10 py-3 mt-auto">
                  <Image
                    src={item?.contentConvertsImage}
                    width={600}
                    height={600}
                    alt="Image"
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-7/12 " id="enquiry">
              <p className="text-lg">{item?.contentDescription}</p>
              <div className="flex flex-col items-center lg:gap-2">
                {item.strategyProcess.map((data, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center relative w-full">
                    {/* Card */}
                    <div className="mt-4 p-6 w-full bg-white hover:bg-[#032E3A] text-primary hover:text-white rounded-lg shadow-[0px_0px_10px_1px_#edf2f7] text-center lg:text-left flex flex-col justify-between">
                      <div>
                        <div className="w-[40px] h-[40px] rounded-lg bg-primary p-2 flex items-center justify-center mx-auto lg:mx-0 mb-2">
                          <Image
                            src={data?.image}
                            width={30}
                            height={30}
                            alt={"Service Image"}
                          />
                        </div>
                        <h4 className="text-lg font-semibold pb-2 border-b border-gray-200">
                          {data?.title}
                        </h4>
                        <p className="text-md pt-4 ">{data?.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default StrategyProcess;
