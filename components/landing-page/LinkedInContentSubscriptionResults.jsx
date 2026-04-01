const results = [
  {
    metric: "4.2×",
    metricLabel: "Increase in inbound profile visits in 90 days",
    quote:
      "We went from posting twice a month to five times a week and the quality is better than anything we were producing in-house. Our sales team now references our LinkedIn posts in discovery calls.”",
    author: "Marcus R.",
    role: "Co-Founder, B2B SaaS (Series A)",
  },
  {
    metric: "35 hours freed",
    metricLabel: "Each month for strategic work",
    quote:
      "“I used to dread the question ‘when are you posting next?’ Now my content is just… there. Consistently. The voice sounds exactly like me, I forget I didn’t write it.”",
    author: "Shruti P.",
    role: "Head of Marketing, IT Services",
  },
  {
    metric: "2 new clients",
    metricLabel: "Attributed to LinkedIn in Month 2",
    quote:
      "“Three weeks in, a prospect told me they’d been ‘following our content for months’ before booking a call. That’s the kind of brand authority I couldn’t build alone. This service built it quietly.”",
    author: "James K.",
    role: "Founder, Management Consulting",
  },
];

const LinkedInContentSubscriptionResults = () => {
  const leadResult = results[0];
  const supportingResults = results.slice(1);

  return (
    <section className="relative overflow-hidden bg-slate-950 py-14 text-white lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,234,180,0.16),_transparent_22%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.06),_transparent_26%)]" />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80">
            CLIENT RESULTS
          </span>
          <h2 className="mt-5 text-3xl font-bold leading-tight text-white lg:text-5xl">
            What happens when LinkedIn runs itself.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
          <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 shadow-[0_28px_70px_-45px_rgba(0,0,0,0.9)] backdrop-blur lg:min-h-[500px] lg:p-8">
            <div className="absolute inset-0 " />
            <div className="relative flex h-full flex-col">
              <div>
                <p className="text-3xl font-semibold leading-none text-[#00EAB4] lg:text-5xl">
                  {leadResult.metric}
                </p>
                <p className="mt-3 text-md text-white/82 md:text-base">
                  {leadResult.metricLabel}
                </p>
              </div>
              

              <div className="mt-10 text-4xl leading-none text-[#00EAB4]">
                ”
              </div>
              <p className=" max-w-2xl text-md leading-snug text-white/72 md:text-base">
                {leadResult.quote}
              </p>

              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-2">
                <div>
                  <p className="text-xl font-semibold text-white">
                    {leadResult.author}
                  </p>
                  <p className="mt-1 text-sm text-white/55">
                    {leadResult.role}
                  </p>
                </div>
                {/* <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-sm font-semibold text-white/70">
                  01
                </div> */}
              </div>
            </div>
          </article>

          <div className="grid gap-5 lg:grid-cols-2">
            {supportingResults.map((result, index) => (
              <article
                key={result.author}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 shadow-[0_24px_60px_-45px_rgba(0,0,0,0.85)] backdrop-blur">
                <div className="absolute inset-0" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-3xl font-semibold leading-none text-[#00EAB4] lg:text-4xl">
                        {result.metric}
                      </p>
                      <p className="mt-3 max-w-sm text-md leading-snug text-white/82 md:text-base">
                        {result.metricLabel}
                      </p>
                    </div>
                    
                  </div>

                  <div className="mt-8 text-4xl leading-none text-[#00EAB4]">
                    ”
                  </div>
                  <p className=" text-md leading-snug text-white/72 md:text-base">
                    {result.quote}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                    <div>
                      <p className="text-lg font-semibold text-white">
                        {result.author}
                      </p>
                      <p className="mt-1 text-sm text-white/55">
                        {result.role}
                      </p>
                    </div>
                    {/* <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-sm font-semibold text-white/70 sm:hidden">
                      {String(index + 2).padStart(2, "0")}
                    </div> */}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInContentSubscriptionResults;
