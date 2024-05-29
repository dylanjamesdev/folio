import Link from "next/link";
import { FaInfoCircle } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <div className="mt-10 flex justify-center">
      <div className="bg-[#060507] w-full max-w-[70%] rounded-3xl overflow-hidden px-4 md:px-8 py-8 md:py-12 border border-zinc-800 flex flex-col md:flex-row items-center relative">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="flex items-center text-2xl md:text-3xl font-semibold leading-tight mb-4 text-white">
            <span>About Me</span>
            <FaInfoCircle className="text-indigo-500 ml-2" />
          </div>

          <p className="text-base md:text-lg text-gray-200 mb-8">
            Simply put, I&apos;m a hobbyist Network Engineer and Software
            Developer. I have a passion for networking and software development.
            I have experience with various technologies and programming
            languages. I&apos;m always looking to learn and improve my skills.
          </p>
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
