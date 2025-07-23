import React from "react";
import EnquiryForm from "../Common/EnquiryForm";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
} from "react-icons/fa";
import { Separator } from "../ui/separator";
import Link from "next/link";

const ContactSection = ({ contactData }) => {
  return (
    <main className="bg-white">
      <section className="container py-[50px]">
        <article className="flex flex-col lg:flex-row p-2">
          <div className="w-full lg:w-1/2">
            <div className="p-4 border border-[#032E3A] rounded-md">
              <h4 className="text-3xl font-bold py-2 mb-4 text-left text-rimary">
                Enquire Now
              </h4>
              <EnquiryForm />
            </div>
          </div>

          {contactData.map((item, i) => (
            <div className="w-full lg:w-1/2 p-2 lg:ml-10 text-primary">
              <h4 className="text-xl font-semibold mb-2">Connect with us</h4>
              <Separator />

              <div className="py-4 flex flex-col lg:flex-row gap-4" key={i}>
                <Link target="_blank" href={item?.linkedin}>
                  <div className="flex items-center gap-2 border border-[#032E3A] rounded-md p-3">
                    <FaLinkedin className="text-xl" />
                    <span>LinkedIn</span>
                  </div>
                </Link>

                <Link target="_blank" href={item?.facebook}>
                  <div className="flex items-center gap-2 border border-[#032E3A] rounded-md p-3">
                    <FaFacebook className="text-xl" />
                    <span>Facebook</span>
                  </div>
                </Link>

                <Link target="_blank" href={item?.instagram}>
                  <div className="flex items-center gap-2 border border-[#032E3A] rounded-md p-3">
                    <FaInstagram className="text-xl" />
                    <span>Instagram</span>
                  </div>
                </Link>

                <Link target="_blank" href={item?.twitter}>
                  <div className="flex items-center gap-2 border border-[#032E3A] rounded-md p-3">
                    <FaTwitter className="text-xl" />
                    <span>Twitter</span>
                  </div>
                </Link>
              </div>

              <h4 className=" text-xl font-semibold mb-2">Call us</h4>
              <Separator />
              <Link target="_blank" href={`tel:${item?.contact}`}>
                <div className="py-4 flex items-center gap-2 pb-4">
                  <FaPhoneAlt className="text-xl" />
                  <span>{item?.contact}</span>
                </div>
              </Link>

              <h4 className=" text-xl font-semibold mb-2">Email us</h4>
              <Separator />

              <Link target="_blank" href={`mailto:${item?.email}`}>
                <div className="py-4 flex items-center gap-2">
                  <FaEnvelope className="text-xl" />
                  <span>{item?.email}</span>
                </div>
              </Link>
            </div>
          ))}
        </article>
      </section>
    </main>
  );
};

export default ContactSection;
