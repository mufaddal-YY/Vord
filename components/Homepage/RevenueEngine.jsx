import ProblemSlider from "./ProblemSlider";
import Image from "next/image";

const RevenueEngine = ({ homeData }) => {
  return (
    <main className="bg-primary">
      <section className="container pt-[100px] pb-[50px]">
        {homeData.map((item, idx) => (
          <article className="bg-white rounded-[25px] p-6" key={idx}>
            <div className="border-b-2 text-center space-y-2 p-2">
              <h4 className="text-3xl w-full lg:w-3/4 mx-auto lg:text-4xl text-primary font-semibold">
                {item.problemSubHeadline}
              </h4>
              <p className="text-md w-full lg:w-3/4 mx-auto text-gray-700 leading-relaxed pt-4">
                Many B2B SaaS and technology companies struggle to generate consistent
                revenue despite investing in multiple marketing channels. Here are some common challenges
                we solve through LinkedIn marketing, B2B SEO, and content strategy:
              </p>
              {/* <h6 className="text-lg font-medium">{item.problemSubHeadline}</h6> */}
            </div>
            <div className="py-6">
              <div className="items-center">
                <ProblemSlider sliderData={item} />
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="container pb-[100px] pt-[50px]">
        {homeData.map((item, idx) => (
          <article className="bg-white rounded-[25px] p-6" key={idx}>
            <div className="border-b-2 text-center space-y-2 p-2">
              <h4 className="text-3xl text-primary font-semibold">
                {item.revenueHeadline}
              </h4>
              <h6 className="text-lg w-full lg:w-3/4 flex mx-auto items-center font-medium">
                {item.revenueSubHeadline}
              </h6>
              
            </div>
            <div className="p-3">
              {item.revenueEngineMethodology.map((data, i) => (
                <div
                  className="w-full lg:w-3/4 my-4 mx-auto bg-gray-50 rounded-lg p-4"
                  key={i}>
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                    {/* Icon box */}
                    <div className="w-[50px] h-[50px] rounded-md bg-primary p-2 flex items-center justify-center shrink-0">
                      <Image
                        src={data.icon}
                        width={30}
                        height={30}
                        alt={data.alt}
                      />
                    </div>

                    {/* Text box */}
                    <div className="text-center lg:text-left">
                      <h6 className="text-lg font-medium">{data.title}</h6>
                      <p className="text-gray-600">{data.subTitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default RevenueEngine;
