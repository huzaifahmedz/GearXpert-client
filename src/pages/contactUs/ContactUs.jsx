import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactUs.css";
import carImage from "../../assets/images/contactUs_banner/contact-Us_banner.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS credentials
    const serviceID = "service_vqqlp6d";
    const templateID = "template_r5nb0wo";
    const publicKey = "IMu6JgeCptzk_xyWd";

    emailjs.send(serviceID, templateID, formData, publicKey).then(
      (response) => {
        console.log("Email sent successfully!", response.status, response.text);
        alert("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        }); // Reset form
      },
      (error) => {
        console.error("Failed to send email:", error);
        alert("There was an error sending your message. Please try again.");
      }
    );
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
    gsap.from("#text", {
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
        id="main-component"
        style={{
          backgroundImage: `url(${carImage})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2
            id="text"
            className="text-4xl md:text-5xl font-bold animate_animated animate_fadeInDown"
          >
            Contact{" "}
            <span id="text" className="text-red-500">
              Us
            </span>
          </h2>
          <div className="mt-4 animate_animated animate_fadeInUp">
            <hr
              id="hrLine"
              className="border-t-4 border-white w-24  rounded-sm mx-auto"
            />
          </div>
        </div>
      </section>
      <div className="p-6 md:p-12">
        {/* <!-- Ask a Question Section --> */}
        <div
          id="text"
          className="sub-main rounded-3xl py-10 border-red-500 max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-white">
              <span className="text-red-500">Ask A</span> Question
            </h2>
          </div>
          <form
            className="shadow-lg rounded-full p-6 space-y-4"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border text-white bg-gray-900 border-red-500 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border text-white bg-gray-900 border-red-500 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border text-white bg-gray-900 border-red-500 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor="subject" className="sr-only">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full border text-white bg-gray-900 border-red-500 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full border text-white bg-gray-900 border-red-500 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-red-500 text-white py-3 px-6 rounded-md hover:bg-red-600 transition flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="loader border-t-2 border-white rounded-full w-5 h-5 mr-2 animate-spin"></div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
            {responseMessage && (
              <div className="mt-4 text-center text-white">
                {responseMessage}
              </div>
            )}
          </form>
        </div>

        {/* <!-- Working Hours Section --> */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-3xl font-semibold text-white">
              <span className="text-red-500">Working</span> Hours
            </h3>
          </div>
          <div className="bg-black sub-main shadow-lg rounded-3xl p-6">
            <ul className="space-y-4">
              <li className="flex justify-between text-gray-300">
                <span>Monday</span>
                <p className="font-medium">7.00 - 16.30</p>
              </li>
              <li className="flex justify-between text-gray-300">
                <span>Tuesday</span>
                <p className="font-medium">7.00 - 16.30</p>
              </li>
              <li className="flex justify-between text-gray-300">
                <span>Wednesday</span>
                <p className="font-medium">7.00 - 16.30</p>
              </li>
              <li className="flex justify-between text-gray-300">
                <span>Thursday</span>
                <p className="font-medium">7.00 - 16.30</p>
              </li>
              <li className="flex justify-between text-gray-300">
                <span>Friday</span>
                <p className="font-medium">7.00 - 16.30</p>
              </li>
              <li className="flex justify-between text-gray-300">
                <span>Saturday</span>
                <p className="font-medium">7.00 - 16.30</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
