import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { FaArrowLeft, FaShieldAlt, FaUserSecret, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import image from "../../assets/images/Banners-greaXpert/privacy-policey.jpg";

const PrivacyAndPolicy = () => {
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
      {/* Header Section */}
      <section
        className="services-header bg-cover text-white py-24 md:py-48 px-4"
        style={{
          backgroundImage: `url(${image})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text text-3xl md:text-5xl font-bold animate_animated animate_fadeInDown">
            Privacy <span className="text text-red-500">Policy</span>
          </h2>
          <div className="mt-4 animate_animated animate_fadeInUp">
            <hr
              id="hrLine"
              className="border-t-4 rounded-lg border-white w-16 mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="bg-black min-h-screen flex items-center justify-center p-4 md:p-8">
        <div
          id="main-component"
          className="bg-black rounded-2xl shadow-xl p-6 md:p-12 max-w-4xl w-full relative overflow-hidden text-white"
        >
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 h-40 w-40 md:h-64 md:w-64 bg-red-500 opacity-10 rounded-full"></div>
          <div className="absolute bottom-0 left-0 h-40 w-40 md:h-64 md:w-64 bg-red-500 opacity-10 rounded-full"></div>

          {/* Intro Text */}
          <p className="text-gray-300 mb-6 leading-relaxed relative z-10 text-center text-sm md:text-base">
            At <span className="font-bold">GearXpert</span>, your privacy is our
            priority. Learn more about how we protect your information.
          </p>

          {/* Information Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 relative z-10">
            <div className="bg-gray-800 rounded-xl p-6 text-center shadow-lg">
              <FaShieldAlt className="text-red-500 text-3xl md:text-4xl mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Data Protection
              </h3>
              <p className="text-gray-400 text-sm">
                We prioritize protecting your data with state-of-the-art
                security measures.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 text-center shadow-lg">
              <FaUserSecret className="text-red-500 text-3xl md:text-4xl mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Your Privacy
              </h3>
              <p className="text-gray-400 text-sm">
                Your personal data is never shared without your consent.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 text-center shadow-lg">
              <FaLock className="text-red-500 text-3xl md:text-4xl mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Secure Transactions
              </h3>
              <p className="text-gray-400 text-sm">
                Our systems ensure secure and reliable transactions every time.
              </p>
            </div>
          </div>

          {/* Content Sections */}
          <div className="relative z-10">
            {[
              {
                title: "Information We Collect",
                content: [
                  "Personal details like name, email, and phone number.",
                  "Payment and transaction data.",
                  "Technical information such as IP address and device details.",
                  "Browsing behavior and usage data.",
                ],
              },
              {
                title: "How We Use Your Information",
                content: [
                  "To fulfill your orders efficiently.",
                  "To improve user experience on our platform.",
                  "To send updates and promotional communications.",
                  "To safeguard our platform and services.",
                ],
              },
              {
                title: "Information Sharing",
                content: `We do not sell or share your personal data except as required for processing orders, legal obligations, or safeguarding our rights.`,
              },
              {
                title: "Your Rights",
                content: [
                  "Access and update your personal information.",
                  "Request deletion of your data.",
                  "Opt-out of promotional communications.",
                ],
              },
              {
                title: "Security",
                content: `We employ state-of-the-art security measures to protect your data. However, no method is entirely secure, and we encourage safe practices.`,
              },
              {
                title: "Changes to This Policy",
                content: `Updates to this policy will be posted on this page. Please review it periodically.`,
              },
              {
                title: "Contact Us",
                content: `For questions or concerns, reach out at support@[yourwebsite].com.`,
              },
            ].map((section, index) => (
              <section className="mb-8" key={index}>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  {section.title}
                </h2>
                {Array.isArray(section.content) ? (
                  <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm md:text-base">
                    {section.content.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    {section.content}
                  </p>
                )}
              </section>
            ))}
          </div>

          {/* Back to Home Button */}
          <div className="text-center mt-8 md:mt-10 relative z-10">
            <button
              onClick={() => {
                handleNavigate();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-4 py-2 md:px-6 md:py-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2 text-sm md:text-base"
            >
              <FaArrowLeft /> Back to Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyAndPolicy;
