import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import './Faq.css';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import image from '../../assets/images/Banners-greaXpert/shipping-info_banner.jpeg'

const FAQAccordion = () => {
  const [openTab, setOpenTab] = useState(null);
  const contentRefs = useRef([]);

  const toggleTab = (tab) => {
    setOpenTab(openTab === tab ? null : tab);
  };

  const faqData = [
    {
      question: "Why buy a repairable vehicle?",
      answer:
        "Buying a repairable vehicle is pocket friendly and after proper repairing, you need not worry about the quality of the vehicle.",
    },
    {
      question: "How safe are repairable cars after being fixed?",
      answer: "After proper repairing, a repairable car is reliable on the road.",
    },
    {
      question: "What type of title do repairable cars have?",
      answer:
        "In the US, some states re-title repairable vehicles while others allow the title as it is.",
    },
    {
      question: "Where do you get your cars for parts?",
      answer:
        "Generally, we purchase car parts from trusted salvage sources. We also purchase cars from individuals based on availability.",
    },
    {
      question: "What is the quality of used parts?",
      answer:
        "Purchasing an aftermarket auto part is completely safe if you are buying from a trusted seller.",
    },
  ];

  useGSAP(() => {
    gsap.from("#main-component", {
      opacity: 0,
      y:100,
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
        className="services-header bg-cover text-white py-48 px-4"
        style={{
          backgroundImage: `url(${image})`,
          backgroundAttachment: "fixed",
          boxShadow:"0 0 200px 100px black inset"
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2  className="text text-4xl md:text-5xl font-bold animate_animated animate_fadeInDown">
            General <span className="text text-red-500">FAQ</span>
          </h2>
          <div className="mt-4 animate_animated animate_fadeInUp">
            <hr id="hrLine" className="border-t-4 rounded-lg border-white w-16 mx-auto" />
          </div>
        </div>
      </section>

      <div className="bg-black p-6 sm:p-10">
        <div id="main-component" className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
            Frequently <span className="text-red-500">Asked Questions</span>
          </h2>
          <div id="main-component" className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border border-red-500 rounded-md shadow-sm"
              >
                <button
                  className="flex justify-between items-center w-full px-4 py-3 text-left bg-black hover:bg-black focus:outline-none focus:ring focus:ring-red-500"
                  onClick={() => toggleTab(index)}
                >
                  <span className="font-medium text-gray-300">
                    {item.question}
                  </span>
                  <span className="text-white">
                    {openTab === index ? (
                      <FontAwesomeIcon icon={faMinus} />
                    ) : (
                      <FontAwesomeIcon icon={faPlus} />
                    )}
                  </span>
                </button>
                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="accordion-content"
                  style={{
                    height: openTab === index ? `${contentRefs.current[index]?.scrollHeight}px` : "0px",
                  }}
                >
                  <div className="px-4 py-3 bg-black text-gray-300">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQAccordion;
