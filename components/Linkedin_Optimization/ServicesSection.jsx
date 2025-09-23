import { cn } from "@/lib/utils";
import Image from "next/image";

const ServicesSection = ({ linkedinData }) => {
  return (
    <main>
      <section className="py-[50px] container">
        {linkedinData.map((item, idx) => (
          <article className="flex flex-col lg:flex-row gap-4" key={idx}>
            <div className="w-full lg:w-5/12 p-4 " id="enquiry">
              <div className="sticky-enquiry-form p-6 rounded-xl bg-primary shadow-[0px_0px_10px_1px_#edf2f7] relative overflow-hidden flex flex-col">
                {/* Grid Background */}
                <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,theme(colors.gray.50)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.gray.100)_1px,transparent_1px)] bg-[size:30px_30px] opacity-10 pointer-events-none"></div>

                {/* Headline */}
                <h4 className="relative z-10 text-3xl lg:text-4xl text-white text-center lg:text-left font-semibold">
                  {item?.serviceHeadline}
                </h4>

                {/* Image at Bottom */}
                <div className="relative z-10 py-12 mt-auto">
                  <Image
                    src={item?.serviceImage}
                    width={600}
                    height={600}
                    alt={item?.serviceHeadline || "LinkedIn service image"}
                    className="radius-lg"
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-7/12 " id="enquiry">
              <div className="flex flex-col items-center lg:gap-2">
                {item.services.map((data, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center relative w-full">
                    {/* Card */}
                    <div className="mt-4 p-6 w-full bg-white hover:bg-[#032E3A] hover:text-white rounded-lg shadow-[0px_0px_10px_1px_#edf2f7] text-center lg:text-left flex flex-col justify-between">
                      <div>
                        <div className="w-[40px] h-[40px] rounded-lg bg-primary p-2 flex items-center justify-center mx-auto lg:mx-0 mb-2">
                          <Image
                            src={data?.image}
                            width={30}
                            height={30}
                            alt={data?.serviceTitle || "Service icon"}
                          />
                        </div>
                        <h4 className="text-lg font-semibold pb-2 border-b border-gray-200">
                          {data?.serviceTitle}
                        </h4>
                        <p className="text-md pt-4 ">
                          {data?.servicedescription}
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

export default ServicesSection;
