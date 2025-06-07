import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ApodDetail = () => {
  const location = useLocation();
  const { day, month, year, apiData } = location.state || {}; // Get day, month, year, and apiData from state

  return (
    <>
      <Navbar />
      <div className="bg-white text-black">
        <div className=" flex items-center justify-center">
          <div className=" mx-auto bg-white  shadow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <img
                src={apiData?.url || "https://via.placeholder.com/916x916"} // Use fetched image URL or placeholder
                alt={apiData?.title || "Astronomy Picture of the Day"}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 w-full md:w-1/2 flex flex-col justify-between">
              <div>
                <h1 className="text-black text-3xl font-bold mb-4 leading-snug">
                  {apiData?.title || "Astronomy Picture of the Day"}
                </h1>
                <p className="text-black-400 text-sm mb-6">
                  {apiData?.explanation || "No explanation available."}
                </p>
                <a href={apiData?.hdurl || "#"} className="text-blue-500 text-sm underline mb-4 inline-block">
                  Read More
                </a>
                <div className="flex space-x-4 mt-4">
                  <button className="bg-blue-600 px-4 py-2 text-white  shadow-md">
                    Download
                  </button>
                  <button className="bg-gray-700 px-4 py-2 text-white shadow-md">
                    Share
                  </button>
                </div>
              </div>
              <div className="mt-8 text-sm text-black-400">
                <p><span className="font-semibold">Taken:</span> {apiData?.date || `${year}-${month}-${day}`}</p>
                <p><span className="font-semibold">Image Credit:</span> {apiData?.copyright || "NASA/JPL-Caltech"}</p>
                <p><span className="font-semibold">Size:</span> {apiData?.size || "916x916px"}</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ApodDetail;
