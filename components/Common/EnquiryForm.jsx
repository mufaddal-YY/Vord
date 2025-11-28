"use client";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Textarea } from "../ui/textarea";
import { sendEmail } from "@/lib/resend";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export const EnquirySchema = z.object({
  firstName: z.string().min(3).max(30),
  lastName: z.string().min(3).max(30),
  email: z.string().email(),
  phone: z.string().min(3).max(30),
  message: z.string(),
  recaptchaToken: z.string().optional(),
});

const EnquiryForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  // Get reCAPTCHA hook - executeRecaptcha will be undefined if script fails to load
  // The hook should handle errors gracefully, but we'll check for availability
  const recaptchaHook = useGoogleReCaptcha();
  const executeRecaptcha = recaptchaHook?.executeRecaptcha;

  const form = useForm({
    resolver: zodResolver(EnquirySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message:"",
      recaptchaToken: "",
    },
  });

  const onSubmit = async (formData) => {
    setIsLoading(true);
    try {
      // Execute reCAPTCHA to get token
      let recaptchaToken = "";
      if (executeRecaptcha) {
        try {
          recaptchaToken = await executeRecaptcha("enquiry_form_submit");
        } catch (recaptchaError) {
          console.error("reCAPTCHA execution error:", recaptchaError);
          // Don't block submission if reCAPTCHA fails - let server handle it
          // The server will check if reCAPTCHA is configured and handle accordingly
        }
      } else {
        console.warn("reCAPTCHA not available - proceeding without token");
      }

      // Include token in form data (empty string if not available)
      const formDataWithToken = {
        ...formData,
        recaptchaToken,
      };

      const result = await sendEmail(formDataWithToken);
      
      if (result.success) {
        toast.success("Email Sent Successfully!");
        form.reset();
      } else {
        toast.error(result.error || "Failed to send email.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send email. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="bg-transparent p-3">
      <section>
        <article>
          
          <Form {...form}>
            <form
              //   action={sendEmail}
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-3">
              <div className="flex flex-col lg:flex-row justify-between gap-2">
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary">First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="First name" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary">Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Last name" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row justify-between gap-2">
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Email" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary">Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="Phone" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-between gap-2">
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary">Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Message here" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="flex justify-center py-4">
                <Button className="px-12 py-6 bg-primary text-white font-bold" size="lg" type="submit" disabled={isLoading}>
                  {isLoading ? "Submitting..." : "Submit Enquiry"}
                </Button>
              </div>
            </form>
          </Form>
        </article>
      </section>
    </main>
  );
};

export default EnquiryForm;
