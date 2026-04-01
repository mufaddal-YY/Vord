import Image from "next/image";
import {
  FiClock,
  FiShield,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

const benefits = [
  {
    title: "No more blank page anxiety",
    description: "Your LinkedIn calendar is always filled.",
    icon: FiClock,
  },
  {
    title: "Save time",
    description: "Free up 10 to 40+ hours per month for your marketing team and leadership.",
    icon: FiShield,
  },
  {
    title: "Consistency equals authority",
    description: "Regular, high quality posts build trust with prospects and talent.",
    icon: FiTrendingUp,
  },
  {
    title: "Business oriented, not viral",
    description: "We focus on content that drives leads, partnerships, and brand awareness, not random engagement hacks.",
    icon: FiUsers,
  },
];

const LinkedInContentSubscriptionWhyWorks = ({ image }) => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-14 text-white lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,234,180,0.12),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_28%)]" />
      <div className="container relative">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80">
              Why this approach works
            </span>
            <h2 className="mt-5 max-w-xl text-3xl font-bold leading-tight text-white lg:text-4xl">
              Why This Approach Works
            </h2>
            <p className="mt-5 max-w-xl text-md leading-snug text-white/70 md:text-base lg:text-lg">
              The value here is not just more content. It is a system that protects consistency, sharpens message quality, and keeps LinkedIn tied to business goals.
            </p>

            <div className="relative mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.85)]">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={image || "/bg_secondary_1.png"}
                  alt="Abstract visual showing momentum and consistency"
                  width={900}
                  height={900}
                  className="h-[360px] w-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.12),rgba(2,6,23,0.88))]" />
                <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/10 bg-slate-950/80 p-5 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00EAB4]">
                    What changes
                  </p>
                  <p className="mt-3 text-lg font-semibold leading-8 text-white">
                    Instead of posting when time appears, you operate with a repeatable system that keeps visibility and quality moving together.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* <div className="absolute left-6 top-8 bottom-8 hidden w-px bg-gradient-to-b from-[#00EAB4]/0 via-[#00EAB4]/40 to-[#00EAB4]/0 md:block" /> */}
            <div className="space-y-5">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <article
                    key={benefit.title}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:border-[#00EAB4]/30 hover:bg-white/[0.06] lg:p-7"
                  >
                    <div className="absolute inset-y-0 left-0  opacity-70" />
                    <div className="grid gap-5 md:grid-cols-[auto_1fr] md:items-start">
                      <div className="flex items-center gap-4">
                        <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#00EAB4]/20 bg-[#00EAB4]/10 text-[#00EAB4]">
                          <Icon className="text-[24px]" />
                        </div>
                        <div className="md:hidden text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                      </div>

                      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                        <div className="max-w-xl">
                          <h3 className="text-xl font-semibold text-white lg:text-2xl">
                            {benefit.title}
                          </h3>
                          <p className="mt-2 text-md leading-snug text-white/70 md:text-base">
                            {benefit.description}
                          </p>
                        </div>
                        <div className="hidden text-sm font-semibold uppercase tracking-[0.2em] text-white/35 md:block">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInContentSubscriptionWhyWorks;
