import Link from "next/link";
import { FaNetworkWired } from "react-icons/fa";

const Network: React.FC = () => {
  return (
    <div className="mt-10 flex justify-center">
      <div className="bg-[#060507] w-full md:max-w-[70%] rounded-3xl overflow-hidden px-4 md:px-8 py-8 border border-zinc-800">
        <div className="flex items-center text-2xl md:text-3xl font-semibold leading-tight mb-4 text-white">
          <span>Tritan Internet (AS393577)</span>
          <FaNetworkWired className="text-indigo-500 ml-2" />
        </div>

        <p className="text-base md:text-lg text-gray-200 mb-8">
          AS393577 is a community-based, not-for-profit ISP that I founded and
          operate. Every aspect of the network is fully owned and built from
          scratch. We have a capacity of 60Gbps and are always looking to expand
          and improve our network. We have a presence in multiple data centers
          and IXPs. We offer services such as IP transit, colocation, and DDoS
          protection.
        </p>
        <p className="text-base md:text-lg text-gray-200 mb-8">
          We have a set of tools that we use to monitor and manage our network.
          You can learn more about them by clicking the buttons below.
        </p>

        <div className="flex flex-col md:flex-row">
          <Link
            href="https://tritan.gg/bgptools"
            className="bg-indigo-600 hover:bg-indigo-900 text-white font-semibold py-3 px-6 rounded-lg shadow-md inline-block border border-indigo-800 mb-2 md:mb-0 md:mr-2"
          >
            BGP.Tools
          </Link>
          <Link
            href="https://tritan.gg/looking-glass"
            className="bg-indigo-600 hover:bg-indigo-900 text-white font-semibold py-3 px-6 rounded-lg shadow-md inline-block border border-indigo-800 ml-0 md:ml-2"
          >
            Looking Glass
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Network;
