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
      <section className="container w-full lg:w-3/4 bg-primary py-[30px] rounded-[30px] bg-[url('/ctaBg.png')] bg-contain bg-no-repeat bg-center">
        <article className="flex flex-col items-center ">
          <h4 className="w-full py-4 lg:w-1/2 text-2xl lg:text-3xl text-white font-semibold text-center">
            {ctaTitle}
          </h4>
          <p className="w-full py-4 lg:w-3/4 text-md lg:text-lg text-white text-center font-regular">
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
