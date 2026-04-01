import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Will it actually sound like me?",
    answer:
      "Yes. Our onboarding process captures your tone, vocabulary, stories, and opinions. Most clients can’t tell the difference after the first round. We also offer unlimited revision rounds until it feels exactly right.",
  },
  {
    question: "Why not just use ChatGPT ourselves?",
    answer:
      "You could — but you’ll still spend hours prompting, editing, designing, scheduling, and strategizing. We handle all of that, plus bring platform expertise and a content strategy you won’t get from a chatbot alone.",
  },
  {
    question: "What if we need to pause or cancel?",
    answer:
      "No long-term contracts. Cancel anytime with 30 days notice. We work month-to-month because we’d rather earn your business every month than lock you in.",
  },
  {
    question: "How long until we see results?",
    answer:
      "Most clients see meaningful engagement growth within 30–45 days. Pipeline impact typically shows in months 2–3, as your audience builds familiarity and trust with your consistent presence.",
  },
  {
    question: "Can you manage multiple profiles?",
    answer:
      "Absolutely. We manage content for founder profiles, executive teams, and company pages — all coordinated to avoid repetition and create a unified narrative across your brand.",
  },
  {
    question: "Do we need to be on LinkedIn all day?",
    answer:
      "No. With our optional scheduling add-on, your content goes live automatically. You only need to respond to comments and DMs — we handle the posting end-to-end.",
  },
];

const LinkedInContentSubscriptionFaqs = () => {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="container">
        <div className="mx-auto overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-[0_25px_65px_-45px_rgba(8,88,110,0.22)]">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative border-b border-slate-200 px-6 py-8 lg:border-b-0 lg:border-r lg:px-10 lg:py-10">
              <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,_rgba(0,234,180,0.08),_transparent_32%)]" />
              <div className="relative">
                <span className="inline-flex rounded-full border border-primary/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-sm">
                  FAQs
                </span>
                <h2 className="mt-6 text-3xl font-bold leading-tight text-slate-950 lg:text-4xl">
                  Frequently asked
                  <br />
                  <span className="text-primary">questions</span>
                </h2>
                <p className="mt-5 max-w-sm text-md leading-snug text-slate-600 md:text-base">
                  Thinking “but what about…”?
                </p>
              </div>
            </div>

            <div className="px-6 py-8 lg:px-8 lg:py-10">
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={faq.question}
                    value={`item-${index}`}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white px-5 shadow-sm"
                  >
                    <AccordionTrigger className="text-left text-md font-semibold text-slate-950 hover:no-underline md:text-base lg:text-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="border-t border-slate-100 pt-4 text-md leading-snug text-slate-600 md:text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInContentSubscriptionFaqs;
