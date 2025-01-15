import React, { useRef } from "react";
import video from "../../assets/videos/video-banner.webm";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroSection = () => {
  let videoRef = useRef();
  let buttonRef = useRef();
  



  //for video
  useGSAP(() => {
    gsap.from(videoRef.current, {
      opacity: 0,
      x: "100px",
      transition: 0.1,
      duration: 1,
    });

let tl = gsap.timeline();

tl.from(".content", {
  opacity: 0,
  y: "40px",
  duration: .9, 
  ease: "power2.out", 
  stagger: .2 
});

let button = buttonRef.current;
button.addEventListener("mouseenter",()=>{
    gsap.to(button, {
        scale: 1.08, // Slightly scale up the button
        duration: .1, // Animation duration
        transition:".2s",
        ease:"bounce"
      });
})
button.addEventListener("mouseleave",()=>{
    gsap.to(button, {
        scale: 1, // Slightly scale up the button
        duration:.1, // Animation duration
        transition:".1s",
        ease:"elastic.out"
      });
})



  });

  return (
    <div className="main w-full h-screen bg-black relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          loop
          autoPlay
          muted
          ref={videoRef}
          src={video}
          className="w-full h-full object-cover"
        ></video>
        <div className="absolute inset-0 bg-black/70"></div> {/* Overlay */}
      </div>

      {/* Content */}
      <div className="inside-main w-full h-full flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start relative z-10 px-6 md:px-12">
        {/* Text Section */}
        <div className="text-section w-full md:w-1/2 h-full flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h4
           
            className="content text-4xl md:text-5xl lg:text-6xl lg:leading-tight font-semibold text-white drop-shadow-lg"
          >
            Your One Stop Shop for
            <span className="text-gray-400"> Quality Auto Parts!</span>
          </h4>
          <p  className="content mt-4 text-lg md:text-xl text-gray-300">
            Everything you need for your car in one place.
          </p>
          <button ref={buttonRef}
            className="content relative mt-6 px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transform  overflow-hidden"
          >
            <span className="absolute inset-0 bg-white w-0 h-full transition-all duration-300 ease-in-out transform -translate-x-full hover:w-full"></span>
            <span className="relative z-10">Shop Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
