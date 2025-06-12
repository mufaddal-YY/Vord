import React from "react";
import { Separator } from "../ui/separator";
import PortableTextComponent from "../ui/PortableTextComponent";
import Image from "next/image";

const SeoSearchIntent = ({ seoData }) => {
  return (
    <main className="bg-gray-50">
      <section className="container py-[50px]">
        {seoData.map((item, idx) => (
          <article key={idx} className="">
            <div className="w-full p-4 lg:px-12">
              <h4 className="text-3xl text-center lg:text-4xl w-full lg:w-1/2 mx-auto mb-6 text-primary font-bold">
                {item?.searchIntent}
              </h4>
              <div className="w-full text-xl text-center text-gray-600 py-4 lg:w-3/4 mx-auto">
                <PortableTextComponent content={item?.searchContent} />
              </div>
              <div className="rounded-lg flex flex-col lg:flex-row gap-4 p-2">
                {item?.seoSearchIntent?.map((data, idx) => (
                  <div
                    className="flex w-full lg:w-1/3 mx-auto bg-primary p-2 rounded-xl bg-[url('/bg_rounded.png')] bg-cover bg-no-repeat bg-center"
                    key={idx}>
                    <div className="flex flex-col p-6 rounded-xl gap-4">
                      <h4 className="text-left font-bold text-white">
                        {data?.title}
                      </h4>
                      <Separator />
                      <p className="text-left text-white">
                        {data?.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex mx-auto text-center items-center w-full lg:w-2/3 bg-gray-50 m-4 p-2">
                <h4 className="text-md lg:text-xl text-gray-600">
                  {item?.searchIntentFooter}
                </h4>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default SeoSearchIntent;
