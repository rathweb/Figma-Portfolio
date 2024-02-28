import Image from "next/image";
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

function Footer() {
  return (
    <div className="text-[#abb2bf] m-5 h-20 ">
      <div className=" flex  lg:justify-between md:justify-between gap-10">
        <div className="cursor-pointer">
          <Image className="" src="/images/Logo3.png" width="20" height="20" alt="logo" />
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
            <a target="_" key={index} href={link.href}>
              <Image className="m-2" width={20} height={20} src={link.src} alt={link.alt} />
            </a>
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
