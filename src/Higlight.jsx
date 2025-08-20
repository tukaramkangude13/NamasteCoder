import React from "react";
import { FaChalkboardTeacher, FaLaptopCode, FaUserTie, FaGlobe } from "react-icons/fa";
import { HIGHLIGHT_IMAGE } from "./utils/images";

const Highlight = () => {
  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-12 bg-gray-50">
      {/* Heading */}
      <h1 className="text-center font-extrabold text-3xl sm:text-4xl md:text-5xl text-gray-800 mb-8 sm:mb-12">
        Highlights of <span className="text-blue-600">Namaste Coder</span>
      </h1>

      {/* Responsive Grid (Mobile = 1 col, Tablet/Desktop = 2 cols) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
        
        {/* Text Section */}
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-4 bg-white p-4 sm:p-5 rounded-lg shadow hover:shadow-lg transition">
            <FaChalkboardTeacher className="text-blue-600 text-xl sm:text-2xl mt-1" />
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              Expert Guidance, Mock Interviews, Skill Tests, and Personalized
              Training to make you employable in the latest skill domains.
            </p>
          </div>

          <div className="flex items-start gap-4 bg-white p-4 sm:p-5 rounded-lg shadow hover:shadow-lg transition">
            <FaLaptopCode className="text-green-600 text-xl sm:text-2xl mt-1" />
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              BYOD (Bring Your Own Device) support for every course, including
              dedicated lab hours.
            </p>
          </div>

          <div className="flex items-start gap-4 bg-white p-4 sm:p-5 rounded-lg shadow hover:shadow-lg transition">
            <FaUserTie className="text-purple-600 text-xl sm:text-2xl mt-1" />
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              International Corporate Trainers with world-class technical experience.
            </p>
          </div>

          <div className="flex items-start gap-4 bg-white p-4 sm:p-5 rounded-lg shadow hover:shadow-lg transition">
            <FaGlobe className="text-red-600 text-xl sm:text-2xl mt-1" />
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              Unique SDM (Skill Development Mission) Scheme offering Global
              Level Training & Certification.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center sm:justify-end">
          <img
            src={HIGHLIGHT_IMAGE}
            alt="Highlight"
            className="rounded-lg shadow-lg w-full sm:w-3/4 md:w-4/5 lg:w-4/5 h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Highlight;
