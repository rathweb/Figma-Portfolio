import Image from "next/image";
import { socialMediaLinks } from "./Header";
import Link from "next/link";
import { FaCode } from "react-icons/fa6";

function Footer() {
  return (
    <div className="text-[#abb2bf] m-5 h-20 ">
      <div className=" flex  lg:justify-between md:justify-between gap-10">
        <div className="cursor-pointer">
          <FaCode className="text-xl text-white"/>
          <h1 className="text-white text-xl font-bold pl-2 -mt-8 ml-3">Rajveer</h1>
          <div className="flex flex-wrap">
            <p className="pt-5 text-xs">
              Web designer and full stack developer
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl text-white">Media</h1>
          <div className="flex pt-2">
           {socialMediaLinks.map((link, index)=>(
            <Link href={link.href} key={index}>{link.src}</Link>
           ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-xs py-5 lg:pb-10">
        <p>© Copyright 2024 Made by Rajveer Singh</p>
        <p className="pt-3">This design was made by <a className="text-[#c778dd]" target="_" href="https://www.figma.com/@elias_dev">Elias</a> you can check his other works</p>
      </div>
    </div>
  );
}

export default Footer;
