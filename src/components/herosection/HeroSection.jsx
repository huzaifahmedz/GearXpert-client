import React, { useRef } from "react";
import video from "../../assets/videos/video-banner.webm";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ChatBot from "../chatBot/ChatBot";
import './HeroSection.css'
import { Link } from "react-router-dom";

const HeroSection = () => {
  let videoRef = useRef();

  // GSAP Animations for video and content
  useGSAP(() => {
    gsap.from(videoRef.current, {
      opacity: 0,
      rotate:-10,
      x: "100px",
      duration: 1,
      delay:.5
    });

    let tl = gsap.timeline();
    tl.from(".content", {
      opacity: 0,
      y: "40px",
      delay:.4,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.2,
    });
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
          className=" w-full h-full object-cover mt-8"
        ></video>
        <div className="meinImg absolute inset-0 bg-black/70"></div> {/* Overlay */}
      </div>

      {/* Content */}
      <div className="inside-main w-full h-full flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start relative z-10 px-6 md:px-12 lg:mt-10">
        {/* Text Section */}
        <div className="text-section w-full md:w-1/2 h-full flex flex-col justify-center items-start md:items-start text-start md:text-left">
          <h4 className="content text-4xl md:text-5xl lg:text-6xl leading-[50px]  lg:leading-tight font-semibold text-white drop-shadow-lg">
            Your One Step Shop for
            <span className="text-gray-400"> Quality Auto Parts!</span>
          </h4>
          <p className="content mt-4 text-lg md:text-xl text-gray-300">
            Everything you need for your car in one place.
          </p>
          <button
            href="tel:+911234567890"
            className="content relative mt-6 px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transform overflow-hidden"
          >
            <span className="absolute inset-0 bg-white w-0 h-full transition-all duration-300 ease-in-out transform -translate-x-full hover:w-full"></span>
            <a href="tel:+918482834029" className="relative z-10">Call Now</a>

          </button>
         
         {/* <ChatBot/> */}
         
           
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
