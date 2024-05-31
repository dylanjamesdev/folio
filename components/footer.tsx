import React from "react";
import Link from "next/link";
import { FooterLinks } from "@static";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#060507] container mx-auto w-full md:max-w-[70%] rounded-3xl text-white mt-8 p-8 border border-zinc-800">
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
          {Object.entries(FooterLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-gray-300 font-semibold underline">
                {category}
              </p>
              <ul className="text-gray-300">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="hover:text-indigo-400 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
