import LinkedInContentSubscriptionHero from "../../../components/landing-page/LinkedInContentSubscriptionHero";
import LinkedInContentSubscriptionProblem from "../../../components/landing-page/LinkedInContentSubscriptionProblem";
import LinkedInContentSubscriptionSolution from "../../../components/landing-page/LinkedInContentSubscriptionSolution";
import LinkedInContentSubscriptionHowItWorks from "../../../components/landing-page/LinkedInContentSubscriptionHowItWorks";
import LinkedInContentSubscriptionResults from "../../../components/landing-page/LinkedInContentSubscriptionResults";
import LinkedInContentSubscriptionFaqs from "../../../components/landing-page/LinkedInContentSubscriptionFaqs";
import LinkedInContentSubscriptionTiers from "../../../components/landing-page/LinkedInContentSubscriptionTiers";
import LinkedInContentSubscriptionCTA from "../../../components/landing-page/LinkedInContentSubscriptionCTA";

export const metadata = {
  title: 'LinkedIn Content Subscription for B2B Founders & Marketing Leaders',
  description:
    'Get a full month of ready to post LinkedIn content delivered in advance so your profiles stay consistently active and engaging.',
};

const calLink = "https://cal.id/arwa-vord/quick-chat?user=arwa-vord&overlayCalendar=true";

export default function LinkedInContentSubscriptionPage() {
  return (
    <main>
      <LinkedInContentSubscriptionHero />
      <LinkedInContentSubscriptionProblem />
      <LinkedInContentSubscriptionSolution />
      <LinkedInContentSubscriptionHowItWorks />
      <LinkedInContentSubscriptionResults />
      <LinkedInContentSubscriptionFaqs />
      <LinkedInContentSubscriptionTiers />
      <LinkedInContentSubscriptionCTA />
      <div className="fixed bottom-0 left-0 w-full border-t border-gray-200 bg-white p-2 md:hidden z-50">
        <a
          href={calLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center w-full bg-primary text-white rounded-lg py-3 font-semibold"
        >
          Book your free strategy call
        </a>
      </div>
    </main>
  );
}
