import Image from "next/image";
import React from "react";
import { Separator } from "../ui/separator";

const OurApproach = ({ emailData }) => {
  return (
    <main className="bg-primary">
      <section className="container py-[50px]">
        {emailData.map((item, idx) => (
          <article className="flex flex-col gap-4" key={idx}>
            <div className="w-full p-4">
              <h4 className="text-3xl lg:text-4xl text-white text-center font-semibold">
                Our Approach
              </h4>
            </div>
            <div className="w-full lg:w-3/4 mx-auto " id="enquiry">
              <div className="flex flex-col items-center lg:gap-2">
                {item.approach.map((data, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center relative w-full my-4">
                    {/* Card */}
                    <div className="mt-4 p-4 w-full bg-white rounded-lg flex flex-col lg:flex-row">
                      {/* Image Section */}
                      <div className="w-full lg:w-1/4 flex justify-center">
                        <div className="w-full lg:w-[200px] h-[200px] relative rounded-lg bg-primary p-2">
                          <Image
                            src={data?.image}
                            alt="Image"
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                      </div>

                      {/* Text Section */}
                      <div className="w-full p-4 text-center lg:text-left">
                        <h4 className="text-xl lg:text-xl font-bold">
                          {data?.title}
                        </h4>
                        <Separator className="my-2" />
                        <p className="text-md lg:text-lg ">
                          {data?.description}
                        </p>
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

export default OurApproach;
