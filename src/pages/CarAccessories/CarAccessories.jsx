import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const CarAccessories = () => {
  const accessoriesRef = useRef(null);
  const introRef = useRef(null);
  const categoriesRef = useRef(null);
  const featuresRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // Entrance animation for the Car Accessories section
    gsap.fromTo(
      accessoriesRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power4.out" }
    );

    // Scroll animations for individual sections
    const sections = [
      { ref: introRef, y: 50 },
      { ref: categoriesRef, y: -50 },
      { ref: featuresRef, y: 50 },
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
      ref={accessoriesRef}
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
          Car <span className="text-red-500">Accessories</span>
        </h1>
        <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
          Discover the finest car accessories to enhance your driving
          experience. From practical essentials to stylish upgrades, GearXpert
          has everything you need for a more comfortable and enjoyable ride.
        </p>
      </section>

      {/* Categories Section */}
      <section ref={categoriesRef} className="text-center my-12 md:my-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Accessory Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "Interior Accessories", description: "Seat covers, floor mats, and organizers.", icon: "🪑" },
            { title: "Exterior Accessories", description: "Car covers, spoilers, and trims.", icon: "🚗" },
            { title: "Electronics", description: "Dash cams, GPS systems, and chargers.", icon: "🔌" },
            { title: "Lighting", description: "LED headlights, fog lights, and interior lights.", icon: "💡" },
            { title: "Performance Add-ons", description: "Exhaust tips, air filters, and more.", icon: "⚙️" },
            { title: "Cleaning & Maintenance", description: "Polish kits, cleaners, and detailing tools.", icon: "🧽" },
          ].map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg group hover:scale-105 transition transform"
            >
              <div className="text-4xl md:text-5xl text-red-500 mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                {category.title}
              </h3>
              <p className="text-sm md:text-base text-gray-300 group-hover:text-white transition">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="text-center my-12 md:my-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">
          Why Choose Our Accessories?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "Superior Quality", description: "Built to last with premium materials.", icon: "🏆" },
            { title: "Wide Variety", description: "Accessories for all makes and models.", icon: "🚘" },
            { title: "Affordable Pricing", description: "Style and utility at budget-friendly rates.", icon: "💰" },
            { title: "Easy Installation", description: "User-friendly designs for quick setup.", icon: "🔧" },
            { title: "Fast Shipping", description: "Quick delivery to get you road-ready.", icon: "🚚" },
            { title: "Expert Support", description: "Guidance from automotive enthusiasts.", icon: "📞" },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg group hover:scale-105 transition transform"
            >
              <div className="text-4xl md:text-5xl text-red-500 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-gray-300 group-hover:text-white transition">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Get in Touch
        </h2>
        <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto mb-6">
          Need advice on choosing the right accessories? Contact our team for
          expert assistance.
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

export default CarAccessories;
