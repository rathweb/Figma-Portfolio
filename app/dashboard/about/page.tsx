import About from "@/components/About";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <>
      <div className="flex p-2 pt-10 lg:p-20">
        <About />
      </div>
      <div className="p-2">
        <h1 className="text-white text-2xl lg:text-4xl ">
          <span className="text-[#c778dd] lg:ml-20">#</span>my-fun-facts
        </h1>
        <div className="px-5 lg:justify-between flex flex-col lg:flex lg:flex-row lg:mx-20 text-[#abb2bf] my-5">
          <div className="flex flex-wrap">
            <p className="border text-xs lg:text-base w-fit p-2 m-2 h-fit">I like summer more than winter</p>
            <p className="border text-xs lg:text-base w-fit p-2 m-2 h-fit">I like pizza and pasta</p>
            <p className="border text-xs lg:text-base w-fit p-2 m-2 h-fit">I am an introvert</p>
            <p className="border text-xs lg:text-base w-fit p-2 m-2 h-fit">I love watching anime nonstop</p>
            <p className="border text-xs lg:text-base w-fit p-2 m-2 h-fit">My background is not related to coding </p>
          </div>
          <div className="mt-10 lg:ml-20 lg:mt-0 md:ml-20">
            <Image width="200" height="200" src="/images/fun-fact.png" alt="fun" />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default page;
