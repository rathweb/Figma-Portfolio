import Image from "next/image";
import { socialMediaLinks } from "./Header";
import Link from "next/link";
import { FaCode } from "react-icons/fa6";

function Footer() {
  return (
    <div className="text-[#abb2bf] m-5 h-20 ">
      <div className=" flex sm:justify-between items-center">
        <div className=" justify-center flex flex-col">
          <div className="flex items-center gap-2 mt-5">
            <FaCode className="text-xl text-white " />
            <h1 className="text-white text-xl font-bold ">Rajveer</h1>
          </div>
          <p className="pt-5 text-xs sm:text-base">
            Web designer and full stack developer
          </p>
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl text-white">Media</h1>
          <div className="flex pt-2">
            {socialMediaLinks.map((link, index) => (
              <Link
                className="text-xl mx-2 text-white"
                href={link.href}
                key={index}
              >
                {link.src}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-center sm:text-base text-xs py-5 lg:pb-10">
        <p>© Copyright 2024 Made by Rajveer Singh</p>
        <p className="pt-3">
          This design was made by{" "}
          <a
            className="text-[#c778dd]"
            target="_"
            href="https://www.figma.com/@elias_dev"
          >
            Elias
          </a>{" "}
          you can check his other works
        </p>
      </div>
    </div>
  );
}

export default Footer;
