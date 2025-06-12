import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Cta = ({
  ctaTitle,
  ctaDescription,
  ctaPrimaryButton,
  ctalink,
  ctaSecondaryButton,
  ctaSecondarylink,
}) => {
  return (
    <main className="bg-white p-4">
      <section className="container w-full lg:w-full bg-primary py-[70px] rounded-[30px] bg-[url('/ctaBg.png')] bg-contain bg-no-repeat bg-center">
        <article className="flex flex-col items-center ">
          <h4 className="w-full py-4 lg:w-4/6 text-3xl lg:text-5xl text-white font-bold leading-snug text-center">
            {ctaTitle}
          </h4>
          <p className="w-full py-4 lg:w-3/4 text-md lg:text-lg leading-snug text-white text-center font-regular">
            {ctaDescription}
          </p>
          <div className="flex flex-col justify-center items-center gap-2 md:flex-row lg:flex-row mt-6">
            <Link target="_blank" href={ctalink}>
              <Button variant="secondary" className="bg-white">
                {ctaPrimaryButton}
              </Button>
            </Link>
            <Link target="_blank" href={ctaSecondarylink}>
              <Button
                variant="outline"
                className="bg-primary text-white border-white">
                {ctaSecondaryButton}
              </Button>
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Cta;
