"use client";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { FaCode } from "react-icons/fa6";
import { navigationItems, socialMediaLinks } from "./Header";


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
              <div className="flex items-center cursor-pointer -mt-8">
                <FaCode className="text-white text-xl"/>
                <Link href="/">
                  <h1 onClick={closeMenu} className="text-white text-xl font-bold pl-2">Rajveer</h1>
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
              <ul className="flex gap-10 mt-40 ml-10 ">
                {socialMediaLinks.map((link, index) => (
                  <li key={index} >
                    <Link href={link.href} className="text-white text-3xl" >
                      {link.src}
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
