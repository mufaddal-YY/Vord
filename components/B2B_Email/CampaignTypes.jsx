import Image from "next/image";
import PortableTextComponent from "../ui/PortableTextComponent";

const CampaignTypes = ({ emailData }) => {
  return (
    <main className="bg-white">
      <section className="container py-[50px]">
        {emailData.map((item, idx) => (
          <article
            key={idx}
            className="flex flex-col lg:flex-row justify-between items-center">
            <div className="w-full lg:w-1/2">
              <div className="flex justify-center">
                <Image
                  src={item?.campaignImage}
                  width={500}
                  height={500}
                  alt="Image"
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-4 order-1">
              <PortableTextComponent content={item?.campaignTypes} />
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default CampaignTypes;
