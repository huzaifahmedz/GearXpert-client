import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faStar } from "@fortawesome/free-solid-svg-icons";
// import "./Testimonial.css"; // Add custom CSS for animations and styles
import pic1 from '../../assets/images/testimonial_images/testi.jpg'
import pic2 from "../../assets/images/testimonial_images/testi2.jpg";


const Testimonial = () => {
  return (
    <>
      <section className="text-gray-400 bg-black body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-4xl font-bold title-font text-white mb-12 text-center">
            What Our Customers Say
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-black border-2 border-red-500 p-8 rounded-lg shadow-lg hover:shadow-red-500/50 transition-all duration-300">
                <FontAwesomeIcon
                  icon={faCar}
                  className="block w-8 h-8 text-red-500 mb-4"
                />
                <p className="leading-relaxed mb-6">
                  "Amazing quality and fast delivery! I found every part I
                  needed for my car at the best prices. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <img
                    alt="testimonial"
                    src={pic1}
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center hover:scale-110 transition-transform duration-300"
                  />
                  <div className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      Harry
                    </span>
                    <span className="text-gray-500 text-sm">
                      Auto Enthusiast
                    </span>
                    <div className="flex text-yellow-400 mt-1">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full ">
              <div className="h-full bg-black border-2 border-red-500  p-8 rounded-lg shadow-lg hover:shadow-red-500/50 transition-all duration-300">
                <FontAwesomeIcon
                  icon={faCar}
                  className="block w-8 h-8 text-red-500 mb-4"
                />
                <p className="leading-relaxed mb-6">
                  "The customer service is outstanding. They helped me choose
                  the exact parts I needed. Will definitely shop here again!"
                </p>
                <div className="flex items-center">
                  <img
                    alt="testimonial"
                    src={pic2}
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center hover:scale-110 transition-transform duration-300"
                  />
                  <div className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      Jane Smith
                    </span>
                    <span className="text-gray-500 text-sm">Mechanic</span>
                    <div className="flex text-yellow-400 mt-1">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;