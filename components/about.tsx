import Link from "next/link";
import { FaInfoCircle } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <div className="mt-10 flex justify-center">
      <div className="bg-[#060507] w-full md:max-w-[70%] rounded-3xl overflow-hidden px-36 py-8 border border-zinc-800 flex flex-col md:flex-row items-center relative">
        <div className="md:w-1/2 text-left md:text-left">
          <div className="flex items-center text-3xl font-semibold leading-tight mb-4 text-white">
            <span>About Me</span>
            <FaInfoCircle className="text-indigo-500 ml-2" />
          </div>

          <p className="text-lg md:text-xl text-gray-200 mb-8">
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
