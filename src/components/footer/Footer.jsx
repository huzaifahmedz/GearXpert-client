import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo,icons/GearX.png";
import Mastercard from "../../assets/images/footer_images/Mastercard-logo.svg.png";
// import visa from "../../assets/images/logo,icons/Visa.svg";
import paypal from "../../assets/images/footer_images/PayPal.svg.png";

const Footer = () => {
  const handleSubscribe = () => {
    alert("Thank you for subscribing to our newsletter!");
  };

  return (
    <footer className="bg-black text-gray-300 p-7">
      {/* Newsletter Section */}
      <div className="container mx-auto py-8 px-5 border-b border-gray-700">
        <div className="flex flex-col md:flex-row items-center justify-between bg-black p-6 rounded-lg shadow-lg">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-sm text-gray-400">
              Stay updated on the latest autoparts offers and updates.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:flex-row justify-center items-center space-x-4">
            <input
              type="email"
              id="newsletter"
              placeholder="Enter your email"
              className="p-3 rounded bg-gray-700 text-white focus:ring-2 focus:ring-red-500 outline-none"
            />
            <button
              onClick={handleSubscribe}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded font-bold"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:place-items-center">
          <img src={logo} alt="GearXpert Logo" className="w-32 h-auto mb-4" />
          <p className="text-sm w-48  text-center md:text-left">
            Your trusted partner for high-quality autoparts.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold text-white mb-4">Quick Links</h2>
          <nav className="list-none space-y-2">
            <li>
              <Link
                to="/car-accessories"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:text-red-500 transition-colors"
              >
                Car Accessories
              </Link>
            </li>
            <li>
              <Link
                to="/engine-parts"
                className="hover:text-red-500 transition-colors"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}

              >
                Engine Parts
              </Link>
            </li>
            <li>
              <Link
                to="/Tools&Equipment"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}

                className="hover:text-red-500 transition-colors"
              >
                Tools & Equipment
              </Link>
            </li>
            <li>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/contact"
                className="hover:text-red-500 transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </nav>
        </div>

        {/* Customer Support */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold text-white mb-4">Support</h2>
          <nav className="list-none space-y-2">
            <li>
              <Link
                to="/faqs"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}

                className="hover:text-red-500 transition-colors"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-red-500 transition-colors"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}

              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/shipping-info"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}

                className="hover:text-red-500 transition-colors"
              >
                Shipping Information
              </Link>
            </li>
            <li>
              <Link
                to="/terms&Conditions"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}

                className="hover:text-red-500 transition-colors"
              >
                terms & Conditions
              </Link>
            </li>
          </nav>
        </div>

        {/* Payment Methods */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold text-white mb-4">We Accept</h2>
          <div className="flex justify-center md:justify-start space-x-4">
            {/* <img src={visa} alt="Visa" className="h-8" /> */}
            <img src={Mastercard} alt="Mastercard" className="h-8" />
            <img src={paypal} alt="PayPal" className="h-8" />
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="container mx-auto border-t border-gray-700">
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="text-gray-500 hover:text-red-500 transition-colors"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-red-500 transition-colors"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-red-500 transition-colors"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-red-500 transition-colors"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <p className="mt-4 text-center text-sm">
          © 2025 GearXpert Autoparts. All Rights Reserved.
        </p>
      </div>

      {/* Back-to-Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="bottom-10 right-9 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition"
        title="Back to Top"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
