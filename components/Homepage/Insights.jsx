import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const Insights = ({ homeData, blogData }) => {
  return (
    <main className="bg-gray-50">
      <section className="container py-[50px]">
        <article className="lg:p-6">
          <div className="text-center space-y-2 p-2">
            {homeData.map((item, idx) => (
              <h4 className="text-3xl text-primary font-semibold" key={idx}>
                {item.insightTitle}
              </h4>
            ))}
          </div>
          <div className="py-6">
            <div className="container mx-auto px-4">
              <div className="flex flex-col items-center lg:items-start">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                  {blogData.map((data, i) => (
                    <div
                      key={i}
                      className="p-1 bg-white rounded-xl shadow-[0px_0px_10px_1px_#edf2f7] text-center lg:text-left flex flex-col justify-between h-full">
                      <div className="relative w-full h-[250px] overflow-hidden rounded-t-xl">
                        <Link href={`/blogs/${data?.slug}`}>
                          <Image
                            src={data?.mainImage}
                            alt={data?.title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-t-lg"
                          />
                        </Link>
                      </div>
                      <div className="p-2">
                        <Link href={`/blogs/${data?.slug}`}>
                          <h4 className="text-md font-medium pb-2">
                            {data?.title}
                          </h4>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="py-4 flex justify-center">
            <Link href={"/#services"}>
              <Button>Explore Our Services</Button>
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Insights;
