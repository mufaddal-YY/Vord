"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function ReCaptchaProvider({ children }) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  // Always provide the provider to ensure the hook is available
  // If no key is configured, use a placeholder that will fail server-side verification
  // This prevents runtime errors while still requiring proper configuration for production
  const keyToUse = siteKey || "not-configured-placeholder-key";

  if (!siteKey) {
    console.warn(
      "reCAPTCHA site key is not configured. Please add NEXT_PUBLIC_RECAPTCHA_SITE_KEY to your .env.local file. Spam protection will be disabled until configured."
    );
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={keyToUse}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}

