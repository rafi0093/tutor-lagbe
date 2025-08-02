import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-purple-100 text-center py-4 mt-10 text-sm text-gray-700">
      <p className="mb-2">
        ✨ Developed by <span className="font-semibold text-purple-700">Tasnimul Hasan Rafi | @2025</span>
      </p>
      <div className="flex justify-center gap-4 text-xl text-purple-700">
        <a
          href="https://www.facebook.com/share/1Dwj5z2yew/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition"
        >
          <FaFacebook />
        </a>
        <a
          href="https://github.com/rafi0093"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-800 transition"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
