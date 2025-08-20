import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="bg-blue-700 text-white shadow-md sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
       <Link to="/" onClick={handleLinkClick} className="flex items-center space-x-3">
  <img
    src="https://img.freepik.com/premium-vector/minimalist-success-logo-vector-art-illustration-20_554682-10191.jpg"
    alt="Logo"
    className="h-16 w-20 filter drop-shadow-md"
  />
  <p className="text-white text-2xl font-extrabold tracking-wide select-none">
    Namaste Coder
  </p>
</Link>


        {/* Desktop Navigation + Phone */}
        <nav className="hidden md:flex items-center space-x-8 text-lg tracking-wide font-medium">
          <Link to="/" className="hover:text-gray-300 transition-colors duration-200">
            Home
          </Link>
          <Link to="/courses" className="hover:text-gray-300 transition-colors duration-200">
            Courses
          </Link>
          <Link to="/services" className="hover:text-gray-300 transition-colors duration-200">
            Services
          </Link>
          <Link to="/contact" className="hover:text-gray-300 transition-colors duration-200">
            Contact
          </Link>
          {/* Phone Number as Button Style */}
          <a
            href="tel:7620068689"
            className="flex items-center bg-green-500 px-4 py-2 rounded-lg font-semibold text-white hover:bg-green-600 transition-colors duration-200"
          >
            <FaPhone className="mr-2" />
            7620068689
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-blue-600 overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-6 space-y-4 font-medium text-white text-lg">
          <Link to="/" onClick={handleLinkClick} className="hover:text-gray-300 transition-colors duration-200">
            Home
          </Link>
          <Link to="/courses" onClick={handleLinkClick} className="hover:text-gray-300 transition-colors duration-200">
            Courses
          </Link>
          <Link to="/services" onClick={handleLinkClick} className="hover:text-gray-300 transition-colors duration-200">
            Services
          </Link>
          <Link to="/about" onClick={handleLinkClick} className="hover:text-gray-300 transition-colors duration-200">
            About
          </Link>
          <Link to="/contact" onClick={handleLinkClick} className="hover:text-gray-300 transition-colors duration-200">
            Contact
          </Link>
          <a
            href="tel:7620068689"
            className="flex items-center justify-center gap-2 bg-green-500 px-4 py-3 rounded-lg font-semibold text-white hover:bg-green-600 transition-colors duration-200"
            onClick={handleLinkClick}
          >
            <FaPhone />
            7620068689
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
