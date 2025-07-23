import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import Clientele from "../Common/Clientele";
import Testimonials from "../Common/Testimonials";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import EnquiryForm from "../Common/EnquiryForm";
const HeroBanner = ({ homeData, clienteleData, testimonialsData }) => {
  return (
    <main className="w-full bg-white relative items-center justify-center bg-[url('/heroBg.png')] bg-no-repeat bg-[length:auto_25%] bg-[position:center_15%] lg:bg-center lg:bg-[length:35%]">
      <section className="container mx-auto py-[80px]">
        <div className="flex justify-center relative z-10">
          {homeData?.map((item, i) => (
            <div
              className="w-full md:max-w-5xl lg:max-w-5xl flex flex-col items-center justify-center"
              key={i}>
              <h2 className="font-display text-primary text-center text-4xl font-bold tracking-[-0.01em] drop-shadow-sm md:text-5xl lg:text-5xl leading-snug lg:leading-[4rem]">
                {item?.headline}
              </h2>

              <p className="lg:w-3/4 text-center leading-snug my-4 text-gray-700 text-md md:text-lg lg:text-xl">
                {item?.subHeadline}
              </p>

              <div className="flex flex-col justify-center items-center gap-2 md:flex-row lg:flex-row mt-2 lg:mt-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="">Get Your Revenue Strategy →</Button>
                  </DialogTrigger>
                  <DialogContent className="max-h-[600px] overflow-y-scroll">
                    {/* <DialogTitle></DialogTitle> */}
                    <EnquiryForm />
                  </DialogContent>
                </Dialog>
                <Link href="#results">
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
