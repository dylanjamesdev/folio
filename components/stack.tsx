import { FaCode } from "react-icons/fa";

const Stack: React.FC = () => {
  return (
    <div className="mt-10 flex justify-center">
      <div className="bg-[#060507] w-full md:max-w-[70%] rounded-3xl overflow-hidden px-4 md:px-8 py-8 border border-zinc-800">
        <div className="flex items-center text-2xl md:text-3xl font-semibold leading-tight mb-4 text-white">
          <span>My Stack</span>
          <FaCode className="text-indigo-500 ml-2" />
        </div>

        <p className="text-base md:text-lg text-gray-200 mb-8">
          I like to work with the following technologies and tools.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#101013] border border-zinc-800 rounded-xl p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2 text-center">
              Frontend
            </h2>
            <p className="text-gray-300 text-center">
              React, Next, Tailwind, Reactstrap, Material UI, TypeScript,
              JQuery, EJS
            </p>
          </div>

          <div className="bg-[#101013] border border-zinc-800 rounded-xl p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2 text-center">
              Backend
            </h2>
            <p className="text-gray-300 text-center">
              Node.js, Typescript, Go, Express, Fiber, MongoDB, Redis
            </p>
          </div>

          <div className="bg-[#101013] border border-zinc-800 rounded-xl p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2 text-center">
              Misc
            </h2>
            <p className="text-gray-300 text-center">
              Perl, Dart, Bash, Jenkins, Arch, Debian, KVM, Proxmox, Docker
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
