import React from 'react';


const EarthInfoCenter = () => {
  return (
    <div id='earthinfo-section' className="relative bg-black text-white min-h-screen">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/image/northern-lights-in-iceland-when-amp-where-to-see-the-aurora-11.jpg')" }}>
        {/* Background image for the black-and-white Earth theme */}
      </div>
      <div className="relative z-10 flex flex-col items-start px-10 py-20 space-y-6">
        <h1 className="text-6xl font-bold pb-6"> 
          Earth<br />
          Information<br />
          Center
        </h1>
        <p className="text-lg max-w-2xl">
          For more than 50 years, NASA satellites have provided data on Earth's land, water, air, temperature, and climate. NASA's Earth Information Center allows visitors to see how our planet is changing in six key areas: sea level rise and coastal impacts, health and air quality, wildfires, greenhouse gases, sustainable energy, and agriculture.
        </p>
        <div className="flex items-center space-x-2">
          <a href="/explore" className="text-white text-xl font-bold hover:underline">
            Start Exploring
          </a>
          <span className="w-6 h-6 flex items-center justify-center  bg-red-500  rounded-full text-sm">
            🡥
          </span>
        </div>
      </div>
    </div>
  );
};

export default EarthInfoCenter;
