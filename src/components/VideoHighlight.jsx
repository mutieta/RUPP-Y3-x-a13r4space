import React from 'react';

const VideoHighlight = () => {
  return (
    <div className="flex flex-col pt-20 lg:flex-row items-center lg:items-start bg-black text-white p-8">
      {/* Text Section */}
      <div className="lg:w-[37.5%] lg:pr-6 mb-6 lg:mb-0 w-full">
        <h3 className="text-xs uppercase text-gray-400 tracking-wide mb-2 pt-8">Featured Video</h3>
        <h2 className="text-4xl font-bold mb-4 leading-tight">Highlights from Hubble's 34th Year in Orbit</h2>
        <p className="text-l leading-relaxed text-gray-300">
          Hubble celebrated its 34th year in orbit by premiering a stunning new Hubble image of the Little Dumbbell Nebula, an expanding shell of gas around an aging or dying star. After more than three decades, Hubble continues to uncover the mysteries of the universe. These are a few science achievements from Hubble's latest year in orbit.
        </p>
      </div>

      {/* Video Section */}
      <div className="lg:w-[62.5%] flex justify-center w-full">
        <iframe
          className="w-full h-64 lg:h-96 rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/WeA7edXsU40"
          title="Hubble's Highlights from its 34th Year in Orbit"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoHighlight;
