import React from "react";
import { Link } from "react-router-dom";

export default function Work() {
  return (
    <>
      <h6>MY WORK</h6>
      <h2>RECENT WORK</h2>
      <div className="flex flex-row mt-8">
        <Link
          to="/work/graphic_design"
          className="me-4 text-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
        >
          Graphic Design
        </Link>
        <Link
          to="/work/apps"
          className="me-4 text-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
        >
          Apps
        </Link>
        <Link
          to="/work/software"
          className="me-4 text-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
        >
          Software
        </Link>
      </div>
    </>
  );
}
