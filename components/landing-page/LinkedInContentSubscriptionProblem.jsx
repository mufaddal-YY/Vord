import {
  FiAlertCircle,
  FiClock,
  FiMessageSquare,
  FiTrendingDown,
} from "react-icons/fi";

const painPoints = [
  {
    title: "Last-minute, reactive posting:",
    description: "You write when you have time — not when your audience is ready to engage.",
    icon: FiClock,
  },
  {
    title: "No time, no plan, no system:",
    description: "Your team is stretched. Content is always the thing that gets pushed.",
    icon: FiMessageSquare,
  },
  {
    title: "“What do we even post about?”:",
    description: "Without a strategy, you either go silent or sound generic.",
    icon: FiTrendingDown,
  },
  {
    title: "Invisible to your own ICP:",
    description: "While you’re busy, competitors are showing up daily — and winning the mindshare.",
    icon: FiAlertCircle,
  },
];

const LinkedInContentSubscriptionProblem = () => {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-xl lg:sticky lg:top-24">
            <span className="inline-flex rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
              THE REAL PROBLEM
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 lg:text-4xl">
              You know LinkedIn matters. Your calendar disagrees.
            </h2>
            <p className="mt-5 text-md leading-snug text-slate-600 md:text-base lg:text-lg">
              Here’s what Monday morning looks like without a system: You open LinkedIn, see a competitor’s post getting traction, and scramble to write something anything. It’s reactive. It’s inconsistent. And it’s slowly eroding the authority you’re working so hard to build.
            </p>
            <div className="mt-8 rounded-2xl border border-primary/20 bg-slate-50 p-6 shadow-[0_24px_55px_-40px_rgba(8,88,110,0.3)]">
              <p className="text-lg font-semibold leading-8 text-slate-900">
               This is not a content problem. It’s a system problem. And systems are exactly what we build.
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl border border-slate-200 bg-slate-50/70 p-5 lg:p-8">
            <div className="space-y-4 lg:space-y-5">
              {painPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <article
                    key={point.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:border-primary/30 hover:shadow-[0_24px_50px_-35px_rgba(8,88,110,0.22)] lg:p-7"
                  >
                    <div className="grid gap-5 lg:grid-cols-[auto_1fr_auto] lg:items-start">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 text-primary">
                        <Icon className="text-[24px]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold leading-8 text-slate-950">{point.title}</h3>
                        <p className="mt-2 text-md leading-snug text-slate-600 md:text-base">{point.description}</p>
                      </div>
                      <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
                        {String(index + 1).padStart(2, "0")}
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

export default LinkedInContentSubscriptionProblem;
