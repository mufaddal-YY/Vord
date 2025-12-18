import { Separator } from "../ui/separator";

const VordFramework = ({ consultationData }) => {
  return (
    <main className="bg-white">
      <section className="container pb-[50px]">
        {consultationData.map((item, idx) => (
          <article className="rounded-[25px] lg:p-6" key={idx}>
            <div className="text-center space-y-2 py-3">
              <h4 className="text-3xl text-primary font-semibold">
                {item?.frameworkHeadline}
              </h4>
            </div>
            <Separator />
            <div className="py-3">
              <div className="py-6">
                <div className="flex flex-col lg:flex-row lg:gap-8">
                  {item?.frameworkSteps?.map((data, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center relative w-full max-w-[400px]"
                    >
                      {/* Card */}
                      <div className="mt-4 p-4 w-full  bg-white border border-primary hover:border-[#00EAB4] rounded-lg shadow-[0px_0px_10px_1px_#edf2f7] text-center lg:text-left flex flex-col justify-between transition-colors duration-300">
                        <div>
                          <div className="w-[40px] h-[40px] rounded-md bg-primary text-white p-2 flex items-center justify-center mx-auto lg:mx-0 mb-2 font-bold">
                            {data?.step}
                          </div>
                          <h4 className="text-md text-primary font-medium pb-2">
                            {data?.title}
                          </h4>
                          <Separator />
                          <p className="text-sm py-4 text-gray-600">
                            {data?.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {item?.frameworkDescription && (
                <p className="text-gray-600 max-w-2xl mx-auto text-center mt-4">
                  {item?.frameworkDescription}
                </p>
              )}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default VordFramework;
