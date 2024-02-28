"use client";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const socialMediaLinks = [
  {
    href: "https://github.com/rathweb",
    src: "/images/Github.png",
    alt: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/rajveer-singh-994441186/",
    src: "/images/Linkdin.png",
    alt: "LinkedIn",
  },
  {
    href: "https://twitter.com/rj_singh7552",
    src: "/images/X.png",
    alt: "Twitter",
  },
  {
    href: "https://www.instagram.com/singh_rajveer021/",
    src: "/images/Insta.png",
    alt: "Instagram",
  },
];

const navigationItems = [
  { href: "/", label: "home" },
  { href: "/dashboard/works", label: "works" },
  { href: "/dashboard/about", label: "about-me" },
  { href: "/dashboard/contact", label: "contacts" },
];

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
      <div className="flex fixed lg:hidden w-full ">
        <div className="flex ">
          <div className="gap-72 flex">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className={`flex text-white transform transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="m-1 h-8 w-8" aria-hidden="true" />
          </button>
          </div>

          {isOpen ? (
            <div className=" bg-[#282c33] text-[#ABB2BF] absolute border border-[#C778DD] p-4 h-lvh w-full">
              <div className="ml-80">
                <button
                  type="button"
                  className=" rounded-md p-2.5 text-white "
                  onClick={() => setIsOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="-ml-5 -mt-8 h-8 w-8 " aria-hidden="true" />
                </button>
              </div>
              <div className="flex cursor-pointer -mt-8">
                <Image
                className="text-white -mt-3 -ml-2"
                  src="/images/Logo3.png"
                  width="30"
                  height="30"
                  alt="Logo"
                />
                <Link href="/">
                  <h1 onClick={closeMenu} className="text-white text-xl font-bold pl-1 -mt-2">Rajveer</h1>
                </Link>
              </div>
              <ul onClick={closeMenu} className="mt-12 flex flex-col gap-10 text-[#ABB2BF] text-4xl">
                {navigationItems.map((item, index) => (
                  <li key={index} className=" hover:text-white">
                    <Link href={item.href}>
                      <h1>
                        <span className="text-[#C778DD]">#</span>
                        {item.label}
                      </h1>
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex gap-4 mt-40 ml-10 ">
                {socialMediaLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>
                      <Image
                        width={40}
                        height={40}
                        className="pt-5 mr-1 cursor-pointer"
                        src={link.src}
                        alt={link.alt}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <span className="sr-only">Open main menu</span>
          )}
        </div>
      </div>
  );
};

export default Hamburger;
