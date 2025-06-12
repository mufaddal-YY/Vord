import Image from "next/image";
import PortableTextComponent from "../ui/PortableTextComponent";

const WhyEmail = ({ emailData }) => {
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
                  src={item?.whyEmailImage}
                  width={500}
                  height={500}
                  alt="Image"
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-4">
              <h4 className="text-3xl lg:text-4xl mb-4 text-primary font-semibold">
                {item?.whyEmail}
              </h4>
              <p className="text-md lg:text-lg mb-4 text-primary font-semibold">
                {item?.emailDescription}
              </p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default WhyEmail;
