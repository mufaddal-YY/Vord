import { FiCalendar, FiCheckCircle, FiGrid, FiTarget } from "react-icons/fi";

const features = [
  {
    title: "Full Month, Delivered Early",
    description:
      "Complete content packs 7–10 days before month start. No surprises, no scrambling.",
    icon: FiCalendar,
  },
  {
    title: "Strategically Mapped to Your ICP",
    description:
      "Content aligned to your buyers, category, and business goals — not generic tips.",
    icon: FiTarget,
  },
  {
    title: "Copy + Design, Ready to Post",
    description:
      "Carousels, image captions, checklists, videos and more. Designed and written. You just hit publish.",
    icon: FiGrid,
  },
  {
    title: "Optional Full Scheduling",
    description:
      "Want completely hands-off? We schedule across 1–5 profiles for you.",
    icon: FiCheckCircle,
  },
];

const LinkedInContentSubscriptionSolution = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-14 text-white lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,234,180,0.14),_transparent_30%)]" />
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80">
            THE SOLUTION
          </span>
          <h2 className="mt-5 text-3xl font-bold leading-tight lg:text-4xl">
            A fully managed LinkedIn engine, delivered in advance.
          </h2>
          <p className="mt-5 text-md leading-snug text-white/70 md:text-base lg:text-lg">
            Every month, 7–10 days before it begins, you receive a complete pack of ready-to-post LinkedIn content copy, visuals, and a schedule. You post it (or we do). We handle the creative strategy, writing, and design. You stay the visible leader your audience sees.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#00EAB4]">
                  <Icon className="text-[22px]" />
                </div>
                <h3 className="mt-5 text-xl font-semibold leading-8">{feature.title}</h3>
                <p className="mt-3 text-sm leading-snug text-white/70">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LinkedInContentSubscriptionSolution;
