import Image from "next/image";


function Contacts() {
  return (
    <div className="text-[#ABB2BF] mt-20 lg:mt-28 mb-28 flex flex-col ">
      <div className="flex lg:container ">
        <h1 className="text-white text-2xl lg:text-4xl">
          <span className="text-[#c778dd]">#</span>contact-me
        </h1>
        <hr className="w-20 lg:w-60 mt-5 lg:mt-6" />
      </div>
      <div className="lg:justify-between mt-5 text-xs px-5 md:text-base lg:text-base lg:flex lg:flex-row lg:gap-40">
        <p className="lg:pl-28">
          I&apos;m interested in freelance opportunities. However, <br /> if you
          have other requests or questions, don&apos;t <br /> hesitate to
          contact me.
        </p>

        <div className="flex flex-col border-2 p-4 mt-10 lg:m-0 ">
          <h2 className="text-white text-xl">Message me here</h2>
          <div className="flex mt-2">
            <Image width="20" height="10" src="/images/mail.png" alt="mail icon" />
           
              rajveerramgarhiya@gmail.com
          </div>
          
        </div>
          
      </div>
    </div>
  );
}

export default Contacts;
