import React from "react";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import image from "../../assets/images/Banners-greaXpert/terms-conditions_banner.jpeg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import './Terms.css'

const TermsAndConditions = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  useGSAP(() => {
    gsap.from("#main-component", {
      opacity: 0,
      duration: 1,
    });
    gsap.from("#hrLine", {
      width: 0,
      duration: 1,
      delay: 1.2,
    });
    gsap.from(".text", {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.3,
    });
  }, []);

  return (
    <>
      <section
        className="services-header bg-cover text-white py-32 md:py-48 px-4 overflow-x-hidden"
        style={{
          backgroundImage: `url(${image})`,
          backgroundAttachment:"fixed"
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className=" text text-3xl md:text-5xl font-bold">
            Terms & <span className= " text text-red-500">Conditions</span>
          </h2>
          <div className="mt-4 animate_animated animate_fadeInUp">
            <hr
              id="hrLine"
              className="border-t-4 rounded-lg border-white w-16 mx-auto"
            />
          </div>
        </div>
      </section>
      <div className="bg-black min-h-screen flex items-center justify-center py-16 px-4 overflow-x-hidden">
        <div
          id="main-component"
          className="bg-black rounded-lg shadow-2xl p-6 md:p-10 max-w-4xl w-full relative"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-40 h-40 md:w-72 md:h-72 bg-red-500 opacity-20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 md:w-72 md:h-72 bg-red-500 opacity-20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

          {/* Header Section */}
          <p className="text-gray-200 mb-6 md:mb-10 leading-relaxed text-center relative z-10 text-sm md:text-base">
            Welcome to <span className="font-semibold">GearXpert</span>. Please
            read the following terms carefully as they govern your use of our
            services.
          </p>

          {/* Content Sections */}
          <div className="relative z-10 space-y-6 md:space-y-8">
            <section>
              <h2 className="text-lg md:text-2xl font-semibold text-gray-200 mb-2 md:mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                By accessing or using our website, you agree to comply with and
                be bound by these terms. If you do not agree, you may not use
                our services.
              </p>
            </section>

            <section>
              <h2 className="text-lg md:text-2xl font-semibold text-gray-200 mb-2 md:mb-4">
                2. User Responsibilities
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Users must provide accurate and complete information during
                registration and refrain from any activities that violate
                applicable laws or harm our platform.
              </p>
            </section>

            <section>
              <h2 className="text-lg md:text-2xl font-semibold text-gray-200 mb-2 md:mb-4">
                3. Intellectual Property
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                All content on this website, including text, images, logos, and
                designs, is the property of GearXpert and protected by copyright
                laws.
              </p>
            </section>

            <section>
              <h2 className="text-lg md:text-2xl font-semibold text-gray-200 mb-2 md:mb-4">
                4. Limitation of Liability
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                We are not responsible for any damages resulting from your use
                of our services, including direct, indirect, or incidental
                losses.
              </p>
            </section>

            <section>
              <h2 className="text-lg md:text-2xl font-semibold text-gray-200 mb-2 md:mb-4">
                5. Modifications to Terms
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                We may update these terms at any time. Continued use of the
                website implies acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg md:text-2xl font-semibold text-gray-200 mb-2 md:mb-4">
                6. Contact Information
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                For any questions about these terms, please contact us at
                <span className="text-red-500 font-medium"> support@gearxpert.com</span>.
              </p>
            </section>
          </div>

          {/* Back Button */}
          <div className="text-center mt-6 md:mt-10 relative z-10">
            <button
              onClick={() => {
                handleNavigate();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-6 md:px-8 py-2 md:py-3 bg-red-600 text-white text-sm md:text-lg rounded-full shadow-md hover:bg-red-700 transition-all flex items-center justify-center gap-2"
            >
              <FaHome /> Back to Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
