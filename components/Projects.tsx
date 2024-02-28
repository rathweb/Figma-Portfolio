import Image from "next/image";
import data from "../projects.json"

const card = data.map(item => ({
  title: item.title,
  description: item.description,
  src: item.src,
  alt: item.alt,
  projectLink: item.projectLink,
  tech: item.tech
}));

function Projects() {
  return (
    <div className="lg:container">
      <div className="flex items-center">
        <h1 className="lg:-ml-8 text-white text-2xl lg:text-4xl mt-10">
          <span className="text-[#c778dd]">#</span>projects
        </h1>
        <hr className="w-20 lg:w-60  mt-12" />
      </div>

      <div className="p-5 flex flex-col mt-10 w-full lg:flex lg:flex-row">
        {card.map((link, index) => (
          <div  key={index} className="overflow-hidden shadow-lg m-2 lg:w-1/3 h-full">
            <Image
              width={500}
              height={500}
             
              className="w-full md:h-1/2"
              src={link.src}
              alt={link.src}
            />
            <div className="px-6 py-4 text-[#abb2bf]">
              <p
                className="text-xs"
                style={{ borderBottom: "1px solid white" }}
              >
                {link.tech}
              </p>
              <div className="font-semibold text-xl text-white mb-4 mt-4">
                {link.title}
              </div>
              <p className="text-xs md:text-base lg:text-base">
                {link.description}
              </p>
              <a target="_" href={link.projectLink}>
                <button className="text-white hover:bg-[#c778dd] border px-2 mt-2 text-sm">
                  Visit <span className="text-xl">⇝</span>
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Projects;
