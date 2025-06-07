import React from 'react';
import { Navigate } from 'react-router-dom';

const Explore = () => {
  return (
    <div className="relative bg-black text-white min-h-screen">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/image/mission.webp')" }}>
        {/* Background image for the universe theme */}
      </div>
      <div className="relative z-10 flex flex-col items-start px-10 py-40 space-y-6">
        <h1 className="text-6xl font-bold pb-6"> 
          Explore the Universe<br />
          from your Inbox
        </h1>
        <p className="text-lg max-w-2xl">
          Stay up-to-date on the latest news from NASA—from Earth to the Moon, the Solar System, and beyond.
        </p>
        <p className="text-sm max-w-2xl mt-4">
          *We will never share your email address. <a href="#" className="underline">Privacy Policy</a>
        </p>
        <div className="flex items-center space-x-2">
        <a href="/subscribe" className="text-white text-2xl font-bold hover:underline">
            Sign Up
          </a>
          <span className="w-4 h-4 flex items-center justify-center  bg-red-500  rounded-full text-sm">
          🡢
          </span>
        </div>
      </div>
    </div>
  );
};

export default Explore;
