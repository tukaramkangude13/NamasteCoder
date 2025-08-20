import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhone, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-900 via-green-700 to-green-800 text-gray-200 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Pune Office */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-white text-center md:text-left">
            Pune Office
          </h3>
        <p className="flex items-start gap-3 mb-4 max-w-md mx-auto md:mx-0">
  <FaMapMarkerAlt className="mt-1 text-green-300 shrink-0" />
  <a
    href="https://www.google.com/maps?q=CRVX+HMM,+Indrayani+nagar,+Shani+Nagar,+Ambegaon+Budruk,+Pune,+Maharashtra+411046"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    CRVX+HMM, Indrayani nagar, Shani Nagar, Ambegaon Budruk, Pune, Maharashtra 411046
  </a>
</p>

<p className="flex items-center gap-3 mb-4 max-w-md mx-auto md:mx-0">
  <FaPhone className="text-green-300 shrink-0" />
  <a href="tel:7620068689" className="hover:underline">
    7620068689
  </a>
</p>

        </div>

        {/* Divider */}
        <hr className="border-green-600 mb-10" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-gray-300 text-sm px-4">
          <p>© Namaste Coder Center | All Rights Reserved</p>
          <p className="flex items-center gap-2 hover:text-white transition cursor-pointer">
            <FaEnvelope className="text-green-400" />
            <a href="mailto:namastecoder61@gmial.com" className="hover:underline">

namastecoder61@gmial.com            </a>
          </p>
          <div className="flex gap-6 text-green-400">
            <a href="https://www.facebook.com/unnatiithub?ref=tn_tnmn" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com/ashutoshbhakare" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-white transition">
              <FaTwitter size={20} />
            </a>
            <a href="https://www.linkedin.com/in/abhakare/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
