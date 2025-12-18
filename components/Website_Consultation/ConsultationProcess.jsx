import Image from "next/image";
import { Separator } from "../ui/separator";
import { IoArrowDown } from "react-icons/io5";

const ConsultationProcess = ({ consultationData }) => {
  return (
    <main className="bg-primary">
      <section className="container py-[50px]">
        {consultationData.map((item, idx) => (
          <article className="flex flex-col gap-4" key={idx}>
            <div className="w-full p-4">
              <h4 className="text-3xl lg:text-4xl text-white text-center font-semibold">
                {item?.processHeadline}
              </h4>
              {item?.processDescription && (
                <p className="text-white/80 text-center mt-4 max-w-2xl mx-auto">
                  {item?.processDescription}
                </p>
              )}
            </div>
            <div className="w-full lg:w-1/2 mx-auto">
              <div className="flex flex-col items-center lg:gap-2">
                {item?.processSteps?.map((data, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center relative w-full my-1"
                  >
                    {/* Card */}
                    <div className="mt-4 p-4 w-full bg-white rounded-lg flex flex-col lg:flex-row">
                      {/* Image Section */}
                      <div className="w-full lg:w-1/4 flex justify-center">
                        <div className="w-full lg:w-[150px] h-[150px] relative rounded-lg bg-primary p-2">
                          <Image
                            src={data?.image}
                            alt={data?.title || "Process step image"}
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
                        <p className="text-md lg:text-lg">{data?.description}</p>
                      </div>
                    </div>

                    {/* Down Arrow - only show if not the last item */}
                    {i < item?.processSteps?.length - 1 && (
                      <div className="flex justify-center mt-8">
                        <IoArrowDown className="text-[#00EAB4] text-3xl animate-bounce" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {item?.processDeliverable && (
                <div className="bg-white/10 rounded-lg p-6 mt-6 text-center">
                  <p className="text-white/90 text-lg">
                    {item?.processDeliverable}
                  </p>
                </div>
              )}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default ConsultationProcess;
