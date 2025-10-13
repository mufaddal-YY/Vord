"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  try {
    const { firstName, lastName, email, phone, message } = formData;
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
      to: ["vordmarketing@gmail.com"],
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