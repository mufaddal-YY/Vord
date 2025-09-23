"use client";
import { BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import Image from "next/image";

const Clientele = ({ clienteleData }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    loop: true,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
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
    <main className="">
      <section className="">
        <div className="">
          <Slider {...settings} className="">
            {clienteleData.map((item, idx) => (
              <div className="flex p-2" key={idx}>
                <div className="w-full p-2 flex">
                  <Image
                    src={item?.image}
                    alt={item?.alt}
                    width={200}
                    height={100}
                      className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition duration-300 ease-in-out"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="text-center">
          <h4 className="font-semibold">
            Trusted by <span className="text-primary">forward-thinking</span>{" "}
            B2B companies
          </h4>
        </div>
      </section>
    </main>
  );
};

export default Clientele;
