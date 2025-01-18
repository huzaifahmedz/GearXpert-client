import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsersGear,
  faPhoneVolume,
  faThumbsUp,
  faTruckRampBox,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const ChooseUs = () => {
  return (
    <>
      <section className="text-gray-400 bg-gradient-to-r from-black via-black to-black body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-white uppercase tracking-wider">
              Why Choose Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">
              We deliver high-quality auto parts, excellent service, and
              unbeatable reliability to get you back on the road fast.
            </p>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-red-500 px-4 py-6 rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-red-500/50">
                <FontAwesomeIcon
                  icon={faUsersGear}
                  className="text-red-500 w-12 h-12 mb-3 inline-block animate-pulse"
                />
                <h2 className="title-font font-bold text-4xl text-white">
                  3.7K
                </h2>
                <p className="leading-relaxed text-gray-300">Trusted Clients</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-red-500 px-4 py-6 rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-red-500/50">
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  className="text-red-500 w-12 h-12 mb-3 inline-block animate-spin-slow"
                />
                <h2 className="title-font font-bold text-4xl text-white">
                  100%
                </h2>
                <p className="leading-relaxed text-gray-300">
                  Quality Assurance
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-red-500 px-4 py-6 rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-red-500/50">
                <FontAwesomeIcon
                  icon={faPhoneVolume}
                  className="text-red-500 w-12 h-12 mb-3 inline-block"
                />
                <h2 className="title-font font-bold text-4xl text-white">
                  24/7
                </h2>
                <p className="leading-relaxed text-gray-300">
                 Customer Support
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-red-500 px-4 py-6 rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-red-500/50">
                <FontAwesomeIcon
                  icon={faTruckRampBox}
                  className="text-red-500 w-12 h-12 mb-3 inline-block"
                />
                <h2 className="title-font font-bold text-4xl text-white">7 Days</h2>
                <p className="leading-relaxed text-gray-300">
                  Fast Delivery Service
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseUs;