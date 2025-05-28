"use client";
import { FaCircleDot } from "react-icons/fa6";
import { Separator } from "../ui/separator";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { Button } from "../ui/button";

const CustomRevenueEngine = ({ homeData }) => {
  return (
    <main className="bg-white">
      <section className="container py-[50px]">
        {homeData.map((item, idx) => (
          <article className="bg-white rounded-[25px] lg:p-6" key={idx}>
            <div className="border-b-2 text-center space-y-2 p-2">
              <h4 className="text-3xl text-primary font-semibold">
                Building Your Custom Revenue Engine
              </h4>
              
            </div>
            <div className="py-6">
              <div className="items-center">
                <div className="py-6">
                  <div className="flex flex-col items-center lg:flex-row lg:gap-8">
                    {item.revenueEngineProcess.map((data, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center relative w-full max-w-[400px]">
                        {/* Dot & Connectors */}
                        <div className="relative lg:flex items-center justify-center w-full h-6 hidden">
                          {/* Left line (only if not first item) */}
                          {i > 0 && (
                            <div className="hidden lg:block absolute left-0 top-1/2 w-1/2 h-0.5 bg-primary" />
                          )}

                          {/* Dot */}
                          <div className="w-3 h-3 rounded-full bg-primary hidden lg:block z-10" />

                          {/* Right line + Arrow (only if not last item) */}
                          {i < item.revenueEngineProcess.length - 1 && (
                            <>
                              <div className=" absolute right-0 top-1/2 w-1/2 h-0.5 bg-primary" />
                              <IoIosArrowForward className="hidden lg:block absolute top-1/2 left-full transform -translate-y-1/2 translate-x-2 text-primary text-xl" />
                            </>
                          )}
                        </div>

                        {/* Card */}
                        <div className="mt-4 p-3 h-[250px] w-full bg-white rounded-lg shadow-[0px_0px_10px_1px_#edf2f7] text-center lg:text-left flex flex-col justify-between">
                          <div>
                            <div className="w-[40px] h-[40px] rounded-md bg-primary p-2 flex items-center justify-center mx-auto lg:mx-0 mb-2">
                              {/* <Image src={data.icon} width={30} height={30} alt={data.alt} /> */}
                            </div>
                            <h4 className="text-md font-medium pb-2 border-b border-primary">
                              {data.title}
                            </h4>
                            <p className="text-sm pt-2 text-gray-700">
                              {data.subTitle}
                            </p>
                          </div>
                          <div className="bg-primary rounded-md p-2 mt-4">
                            <p className="text-white text-xs text-center lg:text-left">
                              {data.keyDeliverable}
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
              <Button>Schedule Your Revenue Strategy Session</Button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default CustomRevenueEngine;
