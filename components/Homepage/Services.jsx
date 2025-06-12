import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const Services = ({ homeData }) => {
  return (
    <main className="bg-gray-50">
      <section className="container py-[50px]">
        {homeData.map((item, idx) => (
          <article className="lg:p-6" key={idx}>
            <div className="text-center space-y-2 p-2">
              <h4 className="w-full lg:w-3/4 flex mx-auto text-3xl text-primary font-semibold">
                {item.servicesHeadline}
              </h4>
            </div>
            <div className="py-6">
              <div className="container mx-auto px-4">
                <div className="flex flex-col items-center lg:items-start">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {item.services.map((data, i) => (
                      <div
                        key={i}
                        className="p-6 bg-white hover:bg-[#032E3A] text-primary hover:text-white border border-white hover:border-primary rounded-lg shadow-[0px_0px_10px_1px_#edf2f7] text-center lg:text-left flex flex-col justify-between h-full bg-[url('/bg_rounded.png')] bg-cover bg-no-repeat bg-center">
                        <div>
                          <h4 className="text-lg font-semibold pb-2">
                            {data.title}
                          </h4>
                          <Separator />
                          <p className="text-md pt-2">{data.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4 flex justify-center">
              <Button>Explore Our Services</Button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Services;
