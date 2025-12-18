import Image from "next/image";

const WhatYouGet = ({ consultationData }) => {
  return (
    <main className="bg-white">
      <section className="container py-[50px]">
        {consultationData.map((item, idx) => (
          <article
            key={idx}
            className="flex flex-col lg:flex-row justify-between items-center"
          >
            <div className="w-full lg:w-1/2">
              <div className="flex justify-center">
                <Image
                  src={item?.whatYouGetImage}
                  width={500}
                  height={500}
                  alt={item?.whatYouGetHeadline || "What you get with consultation"}
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-4">
              <h4 className="text-3xl lg:text-4xl mb-4 text-primary font-semibold">
                {item?.whatYouGetHeadline}
              </h4>
              <ul className="text-md lg:text-lg text-gray-700 space-y-4">
                {item?.deliverables?.map((deliverable, i) => (
                  <li key={i}>
                    <strong className="text-primary">
                      {deliverable?.title}:
                    </strong>{" "}
                    {deliverable?.description}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default WhatYouGet;
