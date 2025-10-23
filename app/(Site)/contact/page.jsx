import PageBanner from '@/components/Common/PageBanner'
import ContactSection from '@/components/Contact/ContactSection'
import { getContactData } from '@/sanity/fetchedData'
import React from 'react'

export const metadata = {
  title: "Contact Us | Vord Marketing",
  description: "Get in touch with Vord Marketing for B2B SaaS marketing services. Let's discuss your revenue growth strategy.",
  keywords: ["contact Vord", "B2B marketing agency contact", "SaaS marketing consultation"],
};

const Contact = async() => {
    const contactData = await getContactData()
  return (
    <main>
        <PageBanner headline="Contact us" />
        <ContactSection contactData={contactData} />
    </main>
  )
}

export default Contact