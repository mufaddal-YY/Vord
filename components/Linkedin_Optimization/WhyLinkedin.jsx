import Image from "next/image";
import PortableTextComponent from "../ui/PortableTextComponent";

const WhyLinkedin = ({ linkedinData }) => {
  return (
    <main className="bg-gray-100">
      <section className="container py-[50px]">
        {linkedinData.map((item, idx) => (
          <article
            key={idx}
            className="flex flex-col lg:flex-row justify-between items-center">
            <div className="w-full lg:w-1/2 p-4">
              <PortableTextComponent content={item?.content} />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="flex justify-center">
                <Image
                  src={item?.whyImage}
                  width={600}
                  height={600}
                  alt="Image"
                  className="radius-lg"
                />
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default WhyLinkedin;
