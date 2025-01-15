import React, { useState } from "react";
// import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/images/logo,icons/GearX.png";
import {NavLink} from 'react-router-dom'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-red-500 text-white py-2 px-4">
        <div className="max-w-full mx-auto flex items-center justify-between text-sm px-">
          {/* Offer Headline */}
          <p className="font-medium text-xs">🛍️ 35% Off on Each Product!</p>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-black text-white">
        <div className="max-w-8xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src={logo} // Replace with your logo URL
                alt="Logo"
                className="w-[100px] lg:w-40"
              />
            </div>

            {/* Navigation Links (Desktop) */}
            <div className="hidden md:flex space-x-6">
              <NavLink
                to="/home"
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
              >
                Services
              </NavLink>
              <NavLink
                to="/contact"
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
              >
                Contact
              </NavLink>
            </div>

            {/* Contact Us Button (Desktop) */}
            <div className="hidden md:block">
              <a
                href="#contact"
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md text-sm"
              >
                Contact Us
              </a>
            </div>

            {/* Hamburger Menu (Mobile) */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center space-y-8">
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-gray-300 hover:text-white"
            >
              <svg
                className="h-9 w-9"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <NavLink
              href="#home"
              className="text-gray-300 hover:text-white text-xl font-medium"
            >
              Home
            </NavLink>
            <NavLink
              href="#about"
              className="text-gray-300 hover:text-white text-xl font-medium"
            >
              About
            </NavLink>
            <NavLink
              href="#services"
              className="text-gray-300 hover:text-white text-xl font-medium"
            >
              Services
            </NavLink>
            <NavLink
              href="#contact"
              className="text-gray-300 hover:text-white text-xl font-medium"
            >
              Contact
            </NavLink>
            <NavLink
              href="#contact"
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-md text-xl"
            >
              Contact Us
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;