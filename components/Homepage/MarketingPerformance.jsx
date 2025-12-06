"use client";
import { BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import { Button } from "../ui/button";

const MarketingPerformance = ({ homeData, testimonialsData }) => {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    loop: true,
    vertical: true,
    verticalSwiping: true,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 591,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <main className="bg-primary">
      <section className="container">
        {homeData.map((item, idx) => (
          <article className="lg:p-6 flex flex-col items-center lg:flex-row " key={idx}>
            <div className="text-center w-full lg:w-1/2 lg:text-left space-y-2 p-2 py-12">
              <h4 className="text-4xl text-white font-semibold leading-tight">
                See How We've Transformed Marketing Performance
              </h4>
              <div className="py-4">
                <Button variant="secondary" className="bg-white text-primary">
                  View All Case Studies
                </Button>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <Slider {...settings} className="">
                {testimonialsData.map((item, idx) => (
                  <div
                    className="flex p-2"
                    key={idx}>
                    <div className="flex flex-col bg-white p-6 rounded-xl gap-4">
                      <p className="text-left text-ray700">{item?.review}</p>
                      <p className="text-left text-primary">
                       ~ {item?.clientName} | {item?.clientPosition}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default MarketingPerformance;
