import React, { useState } from "react";
// import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/images/logo,icons/GearX.png";
import { NavLink } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(() => {
    let tl = gsap.timeline();

    tl.from(".TopNavfirst", {
      opacity: 0,
      x: "-20px",
      stagger:.4,
      duration: 0.3,
    });

    gsap.from(".header", {
      opacity: 0,
      Y: "-50px",
      duration: .3,
    });

    tl.from(".TopNavSecond", {
      opacity: 0,
      y: "-30px",
      
      duration: 0.3,
      stagger:.1
    });

    gsap.from(".hamberger",{
      opacity:0,
      x:"20px",
      duration:.8,

    })

    tl.from(".menuItems",{
      opacity:0,
      x:"30px",
      duration:.3,
      stagger:.1

    })

    tl.from(".closeButton",{
      rotate:"360deg",
      scale:0,
      duration:.7,
      delay:.1

    })
   



  });

  return (
    <header className="header fixed top-0 right-0 w-full z-30">
      {/* Top Bar */}
      <div className="bg-red-500 text-white py-2 px-4">
        <div className="max-w-full mx-auto flex items-center justify-between text-sm px-7">
          {/* Offer Headline */}
          <p className=" TopNavfirst font-medium text-xs">
            🛍️ 35% Off on Each Product!
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="TopNavSecond hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="TopNavSecond hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="TopNavSecond hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="TopNavSecond hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className=" bg-black text-white">
        <div className="max-w-8xl mx-auto px-3 sm:px-6 lg:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src={logo} // Replace with your logo URL
                alt="Logo"
                className=" TopNavfirst w-[100px] lg:w-40"
              />
            </div>

            {/* Navigation Links (Desktop) */}
            <div className="hidden md:flex space-x-6">
              <NavLink
                to="/home"
                className="TopNavSecond text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="TopNavSecond text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className=" TopNavSecond text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
              >
                Services
              </NavLink>
              <NavLink
                to="/contact"
                className="TopNavSecond text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
              >
                Contact
              </NavLink>
            </div>

            {/* Contact Us Button (Desktop) */}
            <div className="hidden md:block">
              <a
                href="#contact"
                className="TopNavSecond bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md text-sm"
              >
                Contact Us
              </a>
            </div>
            <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="text-gray-300 hover:text-white focus:outline-none"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="hamberger h-6 w-6"
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

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center space-y-8 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-gray-300 hover:text-white focus:outline-none"
        >
          <svg
            className="closeButton h-9 w-9"
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

        {/* Navigation Links */}
        <NavLink
          to="#home"
          className="menuItems text-gray-300 hover:text-white text-xl font-medium"
        >
          Home
        </NavLink>
        <NavLink
          to="#about"
          className="menuItems text-gray-300 hover:text-white text-xl font-medium"
        >
          About
        </NavLink>
        <NavLink
          to="#services"
          className="menuItems text-gray-300 hover:text-white text-xl font-medium"
        >
          Services
        </NavLink>
        <NavLink
          to="#contact"
          className="menuItems text-gray-300 hover:text-white text-xl font-medium"
        >
          Contact
        </NavLink>
        <NavLink
          to="#contact"
          className="menuItems bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-md text-xl"
        >
          Contact Us
        </NavLink>
      </div>
          </div>
        </div>

      
      </nav>
    </header>
  );
};

export default Navigation;
