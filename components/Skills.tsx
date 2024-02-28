import Image from "next/image";

const skills = [
  {
    title: "Languages",
    description: "javaScript CSS HTML",
  },
  {
    title: "Frameworks/Librarys",
    description: "React NextJs Express Redux",
  },
  {
    title: "Tools",
    description: "VS Code Figma Git Github",
  },
  {
    title: "Databases",
    description: "Firebase Mongo",
  },
];

function Skills() {
  return (
    <div className="text-[#abb2bf] mt-10">
      <div className="flex">
        <h1 className="text-white text-2xl md:text-4xl mb-2">
          <span className="text-[#c778dd]">#</span>skills
        </h1>
        <hr className="w-20 lg:w-60 mt-4 lg:mt-6" />
      </div>
      <div className="container flex flex-col gap-14 lg:gap-28 mt-5 lg:flex lg:w-full lg:flex-row  lg:m-20 md:items-center md:flex-row ">
        <Image
          width={500}
          height={500}
          className="m-5"
          src="/images/Skills.png"
          alt="skills section"
        />
        <div className="flex flex-col lg:flex lg:flex-row lg:flex-wrap ">
          {skills.map((link, index) => (
            <div key={index} className="border-[#c778dd] border-2  m-2 h-fit ">
              <h2 className="text-white border-[#c778dd] border-b-2 p-3">
                {link.title}
              </h2>
              <p className="p-3">{link.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
