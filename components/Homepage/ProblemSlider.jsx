"use client";
import Slider from "react-slick";
import Image from "next/image";

const ProblemSlider = ({ sliderData }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    loop: true,
    pauseOnHover: false,

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
          slidesToShow: 2,
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
            {sliderData.problemSlider.map((item, idx) => (
              <div className="flex justify-center items-center p-2" key={idx}>
                {/* Outer wrapper for centering both image and text vertically */}
                <div className="flex flex-col justify-center items-center text-center gap-4">
                  {/* Image container */}
                  <div className="relative w-[350px] h-[350px] overflow-hidden rounded-full">
                    {/* Image */}
                    <Image
                      src={item?.problemImage}
                      alt={item?.alt}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />

                    {/* Overlay */}
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-[#032E3A] flex pt-4 justify-center rounded-b-full">
                      <p className="text-white w-3/4 text-center px-4 text-md font-medium">
                        {item?.problemTitle}
                      </p>
                    </div>
                  </div>
                  {/* Title text */}
                  {/* <p className="text-center">{item.problemTitle}</p> */}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </main>
  );
};

export default ProblemSlider;
