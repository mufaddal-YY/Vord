"use server";

import { Resend } from "resend";
import { verifyRecaptchaToken } from "./recaptcha";

const resend = new Resend(process.env.RESEND_API_KEY);

// reCAPTCHA score threshold (0.0 = bot, 1.0 = human)
// Scores below this threshold will be rejected
const RECAPTCHA_SCORE_THRESHOLD = 0.5;

export const sendEmail = async (formData) => {
  try {
    const { firstName, lastName, email, phone, message, recaptchaToken } = formData;

    // Verify reCAPTCHA token if provided
    if (recaptchaToken) {
      const verification = await verifyRecaptchaToken(recaptchaToken);
      
      if (!verification.success) {
        console.error("reCAPTCHA verification failed:", verification.error);
        return {
          success: false,
          error: "Spam protection verification failed. Please try again.",
        };
      }

      // Check score threshold
      if (verification.score !== undefined && verification.score < RECAPTCHA_SCORE_THRESHOLD) {
        console.warn(
          `reCAPTCHA score too low: ${verification.score}. Threshold: ${RECAPTCHA_SCORE_THRESHOLD}`
        );
        return {
          success: false,
          error: "Submission appears to be spam. Please contact us directly if this is an error.",
        };
      }
    } else {
      // If no token provided, check if reCAPTCHA is configured
      const secretKey = process.env.RECAPTCHA_SECRET_KEY;
      if (secretKey) {
        // reCAPTCHA is configured but no token was provided
        // This could mean:
        // 1. Script failed to load (CORS issue, network error, etc.)
        // 2. User's browser blocked the script
        // 3. reCAPTCHA provider not properly initialized
        // For now, we'll log a warning but allow the submission
        // You can change this to reject if you want stricter enforcement
        console.warn("reCAPTCHA token missing but secret key is configured - allowing submission (script may have failed to load)");
        // Uncomment the following lines to enforce strict reCAPTCHA verification:
        // return {
        //   success: false,
        //   error: "Spam protection verification is required.",
        // };
      } else {
        // If reCAPTCHA is not configured, allow submission (for development/testing)
        console.warn("reCAPTCHA token missing and not configured - allowing submission");
      }
    }

    const htmlContent = `
      <h2>New Enquiry Received</h2>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;
    
    const { data, error } = await resend.emails.send({
      from: "Vord Marketing <onboarding@resend.dev>",
      to: ["arwa@vord.marketing"],
      subject: "New Enquiry from Website",
      html: htmlContent,
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error: error.message };
  }
};