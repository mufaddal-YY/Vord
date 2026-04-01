import { FiArrowRight, FiCalendar, FiCompass, FiTrendingUp } from "react-icons/fi";

const steps = [
  {
    title: "Onboard & Align",
    timing: "Week 1",
    points: [
      "One 45-minute strategy call",
      "We capture your brand voice, ICP, and 3–5 competitor benchmarks",
      "You receive a 90-day content roadmap tailored to your audience",
    ],
    icon: FiCompass,
  },
  {
    title: "Receive Content in Advance",
    timing: "Ongoing, monthly",
    points: [
      "Full content pack arrives 7–10 days before the month starts",
      "Organized by week, theme, and profile",
      "Copy + design files, ready to post as-is",
    ],
    icon: FiCalendar,
  },
  {
    title: "Publish & Scale",
    timing: "You’re in control",
    points: [
      "Post yourself, or let us schedule it all",
      "Monthly performance report shows what’s gaining traction",
      "Quarterly strategy review to evolve your content direction",
    ],
    icon: FiTrendingUp,
  },
];

const LinkedInContentSubscriptionHowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-white py-14 lg:py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            THE PROCESS
          </span>
          <h2 className="mt-5 text-3xl font-bold text-slate-950 lg:text-4xl">
            Three steps. Zero blank pages.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            return (
              <div key={step.title} className="relative">
                <article className="relative flex h-full flex-col rounded-2xl border border-primary/30 bg-slate-50 p-6 shadow-[0_18px_45px_-35px_rgba(8,88,110,0.45)] lg:p-7">
                  <div className="absolute left-6 top-0 -translate-y-1/2 rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                    Step {index + 1}
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-white text-primary">
                    <Icon className="text-[22px]" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-slate-950 lg:text-2xl">{step.title}</h3>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">
                    {step.timing}
                  </p>
                  <div className="mt-5 space-y-3">
                    {step.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                        <p className="text-md leading-snug text-slate-700 md:text-base">{point}</p>
                      </div>
                    ))}
                  </div>
                </article>
                {!isLast && (
                  <div className="z-20 pointer-events-none absolute -right-8 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-primary/30 bg-white text-primary shadow-sm lg:flex">
                    <FiArrowRight className="text-xl" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LinkedInContentSubscriptionHowItWorks;
