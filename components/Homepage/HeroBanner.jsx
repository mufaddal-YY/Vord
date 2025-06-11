import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import Clientele from "../Common/Clientele";
import Testimonials from "../Common/Testimonials";

const HeroBanner = ({ homeData, clienteleData, testimonialsData }) => {
  return (
    <main className="w-full bg-white relative items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <section className="container mx-auto py-[80px]">
        <div className="flex justify-center relative z-10">
          {homeData?.map((item, i) => (
            <div
              className="w-full md:max-w-5xl lg:max-w-5xl flex flex-col items-center justify-center"
              key={i}>
              <h2 className="font-display text-primary text-center text-4xl font-bold tracking-[-0.01em] drop-shadow-sm md:text-5xl lg:text-5xl leading-snug lg:leading-[4rem]">
                {item?.headline}
              </h2>

              <p className="lg:w-3/4 text-center leading-snug my-6 text-gray-700 text-md md:text-lg lg:text-xl">
                {item?.subHeadline}
              </p>

              <div className="flex flex-col justify-center items-center gap-2 md:flex-row lg:flex-row mt-6">
                <Link target="_blank" href="">
                  <Button className="">Get Your Revenue Strategy →</Button>
                </Link>
                <Link target="_blank" href="">
                  <Button variant="outline" className="">
                    See Our Results
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="my-6">
          <Clientele clienteleData={clienteleData} />
        </div>
        <div>
          <Testimonials testimonialsData={testimonialsData} />
        </div>
      </section>
    </main>
  );
};

export default HeroBanner;
