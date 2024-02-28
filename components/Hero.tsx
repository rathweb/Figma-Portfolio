import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="mt-20 ">
      <div className="flex flex-col lg:flex-row mt-10 justify-center items-center text-white lg:gap-12 ">
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl lg:text-4xl lg:w-full">
            Rajveer is a <span className="text-[#c778dd]">web designer </span>
            and <br /> <span className="text-[#C778DD]">full-stack developer</span>
          </h1>
          <p className="mt-10 text-[#ABB2BF]">
            He crafts responsive websites where technologies <br /> meet creativity
          </p>
          <Link href="dashboard/contact"><Button className="bg-[#282c33] hover:bg-[#C778DD] w-36 mt-5"
           style={{border:"1px solid #c778dd", borderRadius:"0"}} >Contact me!!</Button></Link>
        </div>
        <div className="text-white flex flex-col mt-5">
          <Image width={500} height={500} className="" src="/images/hero.png" alt="hero image" />
          <p className="border mt-5 p-1">Currently working on my Portfolio :)</p>
        </div>
      </div>
        <div className="text-white mt-10 flex flex-wrap lg:flex lg:flex-col">
          <p className="border p-2 mx-auto my-2 text-xl ">With great knowledge comes great websites :)</p>
        </div>
    </div>
  );
}

export default Hero;
