import { FaCode } from "react-icons/fa";

const Stack: React.FC = () => {
  return (
    <div className="mt-10 flex justify-center">
      <div className="bg-[#060507] w-full md:max-w-[70%] rounded-3xl overflow-hidden px-36 py-8 border border-zinc-800 flex flex-col md:flex-row items-center relative">
        <div className="md:w-1/2 text-left md:text-left">
          <div className="flex items-center text-3xl font-semibold leading-tight mb-4 text-white">
            <span>My Stack</span>
            <FaCode className="text-indigo-500 ml-2" />
          </div>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            I like to work with the following technologies and tools.
          </p>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-[30%] bg-[#101013] rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-2 text-center">
                Frontend
              </h2>
              <p className="text-gray-300 text-center">
                React, Next, Tailwind, Reactstrap, Material UI, TypeScript,
                JQuery, EJS
              </p>
            </div>

            <div className="w-full md:w-[30%] bg-[#101013] rounded-xl p-6 mt-4 md:mt-0">
              <h2 className="text-xl font-semibold text-white mb-2 text-center">
                Backend
              </h2>
              <p className="text-gray-300 text-center">
                Node.js, Typescript, Go, Express, Fiber, MongoDB, Redis
              </p>
            </div>

            <div className="w-full md:w-[30%] bg-[#101013] rounded-xl p-6 mt-4 md:mt-0">
              <h2 className="text-xl font-semibold text-white mb-2 text-center">
                Misc
              </h2>
              <p className="text-gray-300 text-center">
                Perl, Dart, Bash, Jenkins, Arch, Debian, KVM, Proxmox, Docker
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
