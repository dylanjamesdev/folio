import Link from "next/link";
import { FaInfoCircle } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <div className="mt-10 flex justify-center">
      <div className="bg-[#060507] w-full md:max-w-[70%] rounded-3xl overflow-hidden px-4 md:px-8 py-8 border border-zinc-800">
        <div className="flex items-center text-2xl md:text-3xl font-semibold leading-tight mb-4 text-white">
          <span>About Me</span>
          <FaInfoCircle className="text-indigo-500 ml-2" />
        </div>

        <p className="text-base md:text-lg text-gray-200 mb-2">
          Simply put, I&apos;m a hobbyist Network Engineer and Software
          Developer. I have a passion for networking and software development.
        </p>

        <p className="text-base md:text-lg text-gray-200 mb-8">
          I&apos;m also the owner of{" "}
          <Link className="text-indigo-500" href="https://tritan.gg">
            Tritan Internet
          </Link>
          , a tier 2 enterprise level ISP and hosting provider, that provides
          connectivity to hard to reach areas. We are also a software
          development company that specializes in web development and network
          automation, with an emphasis on open source projects.
        </p>

        <div className="text-center md:text-left">
          <Link
            href="https://tritan.gg/about"
            className="bg-indigo-600 hover:bg-indigo-900 text-white font-semibold py-3 px-6 rounded-lg shadow-md inline-block border border-indigo-800"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
