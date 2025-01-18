import React, { useEffect } from "react";
import "./Services.css"; // Include custom styles for further enhancements
import carImage from "../../assets/images/Services_banner/car-5725334.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Services = () => {
  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Apply GSAP animation to all `.card` elements on scroll
    gsap.utils.toArray(".card").forEach((card) => {
      gsap.to(card, {
        y: 30,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: card, // Triggered by the card itself
          start: "top 60% ", // Start when the card enters the viewport
          end: "bottom", // End when the card reaches the top of the viewport
          scrub: true, // Smooth scrubbing effect
          markers: false, // Disable markers in production
        },
      });
    });

    // Cleanup GSAP ScrollTrigger instances when the component unmounts
    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <>
      {/* Services Header Section */}
      <section
        className="services-header bg-cover bg-center text-white py-48 px-4"
        style={{ backgroundImage: `url(${carImage})`, backgroundAttachment: "fixed" }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold animate_animated animate_fadeInDown">
            Services <span className="text-red-500">We Provide</span>
          </h2>
          <div className="mt-4 animate_animated animate_fadeInUp">
            <hr className="border-t-2 border-white w-16 mx-auto" />
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="bg-black py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {/* Service Card 1 */}
          <div className="card bg-red-500 text-white p-6 rounded-lg shadow-lg transition">
            <div className="icon text-4xl mb-4 text-white">
              <i className="fas fa-user"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">
              Free <span className="text-white">Assistance</span>
            </h3>
            <p className="text-sm text-white">
              We’re not just a website! Every user is offered personalized
              assistance from our friendly staff of auto experts.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="card bg-red-500 text-white p-6 rounded-lg shadow-lg">
            <div className="icon text-4xl mb-4">
              <i className="fas fa-gem"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">
              Warehouse <span className="text-white">Direct Parts</span>
            </h3>
            <p className="text-sm">
              The massive inventory in our warehouse enables shipment of most
              automotive items and accessories within 14 business days.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="card bg-red-500 text-white p-6 rounded-lg shadow-lg">
            <div className="icon text-4xl mb-4">
              <i className="fas fa-users"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">
              Expert <span className="text-white">Customer Service</span>
            </h3>
            <p className="text-sm">
              Our customer service agents are just a phone call away to help you
              with purchases and specialist advice.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
