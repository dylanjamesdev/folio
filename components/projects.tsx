import Image from "next/image";
import Link from "next/link";
import { projects } from "@static";
import { FaCodeCommit } from "react-icons/fa6";

const Projects: React.FC = () => {
  return (
    <div className="mt-10 flex justify-center">
      <div className="bg-[#060507] w-full md:max-w-[70%] rounded-3xl overflow-hidden px-36 py-8 border border-zinc-800">
        <div className="flex items-center text-3xl font-semibold leading-tight mb-4 text-white">
          <span>Projects</span>
          <FaCodeCommit className="text-indigo-500 ml-2" />
        </div>
        <p className="text-lg md:text-xl text-gray-200 mb-8 text-left">
          Here are some of the projects I&apos;ve worked on. Click the button to
          view the project.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#101013] rounded-xl p-6">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="rounded-xl mb-4"
              />
              <h2 className="text-xl font-semibold text-white mb-2 text-center">
                {project.title}
              </h2>
              <p className="text-gray-300 text-center">{project.description}</p>
              <div className="mt-4 text-center">
                <Link
                  href={project.link}
                  className="bg-[#3a3a3b] hover:bg-[#2e2e2e] text-white font-semibold py-2 px-4 rounded-lg shadow-md inline-block"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
