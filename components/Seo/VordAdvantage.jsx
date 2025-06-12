import { Button } from "../ui/button";
import Image from "next/image";
import { Separator } from "../ui/separator";

const VordAdvantage = ({ seoData }) => {
  return (
    <main className="bg-white bg-dot-black/[0.1]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <section className="container pb-[50px]">
        {seoData.map((item, idx) => (
          <article className="rounded-[25px] lg:p-6" key={idx}>
            <div className="border-b-2 text-center space-y-2 p-2">
              <h4 className="text-3xl text-primary font-semibold">
                {item?.whyVord}
              </h4>
            </div>
            <div className="py-6">
              <div className="">
                <div className="py-6">
                  <div className="flex flex-col  lg:flex-row lg:gap-8">
                    {item.advantage.map((data, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center relative w-full max-w-[400px]">
                        {/* Card */}
                        <div className="mt-4 p-4 w-full h-[300px] bg-primary rounded-lg bg-[url('/bg_rounded.png')] bg-cover bg-no-repeat bg-center shadow-[0px_0px_10px_1px_#edf2f7] text-center lg:text-left flex flex-col justify-between">
                          <div>
                            <div className="w-[40px] h-[40px] rounded-md bg-white p-2 flex items-center justify-center mx-auto lg:mx-0 mb-2">
                              <Image
                                src={data.icon}
                                width={30}
                                height={30}
                                alt={data.alt}
                              />
                            </div>
                            <h4 className="text-md text-white font-medium pb-2">
                              {data.title}
                            </h4>
                            <Separator />
                            <p className="text-sm py-4 text-white">
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
          </article>
        ))}
      </section>
    </main>
  );
};

export default VordAdvantage;
