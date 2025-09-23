import Image from "next/image";

const WhyContent = ({ contentData }) => {
  return (
    <main className="bg-white">
      <section className="container py-[50px]">
        {contentData.map((item, idx) => (
          <article
            key={idx}
            className="flex flex-col lg:flex-row justify-between items-center">
            <div className="w-full lg:w-1/2">
              <div className="flex justify-center">
                <Image
                  src={item?.whyImage}
                  width={500}
                  height={500}
                alt={item?.headline || "Why content image"}
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-4">
              <h4 className="text-3xl lg:text-4xl mb-4 text-primary font-semibold">
                {item?.headline}
              </h4>
              <p className="text-md lg:text-lg mb-4 text-primary font-semibold">
                {item?.description}
              </p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default WhyContent;
