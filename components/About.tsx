import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <>
      <div className="text-[#abb2bf] mt-10">
        <div className="flex ">
          <h1 className="text-white text-2xl lg:text-4xl mb-2">
            <span className="text-[#c778dd]">#</span>about-me
          </h1>
          <hr className="w-20 lg:w-60 mt-4 lg:mt-6" />
        </div>
        <div className="lg:flex flex-col lg:flex-row lg:mt-10 mt-5 lg:m-20">
          <p className="text-xs md:text-base lg:text-base mx-5 md:mx-0 md:text-left">
            Hello, I&apos;m Rajveer! <br /> <br /> I&apos;m a self-taught
            full-stack developer based in Rajasthan, India. I can develop
            responsive websites from scratch and raise them into modern
            user-friendly web experiences. <br /> <br />
            Transforming my creativity and knowledge into websites has been my
            passion for over a year. I have been helping various clients
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
            <br />
            <Link href="/dashboard/contact">
              <Button
                style={{ border: "1px solid #c778dd", borderRadius: "0" }}
                className="mt-5 bg-[#282c33] hover:bg-[#C778DD]"
              >
                Hire me!
              </Button>
            </Link>
          </p>
          <Image
           width={200}
           height={200}
            className="mb-5 ml-20 lg:ml-20 lg:w-1/3 lg:-mt-28 w-1/2 "
            src="/images/about-me.png"
            alt="about"
          />
        </div>
      </div>
    </>
  );
}

export default About;
