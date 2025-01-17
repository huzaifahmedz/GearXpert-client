import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import { WiDirectionUpRight } from "react-icons/wi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Import Slick Carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import Image1 from "../../assets/images/sliderImages/Image1.jpg";
import Image2 from "../../assets/images/sliderImages/Image2.jpg";
import Image3 from "../../assets/images/sliderImages/Image3.jpg";
import Image4 from "../../assets/images/sliderImages/Image4.jpg";
import Image5 from "../../assets/images/sliderImages/Image5.jpg";
import Image6 from "../../assets/images/sliderImages/Image6.jpg";
import Image7 from "../../assets/images/sliderImages/Image7.jpg";
import Image8 from "../../assets/images/sliderImages/Image8.jpg";
import Image9 from "../../assets/images/sliderImages/Image9.jpg";

const ImageSlider = () => {
  const sliderRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const slidesRef = useRef([]);

  useEffect(() => {
    // Heading and Text Animation
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "top 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "top 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Slides Animation
    slidesRef.current.forEach((slide, index) => {
      gsap.fromTo(
        slide,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: slide,
            start: "top 90%",
            end: "top 70%",
          },
        }
      );
    });
  }, []);

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    swipeToSlide: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480, // Mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  // Slide data
  const slides = [
    { id: 1, img: Image7, buttonText: <WiDirectionUpRight /> },
    { id: 2, img: Image2, buttonText: <WiDirectionUpRight /> },
    { id: 3, img: Image3, buttonText: <WiDirectionUpRight /> },
    { id: 4, img: Image4, buttonText: <WiDirectionUpRight /> },
    { id: 5, img: Image5, buttonText: <WiDirectionUpRight /> },
    { id: 6, img: Image6, buttonText: <WiDirectionUpRight /> },
    { id: 7, img: Image1, buttonText: <WiDirectionUpRight /> },
    { id: 8, img: Image8, buttonText: <WiDirectionUpRight /> },
    { id: 9, img: Image9, buttonText: <WiDirectionUpRight /> },
  ];

  // Navigate to specific slide
  const handleSlide = (slideIndex) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(slideIndex);
    }
  };

  return (
    <div className="w-full lg:h-screen min-h-32 bg-black">
      {/* Heading Section */}
      <div className="text-left p-6 lg:p-12">
        <h2
          ref={headingRef}
          className="Text text-3xl md:text-4xl font-bold text-white tracking-wide"
        >
          All Auto Parts
        </h2>
        <p
          ref={textRef}
          className="Text text-gray-400 text-sm md:text-base mt-2"
        >
          Browse through a wide selection of vehicle parts for cars and trucks.
        </p>
      </div>

      {/* Slider Section */}
      <div className="w-full mx-auto py-10 overflow-hidden relative">
        <Slider ref={sliderRef} {...sliderSettings}>
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              ref={(el) => (slidesRef.current[index] = el)}
              className="Slides relative px-2"
            >
              <img
                src={slide.img}
                alt={`Slide ${slide.id}`}
                className="w-full h-60 md:h-72 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-5 right-5 z-20">
                <button
                  className="rounded-full cursor-pointer p-4 bg-red-500 text-white text-2xl font-bold hover:bg-red-600 transition"
                  onClick={() => handleSlide(index)}
                >
                  {slide.buttonText}
                </button>
              </div>
            </div>
          ))}
        </Slider>

        {/* Left Gradient Overlay */}
        <div className="w-[10%] sm:w-[15%] md:w-[20%] h-full absolute top-0 left-0 bg-gradient-to-r from-black via-transparent to-transparent z-10"></div>

        {/* Right Gradient Overlay */}
        <div className="w-[10%] sm:w-[15%] md:w-[20%] h-full absolute top-0 right-0 bg-gradient-to-l from-black via-transparent to-transparent z-10"></div>
      </div>
    </div>
  );
};

export default ImageSlider;
