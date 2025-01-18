import image from "../../assets/images/Banners-greaXpert/enginPart.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const AutomobileInfo = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".AnimateImage", {
      opacity: 0,
      y: "100px",
      duration: 0.4,
      scrollTrigger: ".AnimateImage",
      stagger: 0.3,
    });

  });

  return (
    <div className="hidden lg:block relative h-auto py-24  lg:min-h-screen bg-black text-white flex items-center justify-center">
      {/* Wrapper for Layout */}
      <div className="container mx-auto px-6 md:px-12 lg:px-15 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Video/Image with Overlay */}
        <div className="relative hidden md:block">
          <img
            src={image}
            alt="Car Banner"
            className="AnimateImage w-full h-96 object-contain rounded-lg shadow-2xl p-12"
           />
          {/* Radial Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-radial from-black via-transparent to-black rounded-lg"></div>
          <div className="absolute inset bg-black bg-opacity-60 rounded-lg ">
          </div>
        </div>

        {/* Right Content */}
        <div className="AnimateImage flex flex-col justify-center space-y-3 text-left">
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            GearXpert: Drive Excellence, Upgrade with Precision
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            GearXpert is your ultimate destination for premium vehicle auto
            parts. From cars to trucks, we provide a vast selection of
            high-quality, reliable, and affordable components designed to
            enhance performance and ensure a smooth ride
          </p>
          <p className="text-lg md:text-xl text-gray-300">
            Explore our expertly curated range to keep your vehicle running at
            its best!
          </p>
        </div>

      </div>

      {/* Mobile Background Image */}
      <div className="absolute inset-0 md:hidden">
        <div className="absolute inset-0 z-10 bg-black bg-opacity-50"></div>
        <img
          src={image}
          alt="Car Background"
          className="absolute inset-0 w-full h-full object-cover opacity-80 animate-spin-slow"
        />
        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-black via-transparent to-black"></div>


      </div>

    </div>
  );
};

export default AutomobileInfo;
