import { FiArrowRight, FiCheckCircle, FiPhoneCall } from "react-icons/fi";

const calLink = "https://cal.id/arwa-vord/quick-chat?user=arwa-vord&overlayCalendar=true";

const CTApoints = [
  "No commitment required",
  "Cancel anytime",
  "First draft within 7 days of onboarding",
];

const LinkedInContentSubscriptionCTA = () => {
  return (
    <section id="book-call" className="relative overflow-hidden bg-primary py-14 lg:py-20">
      <div className="absolute inset-0 bg-[url('/ctaBg.png')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.14),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(0,234,180,0.18),_transparent_28%)]" />
      <div className="container">
        <div className="relative mx-auto grid max-w-5xl gap-8 overflow-hidden rounded-2xl border border-white/15 bg-slate-950/85 p-8 text-white shadow-[0_35px_90px_-40px_rgba(2,6,23,0.85)] backdrop-blur lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
          <div className="absolute -left-10 top-10 hidden h-36 w-36 rounded-full bg-[#00EAB4]/15 blur-3xl lg:block" />
          <div className="absolute -right-10 bottom-10 hidden h-40 w-40 rounded-full bg-white/10 blur-3xl lg:block" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/85 backdrop-blur">
              <FiPhoneCall className="text-base" />
              FREE STRATEGY CALL
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight lg:text-4xl">
              Ready to own your LinkedIn without owning the grind?
            </h2>
            <p className="mt-5 max-w-2xl text-md leading-snug text-white/70 md:text-base lg:text-lg">
              Book a free 20-minute call. We’ll audit your current LinkedIn presence, map your first month of content, and tell you exactly what’s possible for your business.
            </p>
          </div>

          <div className="relative rounded-2xl border border-[#00EAB4]/20 bg-white/10 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#00EAB4] to-transparent" />
            <div className="space-y-4">
              {CTApoints.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/25 p-4">
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#00EAB4]/15 text-[#00EAB4]">
                    <FiCheckCircle className="text-sm" />
                  </div>
                  <p className="text-md leading-snug text-white/80 md:text-base">{point}</p>
                </div>
              ))}
            </div>

            <a
              href={calLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#00EAB4] px-6 py-4 text-base font-semibold text-slate-950 shadow-[0_22px_45px_-18px_rgba(0,234,180,0.8)] transition duration-300 hover:-translate-y-1 hover:bg-[#35efc2] hover:shadow-[0_28px_55px_-18px_rgba(0,234,180,0.95)]"
            >
            Schedule Your Free Strategy Call
              <FiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInContentSubscriptionCTA;
