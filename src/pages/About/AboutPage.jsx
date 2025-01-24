import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const introRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // Entrance animation for the entire About component
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power4.out" }
    );

    // GSAP animations for sections
    const sections = [
      { ref: introRef, y: 50 },
      { ref: missionRef, y: -50 },
      { ref: valuesRef, y: 50 },
      { ref: contactRef, y: -50 },
    ];

    sections.forEach((section) => {
      gsap.fromTo(
        section.ref.current,
        { opacity: 0, y: section.y },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section.ref.current,
            start: "top 80%",
            end: "top 40%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div
      ref={aboutRef}
      className="relative bg-black text-white min-h-screen py-40 px-4 md:px-6 lg:px-12 overflow-hidden"
    >
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, index) => (
          <div
            key={index}
            className="absolute bg-red-500 rounded-full opacity-30 animate-float"
            style={{
              width: `${Math.random() * 10 + 10}px`,
              height: `${Math.random() * 10 + 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 5 + 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Intro Section */}
      <section ref={introRef} className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">
          About <span className="text-red-500">GearXpert</span>
        </h1>
        <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
          GearXpert is your trusted partner for top-notch vehicle parts and
          accessories. We strive to elevate your driving experience through
          unparalleled quality and reliability.
        </p>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="text-center my-12 md:my-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Mission</h2>
        <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
          To provide every vehicle owner with premium parts, ensuring smoother
          rides, longer durability, and utmost satisfaction.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {[
            { title: "High Quality", icon: "⚙️" },
            { title: "Reliability", icon: "🔧" },
            { title: "Innovation", icon: "🚗" },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition transform w-full sm:w-64"
            >
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="text-xl font-semibold mt-2">{feature.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={valuesRef} className="text-center my-12 md:my-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Wide Selection",
              description: "Thousands of parts for all vehicle types.",
              icon: "🚙",
            },
            {
              title: "Expert Support",
              description: "Dedicated professionals to assist you.",
              icon: "💬",
            },
            {
              title: "Fast Delivery",
              description: "Quick shipping to get you back on track.",
              icon: "📦",
            },
            {
              title: "Affordable Prices",
              description: "Premium quality at competitive rates.",
              icon: "💰",
            },
            {
              title: "Eco-Friendly",
              description: "Sustainable practices for a better tomorrow.",
              icon: "🌿",
            },
            {
              title: "Secure Payments",
              description: "Safe and reliable checkout process.",
              icon: "🔒",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg group hover:scale-105 transition transform"
            >
              <div className="text-4xl md:text-5xl text-red-500 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-gray-300 group-hover:text-white transition">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto mb-6">
          Have questions? We're here to help. Reach out today!
        </p>
        <Link
        to="/contact"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}

          
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-md transition inline-block shadow-md"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default About;
