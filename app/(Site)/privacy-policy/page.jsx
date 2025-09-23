export const metadata = {
  title: "Privacy Policy",
  description:
    "Vord Marketing's privacy policy describing data collection, usage, cookies, security, sharing, updates, and your choices.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      <section className="container py-[50px] prose max-w-none">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p>
          Vord Marketing (“Vord”, “we”, “our”) respects your privacy and is
          committed to safeguarding your personal information. This policy
          explains what data we collect, how we use it, and the choices you
          have. By engaging with our website or services, you consent to the
          practices outlined here.
        </p>
        <p>
          For any questions, contact us at <a href="mailto:info@vord.marketing">info@vord.marketing</a>.
        </p>

        <h2 className="text-2xl font-semibold">1. What We Collect</h2>
        <p>We may collect:</p>
        <ul>
          <li>
            <strong>Usage Data:</strong> IP address, browser type, device
            information, pages visited, time spent.
          </li>
          <li>
            <strong>Cookies & Tracking Data:</strong> Used to enhance your
            experience, personalize content, and measure campaign performance.
          </li>
          <li>
            <strong>Personal Data (if provided voluntarily):</strong> Name,
            email, company details, phone number, or any details you submit via
            forms, downloads, or contact requests.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">2. How We Use Your Data</h2>
        <p>We use collected information to:</p>
        <ul>
          <li>Deliver, improve, and optimize our services.</li>
          <li>Communicate with you regarding resources, campaigns, or updates.</li>
          <li>
            Provide insights and reporting aligned with our Revenue Engine
            Methodology.
          </li>
          <li>Personalize your experience across LinkedIn, SEO, Paid, and other channels.</li>
          <li>Ensure security and prevent fraudulent activity.</li>
        </ul>

        <h2 className="text-2xl font-semibold">3. Cookies</h2>
        <p>
          Cookies help us streamline navigation, remember preferences, and
          analyze engagement.
        </p>
        <ul>
          <li>
            <strong>Session cookies</strong> expire when you close your browser.
          </li>
          <li>
            <strong>Persistent cookies</strong> remain until deleted and help
            track preferences and performance.
          </li>
        </ul>
        <p>
          You may disable cookies in your browser, though some features may be
          limited.
        </p>

        <h2 className="text-2xl font-semibold">4. Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your
          information, including restricted access, secure servers, and
          encryption where possible. While we strive to protect data, no method
          of online transmission is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold">5. Data Sharing</h2>
        <p>We do not sell your data. We may share information only with:</p>
        <ul>
          <li>
            Trusted technology partners who support our campaigns (analytics,
            automation, CRM).
          </li>
          <li>Legal authorities, if required by law.</li>
        </ul>

        <h2 className="text-2xl font-semibold">6. Policy Updates</h2>
        <p>
          We may update this policy to reflect new practices, technologies, or
          regulations. Changes will be posted on this page with an updated
          effective date. Continued use of our services after changes indicates
          acceptance.
        </p>

        <h2 className="text-2xl font-semibold">7. Your Choices</h2>
        <ul>
          <li>
            You can request access to, correction of, or deletion of your
            personal data.
          </li>
          <li>You may unsubscribe from marketing communications at any time.</li>
          <li>You may opt out of cookies through your browser settings.</li>
        </ul>
      </section>
    </main>
  );
}


