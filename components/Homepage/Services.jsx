import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import EnquiryForm from "../Common/EnquiryForm";

const Services = ({ homeData }) => {
  return (
    <main className="bg-gray-50" id="services">
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
                <div className="flex flex-col">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {item.services.map((data, i) => (
                      <div
                        key={i}
                        className="p-1 bg-white hover:bg-[#032E3A] text-primary hover:text-white border border-white hover:border-primary rounded-lg shadow-[0px_0px_10px_1px_#edf2f7] text-center lg:text-left flex flex-col h-full bg-[url('/bg_rounded.png')] bg-cover bg-no-repeat bg-center">
                        <div className="relative w-full h-[200px] lg:h-[200px] overflow-hidden rounded-md">
                          {/* Image */}
                          <Image
                            src={data?.image}
                            alt={data?.alt}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center center"
                            className="rounded-t-md"
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="text-lg font-semibold pb-2">
                            {data?.title}
                          </h4>
                          <Separator />
                          <p className="text-md pt-2">{data?.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4 flex justify-center">
              <Dialog>
                <DialogTrigger>
                  <Button>Explore Our Services</Button>
                </DialogTrigger>
                <DialogContent className="max-h-[600px] overflow-y-scroll">
                  {/* <DialogTitle></DialogTitle> */}
                  <EnquiryForm />
                </DialogContent>
              </Dialog>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Services;
