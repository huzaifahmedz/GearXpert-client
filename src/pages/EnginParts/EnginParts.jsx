import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EngineParts = () => {
  const enginePartsRef = useRef(null);
  const introRef = useRef(null);
  const categoriesRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    // Entrance animation for the Engine Parts section
    gsap.fromTo(
      enginePartsRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power4.out" }
    );

    // Scroll animations for individual sections
    const sections = [
      { ref: introRef, y: 50 },
      { ref: categoriesRef, y: -50 },
      { ref: featuresRef, y: 50 },
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
      ref={enginePartsRef}
      className="relative bg-black text-white min-h-screen py-40 px-4 md:px-6 lg:px-12 overflow-hidden"
    >
      {/* Floating Red Dots Background */}
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

      {/* Header Section */}
      <section ref={introRef} className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Engine <span className="text-red-500">Parts</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Discover the ultimate selection of precision-engineered engine parts
          designed to boost your vehicle's performance, reliability, and
          efficiency.
        </p>
      </section>

      {/* Categories Section */}
      <section ref={categoriesRef} className="text-center my-12 md:my-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Engine Part Categories
        </h2>
        <p className="text-gray-300 max-w-4xl mx-auto mb-6">
          We provide a comprehensive range of engine parts to meet the diverse
          needs of all vehicle types. Explore our categories to find the exact
          component for your engine's optimal performance.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Cylinder Heads",
              description: "Ensure precise air and fuel mixture for maximum power.",
            },
            {
              title: "Pistons",
              description: "High-performance pistons crafted for extreme durability.",
            },
            {
              title: "Camshafts",
              description: "Optimized for exact timing and maximum horsepower.",
            },
            {
              title: "Fuel Injectors",
              description: "Efficient fuel delivery for better combustion.",
            },
            {
              title: "Crankshafts",
              description: "Engineered to boost torque and reliability.",
            },
            {
              title: "Timing Belts",
              description: "Durable timing solutions for precise synchronization.",
            },
          ].map((category, index) => (
            <div key={index} className="bg-gray-800 hover:scale-105 transition  p-6 rounded-lg shadow-lg">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                {category.title}
              </h3>
              <p className="text-sm md:text-base text-gray-300">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="text-center my-12 md:my-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Why Choose Our Engine Parts?
        </h2>
        <p className="text-gray-300 max-w-4xl mx-auto mb-6">
          Our engine parts are designed to deliver unmatched durability,
          precision, and performance. Here are some key benefits of choosing our
          products:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Unparalleled Durability",
              description: "Built to withstand the harshest conditions and deliver long-lasting performance.",
            },
            {
              title: "Precision Engineering",
              description: "Crafted with exact specifications for seamless compatibility and performance.",
            },
            {
              title: "Fuel Efficiency",
              description: "Enhance your vehicle's efficiency and reduce emissions.",
            },
            {
              title: "Comprehensive Compatibility",
              description: "Engine parts for all makes and models, ensuring you find the right fit.",
            },
            {
              title: "Improved Power Output",
              description: "Boost horsepower and torque for superior driving experiences.",
            },
            {
              title: "Expert Support",
              description: "Our team of professionals is here to guide you in making the right choice.",
            },
          ].map((feature, index) => (
            <div key={index} className="bg-gray-800 hover:scale-105 transition p-6 rounded-lg shadow-lg hover:scale-">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Section */}
      <section className="text-center my-12 md:my-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Enhance Your Vehicle's Performance Today
        </h2>
        <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto mb-6">
          Explore our wide range of engine parts and experience the difference
          of quality and precision. Whether you need enhanced power, improved
          efficiency, or unmatched durability, we have the perfect solution for
          you.
        </p>
      </section>
    </div>
  );
};

export default EngineParts;
