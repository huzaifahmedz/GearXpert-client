import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ShippingInformation = () => {
  const shippingInfoRef = useRef(null);
  const detailsRef = useRef(null);
  const optionsRef = useRef(null);
  const supportRef = useRef(null);

  useEffect(() => {
    // Entrance animation
    gsap.fromTo(
      shippingInfoRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power4.out" }
    );

    // Scroll animations for individual sections
    const sections = [
      { ref: detailsRef, y: 50 },
      { ref: optionsRef, y: -50 },
      { ref: supportRef, y: 50 },
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
      ref={shippingInfoRef}
      className="relative bg-black text-white min-h-screen py-40 px-4 md:px-6 lg:px-12 overflow-hidden"
    >
      {/* Floating Background Dots */}
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
      <section ref={detailsRef} className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Shipping <span className="text-red-500">Information</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Learn about our shipping policies, delivery options, and how we ensure your orders are delivered on time.
        </p>
      </section>

      {/* Shipping Details */}
      <section ref={optionsRef} className="text-center my-12 md:my-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Shipping Details
        </h2>
        <p className="text-gray-300 max-w-4xl mx-auto mb-6">
          We partner with reliable carriers to provide the best shipping experience. Here are the key details:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Fast Shipping",
              description: "Get your orders delivered within 3-5 business days.",
            },
            {
              title: "Global Delivery",
              description: "We ship to over 200 countries worldwide.",
            },
            {
              title: "Free Shipping",
              description: "Enjoy free shipping on orders over $50.",
            },
          ].map((detail, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:text-white"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                {detail.title}
              </h3>
              <p className="text-sm md:text-base text-gray-300 hover:text-white">
                {detail.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Delivery Options */}
      <section ref={supportRef} className="text-center my-12 md:my-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Delivery Options
        </h2>
        <p className="text-gray-300 max-w-4xl mx-auto mb-6">
          Choose the delivery option that best suits your needs:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Standard Delivery",
              description: "Affordable and reliable delivery within 5-7 days.",
            },
            {
              title: "Express Delivery",
              description: "Receive your order within 1-2 business days.",
            },
            {
              title: "Same-Day Delivery",
              description: "Available for select locations. Order by 2 PM.",
            },
          ].map((option, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:text-white"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                {option.title}
              </h3>
              <p className="text-sm md:text-base text-gray-300 hover:text-white">
                {option.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Support */}
      <section className="text-center my-12 md:my-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Customer Support
        </h2>
        <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto mb-6">
          Need help with your shipping? Contact our 24/7 customer support team for assistance.
        </p>
      </section>
    </div>
  );
};

export default ShippingInformation;
