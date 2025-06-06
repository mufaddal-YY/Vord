"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoIosArrowDown } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import Link from "next/link";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Logo from "@/public/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const servicesData = [
  {
    name: "Linkedin Marketing & Optimization",
    link: "/linkedin-marketing-optimization",
  },
  {
    name: "Search Engine Optimization (SEO)",
    link: "/search-engine-optimization",
  },
  {
    name: "B2B Email Marketing",
    link: "/b2b-email-marketing",
  },
  {
    name: "Content Strategy & Creation",
    link: "/content-strategy-creation",
  },
  {
    name: "Paid Ads",
    link: "/paid-ads",
  },
];

const MobileNav = () => {
  return (
    <Sheet >
      <SheetTrigger asChild>
        <AlignJustify className="text-white cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="z-[1001] bg-primary">
        <SheetTitle></SheetTitle>
        <div className="grid py-4 mt-4 list-none space-y-2 ">
          <Link
            href={"/"}
            className="text-md font-semibold text-white px-4 py-2 ease-in-out">
            <SheetClose>Home</SheetClose>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <span className="text-md cursor-pointer flex flex-row items-center gap-2 font-semibold text-white px-4 py-2 transition-colors duration-600 ease-in-out">
                Services <IoIosArrowDown />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-106">
              <DropdownMenuGroup>
                {servicesData.map((items) => (
                  <DropdownMenuSub key={items.name}>
                    <Link
                      className="cursor-pointer"
                      href={`/services/${items.link}`}>
                      <DropdownMenuItem>
                        <span>{items.name}</span>
                      </DropdownMenuItem>
                    </Link>
                  </DropdownMenuSub>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href={"/about"}
            className="text-md font-semibold text-white px-4 py-2">
            <SheetClose>About</SheetClose>
          </Link>

          <Link
            href={"/contact"}
            className="text-md font-semibold text-white px-4 py-2">
            <SheetClose>Contact</SheetClose>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
