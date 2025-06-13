import Image from "next/image";
import PortableTextComponent from "../ui/PortableTextComponent";

const AdsManagement = ({ paidadsData }) => {
  return (
    <main className="bg-white">
      {paidadsData.map((item, idx) => (
        <section className="container pt-[30px]">
          {item.adsManagement.map((data, i) => (
            <article className="bg-white rounded-[25px] p-6" key={i}>
              <div className="text-center p-2">
                <h4 className="text-3xl text-primary py-4 font-semibold">
                  {data?.title}
                </h4>
                <p className="text-md w-full lg:w-3/4 py-4 flex mx-auto items-center font-medium">
                  {data?.description}
                </p>
              </div>
              <div className="p-6 bg-primary rounded-xl">
                <h4 className="text-3xl text-white text-center py-6 font-semibold">
                  {data?.processHeadline}
                </h4>
                <div className="flex flex-col gap-2 lg:flex-row">
                  {data.process.map((point, index) => (
                    <div
                      className="w-full lg:w-1/3 py-6 mx-auto bg-gray-50 rounded-lg p-2 lg:p-6"
                      key={index}>
                      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                        <div className="text-center lg:text-left">
                          <PortableTextComponent content={point?.content} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>
      ))}
    </main>
  );
};

export default AdsManagement;
