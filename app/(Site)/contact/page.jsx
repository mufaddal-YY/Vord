import PageBanner from '@/components/Common/PageBanner'
import ContactSection from '@/components/Contact/ContactSection'
import { getContactData } from '@/sanity/fetchedData'
import React from 'react'

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