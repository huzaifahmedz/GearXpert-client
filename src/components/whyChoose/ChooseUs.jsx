import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsersGear,
  faPhoneVolume,
  faThumbsUp,
  faTruckRampBox,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

// Memoize the Card component to prevent unnecessary re-renders
const ChooseUsCard = React.memo(({ icon, title, description }) => {
  return (
    <div className="p-4 md:w-1/4 sm:w-1/2 w-full choose-us-card">
      <div className="border-2 border-red-500 px-4 py-6 rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-red-500/50">
        <FontAwesomeIcon
          icon={icon}
          className="text-red-500 w-12 h-12 mb-3 inline-block animate-pulse"
        />
        <h2 className="title-font font-bold text-4xl text-white">{title}</h2>
        <p className="leading-relaxed text-gray-300">{description}</p>
      </div>
    </div>
  );
});

const ChooseUs = () => {
  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animate section and cards using ScrollTrigger
    gsap.fromTo(
      ".choose-us-section",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".choose-us-section",
          start: "top 80%",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // Animate each card with staggered effect
    gsap.fromTo(
      ".choose-us-card",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".choose-us-card",
          start: "top 80%",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  const cardData = [
    { icon: faUsersGear, title: "3.7K", description: "Trusted Clients" },
    { icon: faThumbsUp, title: "100%", description: "Quality Assurance" },
    { icon: faPhoneVolume, title: "24/7", description: "Customer Support" },
    { icon: faTruckRampBox, title: "7 Days", description: "Fast Delivery Service" },
  ];

  return (
    <section className="text-gray-400 bg-gradient-to-r from-black via-black to-black body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-white uppercase tracking-wider choose-us-section">
            Why Choose Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300 choose-us-section">
            We deliver high-quality auto parts, excellent service, and
            unbeatable reliability to get you back on the road fast.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          {cardData.map((card, index) => (
            <ChooseUsCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
