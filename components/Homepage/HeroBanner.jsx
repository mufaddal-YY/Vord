import { Button } from "../ui/button";
import Image from "next/image";
import { TextGenerateEffect } from "../ui/textGenerateEffect";
import Link from "next/link";
import Clientele from "../Common/Clientele";
import Testimonials from "../Common/Testimonials";

const HeroBanner = ({ clienteleData, testimonialsData }) => {
  return (
    <main className="w-full bg-white bg-dot-black/[0.1] relative items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <section className="container mx-auto py-[60px]">
        <div className="flex justify-center relative z-10">
          <div className="w-full md:max-w-5xl lg:max-w-5xl flex flex-col items-center justify-center">
            <TextGenerateEffect
              words="Transform Your B2B Digital Presence Into a Predictable Revenue Engine"
              className="leading-snug font-bold bg-clip-text bg-no-repeat text-transparent bg-gradient-to-br py-2 from-[#032E3A] to-[#032E3A] [text-shadow:0_0_rgba(0,0,0,0.1)]"
            />

            <p className="lg:w-3/4 text-center leading-snug my-6 text-gray-700 text-md md:text-lg lg:text-xl">
              Driving predictable pipeline growth through strategically
              integrated organic and paid marketing strategies for B2B SaaS and
              Technology companies.
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
        </div>
        <div className="my-4">
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
