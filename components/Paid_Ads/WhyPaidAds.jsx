import Image from "next/image";
import PortableTextComponent from "../ui/PortableTextComponent";

const WhyPaidAds = ({ paidadsData }) => {
  return (
    <main className="bg-primary">
      <section className="container pt-[100px] pb-[50px]">
        {paidadsData.map((item, idx) => (
          <article className="bg-white rounded-[25px] p-6" key={idx}>
            <article
              key={idx}
              className="flex flex-col lg:flex-row justify-between items-center">
              <div className="w-full lg:w-1/2">
                <div className="flex justify-center">
                  <Image
                    src={item?.whyPaidAdsImage}
                    width={500}
                    height={500}
                    alt="Image"
                    className="rounded-xl"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 p-4 order-first lg:order-ast">
                <PortableTextComponent content={item?.whyPaidAds} />
              </div>
            </article>
          </article>
        ))}
      </section>
    </main>
  );
};

export default WhyPaidAds;
