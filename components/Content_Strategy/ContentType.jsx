import Image from "next/image";
import PortableTextComponent from "../ui/PortableTextComponent";

const ContentType = ({ contentData }) => {
  return (
    <main className="bg-gray-50">
      <section className="container py-[50px]">
        {contentData.map((item, idx) => (
          <article
            key={idx}
            className="flex flex-col lg:flex-row justify-between items-center">
            <div className="w-full lg:w-1/2">
              <div className="flex justify-center">
                <Image
                  src={item?.contentTypeImage}
                  width={500}
                  height={500}
                alt={item?.contentTypes || "Content types image"}
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-4 order-last lg:order-first">
              <PortableTextComponent content={item?.contentTypes} />
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default ContentType;
