"use server";

/**
 * Verifies a reCAPTCHA v3 token with Google's API
 * @param {string} token - The reCAPTCHA token to verify
 * @returns {Promise<{success: boolean, score?: number, error?: string}>}
 */
export async function verifyRecaptchaToken(token) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.warn("reCAPTCHA secret key is not configured. Verification will fail.");
    return { success: false, error: "reCAPTCHA not configured" };
  }

  if (!token) {
    return { success: false, error: "reCAPTCHA token is missing" };
  }

  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${secretKey}&response=${token}`,
      }
    );

    const data = await response.json();

    if (!data.success) {
      return {
        success: false,
        error: data["error-codes"]?.join(", ") || "Verification failed",
      };
    }

    // Return success with score
    // Score ranges from 0.0 (bot) to 1.0 (human)
    // We'll use a threshold of 0.5 in the email function
    return {
      success: true,
      score: data.score || 0,
    };
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return {
      success: false,
      error: error.message || "Verification request failed",
    };
  }
}



