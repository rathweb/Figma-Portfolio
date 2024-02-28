import Image from "next/image";
import Link from "next/link";
import Hamburger from "./Hamburger";

const socialMediaLinks = [
  {
    href: "https://github.com/rathweb",
    src: "/images/github.png",
    alt: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/rajveer-singh-994441186/",
    src: "/images/linkdin.png",
    alt: "LinkedIn",
  },
  {
    href: "https://twitter.com/rj_singh7552",
    src: "/images/twitter.png",
    alt: "Twitter",
  },
  {
    href: "https://www.instagram.com/singh_rajveer021/",
    src: "/images/insta.png",
    alt: "Instagram",
  },
];

const navigationItems = [
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
        <div className="bg-[#282C33] container fixed m-auto h-14 pt-5">
          <div className="fixed flex flex-col -mt-5 ">
            <Image width={2} height={2} src="/images/Line.png" alt="Header line" />
            {socialMediaLinks.map((link, index) => (
              <a key={index} href={link.href}>
                <Image
                  width="20"
                  height="20"
                  className="pt-5 mr-1 cursor-pointer"
                  src={link.src}
                  alt={link.alt}
                />
              </a>
            ))}
          </div>

          <div className="container flex justify-between ">
            <div className="flex cursor-pointer items-center">
              <Image src="/images/Logo3.png" width="30" height="30" alt="Logo" />
              <h1 className="text-white text-xl font-bold mb-3 pl-1">Rajveer</h1>
            </div>

            <ul className="flex text-[#ABB2BF] text-xl justify-between mr-20 cursor-pointer">
              {navigationItems.map((item, index) => (
                <li key={index} className="pr-10 hover:text-white">
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

