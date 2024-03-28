import Image from "next/image";
import Link from "next/link";
import Hamburger from "./Hamburger";

import {
  FaCode,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

export const socialMediaLinks = [
  {
    href: "https://github.com/rathweb",
    src: <FaGithub />,
    alt: "github",
  },
  {
    href: "https://www.linkedin.com/in/rajveer-singh-994441186/",
    src: <FaLinkedin />,
    alt: "linkdin",
  },
  {
    href: "https://twitter.com/rj_singh7552",
    src: <FaXTwitter />,
    alt: "Twitter",
  },
  {
    href: "https://www.instagram.com/singh_rajveer021/",
    src: <FaInstagram />,
    alt: "Instagram",
  },
];

export const navigationItems = [
  { href: "/", label: "home" },
  { href: "/dashboard/works", label: "works" },
  { href: "/dashboard/about", label: "about-me" },
  { href: "/dashboard/contact", label: "contacts" },
];

function Header() {
  return (
    <header>
      <Hamburger />
      <nav className="hidden lg:block">
        {" "}
        {/* Hide on screens smaller than md */}
        <div className="container fixed m-auto h-14 pt-5 bg-[#282C33] backdrop-filter shadow-md">
          <div className="fixed flex flex-col justify-center -mt-5 ">
            <Image
              width={2}
              height={2}
              src="/images/Line.png"
              alt="Header line"
              className="ml-2"
            />
            {socialMediaLinks.map((link, index) => (
              <Link
                key={index}
                className="text-white text-xl py-3 "
                target="_"
                href={link.href}
              >
                {link.src}
              </Link>
            ))}
          </div>

          <div className="container flex justify-between ">
            {/* <div className="flex cursor-pointer items-center"> */}
              {/* <FaCode className="text-white text-xl" /> */}
              <Image width={24} height={24} className="w-16 -mt-6 " src="/logo.svg" alt="logo"/>
              {/* <h1 className="text-white text-xl -mt-5 font-bold pl-1">Rajveer</h1> */}
            {/* </div> */}

            <ul className="flex text-[#ABB2BF] text-xl justify-between cursor-pointer">
              {navigationItems.map((item, index) => (
                <li key={index} className="pr-10 text-white hover:text-[#c778dd]">
                  <Link href={item.href}>
                    <h1>
                      <span className="text-[#C778DD]">#</span>
                      {item.label}
                    </h1>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
