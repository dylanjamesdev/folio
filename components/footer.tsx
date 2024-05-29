import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#060507]  container mx-auto w-full md:max-w-[70%] rounded-3xl text-white mt-8 p-8 border border-zinc-800">
      <div className="flex justify-between items-start">
        <div className="transition-transform duration-500 ease-in-out transform hover:scale-105">
          <p className="py-3">Made with ❤️‍🔥 by Dylan James</p>
          <Link
            href="https://github.com/team-tritan/portfolio-2024"
            className="text-indigo-400 underline"
          >
            src
          </Link>
        </div>
        <div className="flex space-x-8">
          <div>
            <p className="text-gray-300 font-semibold underline">Me</p>
            <ul className="text-gray-300">
              <li>
                <Link
                  href="https://tritan.gg/contact"
                  className="hover:text-indigo-400 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/dylanjamesdev"
                  className="hover:text-indigo-400 transition-colors duration-300"
                >
                  Github
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-gray-300 font-semibold underline">Tritan</p>
            <ul className="text-gray-300">
              <li>
                <Link
                  href="https://tritan.gg"
                  className="hover:text-indigo-400 transition-colors duration-300"
                >
                  Website
                </Link>
              </li>
              <li>
                <Link
                  href="https://tritan.gg/discord"
                  className="hover:text-indigo-400 transition-colors duration-300"
                >
                  Discord
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
