import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container mx-auto w-full md:max-w-[70%] rounded-3xl text-white mt-8">
      <div className=" flex justify-between items-center  py-4 px-4">
        <div>
          <p>&copy; 2024 Tritan Internet LLC. All rights reserved.</p>
        </div>
        <div>
          <Link
            href="https://tritan.gg/contact"
            className="text-gray-300 hover:text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
