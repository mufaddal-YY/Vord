import Image from "next/image";
import PortableTextComponent from "../ui/PortableTextComponent";

const PrecisionSection = ({ emailData }) => {
  return (
    <main className="bg-gray-50">
      <section className="container py-[50px]">
        {emailData.map((item, idx) => (
          <article
            key={idx}
            className="flex flex-col lg:flex-row justify-between items-center">
            <div className="w-full lg:w-1/2 p-4">
              <h4 className="text-3xl lg:text-4xl mb-4 text-primary font-semibold">
                {item?.headline}
              </h4>
              <p className="text-md lg:text-lg mb-4 text-primary font-semibold">
                {item?.description}
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="flex justify-center">
                <Image
                  src={item?.headImage}
                  width={500}
                  height={500}
                alt={item?.headline || "Email precision image"}
                  className="rounded-xl"
                />
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default PrecisionSection;
