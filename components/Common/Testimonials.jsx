"use client";
import { BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import Image from "next/image";

const Testimonials = ({ testimonialsData }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    loop: true,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 591,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <main className="">
      <section className="">
        <div className="">
          <Slider {...settings} className="">
            {testimonialsData.map((item, idx) => (
              <div className="flex p-2" key={idx}>
                <div className="flex w-full justify-center items-center  p-2 ">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex flex-col lg:flex-row text-center lg:text-left">
                      <div className="border-b lg:border-r-2 lg:border-b-0 border-gray-400 p-4">
                        <p className="text-md">{item?.clientName}</p>
                        <p className="text-sm">{item.clientPosition}</p>
                      </div>
                      <div className="p-4">
                        <p>{item?.review}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;
