import React from 'react';

const AutomobileInfo = () => {
  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center">
      {/* Wrapper for Layout */}
      <div className="container mx-auto px-6 md:px-12 lg:px-15 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Video with Overlay Content */}
        <div className="relative">
          <img
            src="/assets/images/car-banner.jpg"
            alt="Car Banner"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          {/* Fade Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 rounded-lg"></div>
          {/* Overlay Text */}
          <div className="absolute inset-0 flex items-center justify-center text-center p-6 md:p-12">
            <h2 className="text-white text-3xl md:text-4xl font-bold">
              Drive with Confidence
            </h2>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center space-y-6 z-20">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Revolutionize Your Ride
          </h1>
          <p className="text-lg md:text- text-gray-300">
            Discover the best auto parts and accessories for your vehicle. We offer a wide range of high-quality, affordable options to enhance your driving experience. From brake pads to performance upgrades, we’ve got you covered.
          </p>
          <p className="text-lg md:text-xl text-gray-300">
            Whether you’re a car enthusiast or just looking to keep your car running smoothly, our products are designed to meet your needs. Experience the ultimate in reliability, style, and affordability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AutomobileInfo;
