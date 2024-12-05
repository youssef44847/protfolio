import React from "react";
import { Link } from "react-router-dom";

export default function Nav_L() {
  return (
    
      <nav className="fixed top-0 left-0 flex items-center flex-col w-1/5 h-full bg-[#f5f5f5] py-12">
        <div className="w-40 h-40 overflow-hidden rounded-full mb-6">
          <img
            className="w-full h-full object-cover"
            src="/ff.jpg"
            alt="profile"
          />
        </div>
        <h2 className="text-2xl font-bold mb-2">Jackson Ford</h2>
        <h6 className="text-gray-500 mb-8">UI/UX/Designer in Philippines</h6>
        <div className="flex flex-col gap-3 w-full px-6">
          <Link
            to="/home"
            className="text-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="/skills"
            className="text-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            Skills
          </Link>
          <Link
            to="/experience"
            className="text-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            Experience
          </Link>
          <Link
            to="/work"
            className="text-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            Work
          </Link>
        </div>
    </nav>
  );
}
