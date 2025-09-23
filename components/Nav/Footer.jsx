"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Logo from "@/public/logo_b.png";
import { MdEmail, MdCall } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { servicesData } from "@/lib/constants";
import { getContactData } from "@/sanity/fetchedData";

const Footer = () => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const data = await getContactData();
        if (isMounted) {
          setContact(Array.isArray(data) && data.length > 0 ? data[0] : null);
        }
      } catch (error) {
        console.error("Failed to load contact data", error);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="py-4 bg-white">
      <div className="container">
        <div className="flex flex-wrap flex-col justify-between md:flex-row lg:flex-row p-2">
          <div className=" flex flex-col gap-2 mb-4 w-full md:w-1/2 lg:w-1/4">
            <div className="">
              <Link href={"/"} className="flex items-center">
                <Image width={100} height={50} src={Logo} alt="footer logo" />
              </Link>
              <p className="py-2 font-medium text-sm">Proclaim your vision</p>
            </div>
            <div className="py-2">
              <div className="flex flex-row justify-start gap-4">
                <Link target="_blank" href={contact?.instagram || "#"} className="flex items-center">
                  <div className="border-2 rounded-full p-2 hover:border-[#35750E] hover:text-[#35750E]">
                    <FaInstagram />
                  </div>
                </Link>
                <Link target="_blank" href={contact?.linkedin || "#"} className="flex items-center">
                  <div className="border-2 rounded-full p-2 hover:border-[#35750E] hover:text-[#35750E]">
                    <FaLinkedin />
                  </div>
                </Link>
                <Link target="_blank" href={contact?.twitter || "#"} className="flex items-center">
                  <div className="border-2 rounded-full p-2 hover:border-[#35750E] hover:text-[#35750E]">
                    <FaTwitter />
                  </div>
                </Link>
                <Link target="_blank" href={contact?.facebook || "#"} className="flex items-center">
                  <div className="border-2 rounded-full p-2 hover:border-[#35750E] hover:text-[#35750E]">
                    <FaFacebookF />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-4 w-full md:w-1/2 lg:w-1/4 p-2">
            <div className="mb-2 border-b-[1px] border-gray-400">
              <h3 className="text-[18px] uppercase md:text-md font-semibold mb-4">
                Quick Links
              </h3>
            </div>
            <div className="py-2">
              <ul className="flex flex-col gap-4 text-sm">
                {servicesData.map((item) => (
                  <li className="text-md capitalize" key={item?.name}>
                    <Link href={`/${item?.link}`}>{item?.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-4 w-full md:w-1/2 lg:w-1/4 p-2">
            <div className="mb-2 border-b-[1px] border-gray-400">
              <h3 className="text-[18px] uppercase md:text-md font-semibold mb-4">
                Useful Links
              </h3>
            </div>
            <div className="py-2">
              <ul className="flex flex-col gap-4 text-sm">
                <li className="text-md capitalize">
                  <Link href={"/about"}>About</Link>
                </li>
                <li className="text-md capitalize">
                  <Link href={"/privacy-policy"}>Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="gap-2 mb-4 w-full md:w-1/2 lg:w-1/4 p-2">
            <div className="mb-2 border-b-[1px] border-gray-400">
              <h3 className="text-[18px] uppercase md:text-md font-semibold mb-4">
                Contact Information
              </h3>
            </div>
            <div className="py-2">
              <ul className="flex flex-col gap-4 text-sm">
                <li className="text-md capitalize">
                  <Link href={`tel:${contact?.contact || ""}`} className="flex gap-2">
                    <span className="text-xl text-primary">
                      <MdCall />
                    </span>
                    {contact?.contact ? `Call us: ${contact.contact}` : "Call us"}
                  </Link>
                </li>
                <li className="text-md">
                  <Link
                    href={`mailto:${contact?.email || ""}`}
                    className="flex gap-2">
                    <span className="text-xl text-primary">
                      <MdEmail />
                    </span>
                    {contact?.email ? `Email us: ${contact.email}` : "Email us"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="py-2 text-center font-regular items-center text-md text-primary">
          <span>© 2025 VORD. All Rights Reserved.</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
