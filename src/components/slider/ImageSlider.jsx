import React, { useRef } from "react";
import Slider from "react-slick";
import { WiDirectionUpRight } from "react-icons/wi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import Image1 from "../../assets/images/sliderImages/Image1.webp";
import Image2 from "../../assets/images/sliderImages/Image2.webp";
import Image3 from "../../assets/images/sliderImages/Image3.webp";
import Image4 from "../../assets/images/sliderImages/Image4.webp";
import Image5 from "../../assets/images/sliderImages/Image5.webp";
import Image6 from "../../assets/images/sliderImages/Image6.webp";
import Image7 from "../../assets/images/sliderImages/Image7.webp";
import Image8 from "../../assets/images/sliderImages/Image8.webp";
import Image9 from "../../assets/images/sliderImages/Image9.webp";
import Image10 from "../../assets/images/sliderImages/Image10.webp";

const ImageSlider = () => {
  const sliderRef = useRef(null);

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true, // Enable swiping between slides
    touchMove: true, // Ensure touch gestures work properly
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, swipeToSlide: true } },
      { breakpoint: 768, settings: { slidesToShow: 2, arrows: false, swipeToSlide: true } },
      { breakpoint: 480, settings: { slidesToShow: 1, arrows: false, swipeToSlide: true } },
    ],
  };

  // Slide data
  const slides = [
    Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9,Image10
  ];

  return (
    <div className="w-full lg:h-screen min-h-32 bg-black">
      {/* Heading */}
      <div className="p-6 lg:p-12 text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-white">All Auto Parts</h2>
        <p className="text-gray-400 text-sm md:text-base mt-2">
          Browse through a wide selection of vehicle parts for cars and trucks.
        </p>
      </div>

      {/* Slider */}
      <div className="w-full py-10 overflow-hidden relative">
        <Slider ref={sliderRef} {...sliderSettings}>
          {slides.map((img, index) => (
            <div key={index} className="relative px-2">
              <img
                src={img}
                alt={`Slide ${index}`}
                className="w-full h-60 md:h-72 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
              <button
                className=" btn flex absolute bottom-5 right-5 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
                onClick={() => sliderRef.current.slickGoTo(index)}
              >
                slide<WiDirectionUpRight className="rotate-45" size={24} /> 
              </button>
            </div>
          ))}
        </Slider>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-[10%] h-full bg-gradient-to-r from-black to-transparent"></div>
        <div className="absolute top-0 right-0 w-[10%] h-full bg-gradient-to-l from-black to-transparent"></div>
      </div>
    </div>
  );
};

export default ImageSlider;
