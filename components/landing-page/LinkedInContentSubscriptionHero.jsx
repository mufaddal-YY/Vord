"use client";

import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const keyResults = [
  { value: 3, suffix: "×", label: "average profile view lift in 60 days" },
  { value: 40, suffix: " hrs", label: "saved per month, per marketing team" },
  { value: 120, suffix: "+", label: "B2B profiles actively managed" },
  { value: 100, suffix: "%", label: "content delivered before the month starts" },
];

const calLink = "https://cal.id/arwa-vord/quick-chat?user=arwa-vord&overlayCalendar=true";

const Counter = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame;
    const duration = 1200;
    const start = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.round(value * progress));
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const LinkedInContentSubscriptionHero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-14 lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,234,180,0.12),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(8,88,110,0.28),_transparent_34%)]" />
      <div className="container relative">
        <div className="grid gap-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_32px_90px_-45px_rgba(0,0,0,0.75)] lg:grid-cols-[1fr_0.9fr] lg:p-10">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit self-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-white/75 sm:px-4 sm:py-2 sm:text-sm sm:tracking-[0.18em] md:self-start md:text-left">
              LINKEDIN CONTENT SUBSCRIPTION <br className="md:hidden lg:hidden"/> BUILT FOR B2B
            </span>
            <h1 className="mt-5 max-w-3xl text-center text-4xl font-bold leading-[1.05] text-white md:text-left lg:text-6xl">
              Your <span className="text-[#00EAB4]">LinkedIn</span>. Always{" "}
              <span className="text-[#00EAB4]">Active</span>.
              Always <span className="text-[#00EAB4]">Converting</span>.
            </h1>
            <p className="mt-5 max-w-2xl text-center text-md leading-snug text-white/70 md:text-left md:text-base lg:text-lg">
              We write, design, and deliver a full month of LinkedIn content 7 days before the month starts, so you show up consistently without the creative grind.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={calLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#00EAB4] px-7 py-4 text-base font-semibold text-slate-950 shadow-[0_22px_45px_-18px_rgba(0,234,180,0.8)] transition duration-300 hover:-translate-y-1 hover:bg-[#35efc2] hover:shadow-[0_28px_55px_-18px_rgba(0,234,180,0.95)]"
              >
                Book Your Free Strategy Call
                <FiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="relative flex items-center">
            <div className="absolute -left-8 top-8 hidden h-24 w-24 rounded-full bg-[#00EAB4]/15 blur-3xl lg:block" />
            <div className="relative w-full rounded-2xl border border-[#00EAB4]/25 bg-slate-950/70 p-6 shadow-[0_24px_60px_-35px_rgba(0,234,180,0.3)] lg:p-8">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#00EAB4] to-transparent" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00EAB4]">
                KEY RESULTS
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {keyResults.map((result) => (
                  <div
                    key={result.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <p className="text-3xl font-semibold leading-none text-white lg:text-5xl">
                      <Counter value={result.value} suffix={result.suffix} />
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white/70">{result.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInContentSubscriptionHero;
