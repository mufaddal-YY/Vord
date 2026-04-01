import { FiArrowRight, FiCheck, FiStar } from "react-icons/fi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const calLink = "https://cal.id/arwa-vord/quick-chat?user=arwa-vord&overlayCalendar=true";

const tiers = [
  {
    name: "Foundation",
    price: "Starting from $550/ month",
    range: "8–12 Posts Per Month",
    highlights: [
      "Strategy onboarding call",
      "90-day content roadmap",
      "Copy + design files monthly",
      "1 profile managed",
      "Monthly performance report",
      "4 revisions",
    ],
  },
  {
    name: "Growth ★ Most Popular",
    price: "Starting from $900/mo",
    range: "16–20 Posts Per Month",
    featured: true,
    highlights: [
      "Everything in Foundation",
      "Up to 3 profiles managed",
      "Campaign-aligned content themes",
      "Carousel + checklist formats",
      "Optional full scheduling",
      "Quarterly strategy review",
    ],
  },
  {
    name: "Premium",
    price: "Starting from $1800 /mo",
    range: "25–40+ Posts Per Month",
    highlights: [
      "Everything in Growth",
      "Up to 5 profiles managed",
      "Advanced analytics dashboard",
      "Employer brand content included",
      "Full hands-off scheduling",
      "Dedicated account strategist",
    ],
  },
];

const LinkedInContentSubscriptionTiers = () => {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            PRICING
          </span>
          <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 lg:text-4xl">
            Simple tiers. Clear value.
          </h2>
          <p className="mt-5 text-md leading-snug text-slate-600 md:text-base lg:text-lg">
            No hidden fees. No long contracts. Select the tier that matches your current level — upgrade anytime.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`relative flex h-full flex-col rounded-2xl shadow-none transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-35px_rgba(8,88,110,0.5)] ${
                tier.featured ? "border-primary bg-slate-950 text-white" : "border-slate-200 bg-slate-50/70"
              }`}
            >
              {tier.featured && (
                <div className="absolute left-6 top-0 -translate-y-1/2 rounded-full bg-[#00EAB4] px-4 py-2 text-sm font-semibold text-slate-950">
                  Most popular
                </div>
              )}
              <CardHeader className="pb-4 pt-8">
                <div className="flex items-center justify-between">
                  <CardTitle className={`text-3xl ${tier.featured ? "text-white" : "text-slate-950"}`}>
                    {tier.name}
                  </CardTitle>
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${
                      tier.featured ? "border-white/10 bg-white/10 text-[#00EAB4]" : "border-slate-200 bg-white text-primary"
                    }`}
                  >
                    <FiStar className="text-[20px]" />
                  </div>
                </div>
                <p className={`mt-5 text-xl font-bold ${tier.featured ? "text-white" : "text-slate-950"}`}>
                  {tier.price}
                </p>
                <p
                  className={`mt-4 inline-flex w-fit rounded-2xl px-4 py-3 text-xl font-bold shadow-sm ${
                    tier.featured ? "bg-[#00EAB4]/12 text-[#00EAB4]" : "bg-primary/10 text-primary"
                  }`}
                >
                  {tier.range}
                </p>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <div className="mt-2 space-y-4">
                  {tier.highlights.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div
                        className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                          tier.featured ? "bg-white/10 text-[#00EAB4]" : "bg-primary/10 text-primary"
                        }`}
                      >
                        <FiCheck className="text-sm" />
                      </div>
                      <p className={`text-sm leading-snug ${tier.featured ? "text-white/75" : "text-slate-600"}`}>{item}</p>
                    </div>
                  ))}
                </div>
                <a
                  href={calLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-md font-semibold transition duration-300 hover:-translate-y-1 ${
                    tier.featured
                      ? "bg-[#00EAB4] text-slate-950 shadow-[0_20px_40px_-20px_rgba(0,234,180,0.8)] hover:bg-[#35efc2]"
                      : "bg-primary text-white shadow-[0_18px_40px_-20px_rgba(8,88,110,0.55)] hover:bg-primary/70"
                  }`}
                >
                Book Your Free Strategy Call
                <FiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinkedInContentSubscriptionTiers;
