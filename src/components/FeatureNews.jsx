import React from "react";
import { TiArrowRightThick } from "react-icons/ti";
import {
  arrival,
  Buckle_up,
  crew,
  skynews_nasa,
  lunar,
  tsunami,
  azone,
  permafrost,
} from "/src/Asset/image";

function FeatureNews() {
  // Featured articles data
  const featuredArticles = [
    {
      type: "ARTICLE",
      time: "6 MIN READ",
      title:
        "Why NASA's SPHEREx Mission Will Make 'Most Colorful' Cosmic Map Ever",
      image: skynews_nasa,
    },
    {
      type: "ARTICLE",
      time: "3 MIN READ",
      title:
        "Buckle Up: NASA-Funded Study Explores Turbulence in Molecular Clouds",
      image: Buckle_up,
    },
    {
      type: "NEWS RELEASE",
      time: "4 MIN READ",
      title:
        "NASA Sets Coverage for SpaceX 31st Station Resupply Launch, Arrival",
      image: arrival,
    },
    {
      type: "NEWS RELEASE",
      time: "2 MIN READ",
      title:
        "NASA Sets Coverage for its SpaceX Crew-9 Dragon Station Relocation",
      image: crew,
    },
  ];

  // Thumbnail articles data
  const articleThumbnails = [
    {
      type: "ARTICLE",
      time: "5 MIN READ",
      title:
        "NASA, NOAA Rank 2024 Ozone Hole as 7th-Smallest Since Records Began",
      image: azone,
    },
    {
      type: "ARTICLE",
      time: "4 MIN READ",
      title:
        "International SWOT Satellite Spots Planet-Tumbling Greenland Tsunami",
      image: tsunami,
    },
    {
      type: "ARTICLE",
      time: "4 MIN READ",
      title:
        "NASA Helps Find Thawing Permafrost Adds to Near-Term Global Warming",
      image: permafrost,
    },
    {
      type: "ARTICLE",
      time: "5 MIN READ",
      title:
        "How NASA’s Lunar Trailblazer Could Decipher the Moon’s Icy Secrets",
      image: lunar,
    },
  ];

  return (
    <section id="news-section" className="px-8 py-12 bg-white w-full">
      <div className="w-full">
        {/* Header with title and "More News" link */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-4xl font-bold text-gray-800">Featured News</h2>
          <div className="flex items-center space-x-2">
            <a
              href="/more-news"
              className="text-black-600 font-bold hover:underline"
            >
              More NASA News
            </a>
            <span className="w-6 h-6 flex items-center justify-center border-4 border-red-500 text-red-500 rounded-full text-sm">
              <TiArrowRightThick />
            </span>
          </div>
        </div>

        {/* Main Articles Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* First Column */}
          <div className="w-full md:col-span-6">
            <div
              className="relative bg-cover bg-center overflow-hidden h-96"
              style={{
                backgroundImage: `url(${featuredArticles[0].image})`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 p-6 flex flex-col justify-end">
                <p className="text-sm text-white mb-2 uppercase">
                  {featuredArticles[0].type}
                </p>
                <h3 className="text-2xl text-white font-bold mb-4">
                  {featuredArticles[0].title}
                </h3>
                <p className="text-sm text-gray-300">
                  {featuredArticles[0].time}
                </p>
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className="w-full md:col-span-3">
            <div
              className="relative bg-cover bg-center overflow-hidden h-96"
              style={{
                backgroundImage: `url(${featuredArticles[1].image})`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 p-6 flex flex-col justify-end">
                <p className="text-sm text-white mb-2 uppercase">
                  {featuredArticles[1].type}
                </p>
                <h3 className="text-2xl text-white font-bold mb-4">
                  {featuredArticles[1].title}
                </h3>
                <p className="text-sm text-gray-300">
                  {featuredArticles[1].time}
                </p>
              </div>
            </div>
          </div>

          {/* Third Column for small screens */}
          <div className="w-full md:hidden">
            <div
              className="relative bg-cover bg-center overflow-hidden h-96"
              style={{
                backgroundImage: `url(${featuredArticles[2].image})`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 p-6 flex flex-col justify-end">
                <p className="text-sm text-white mb-2 uppercase">
                  {featuredArticles[2].type}
                </p>
                <h3 className="text-2xl text-white font-bold mb-4">
                  {featuredArticles[2].title}
                </h3>
                <p className="text-sm text-gray-300">
                  {featuredArticles[2].time}
                </p>
              </div>
            </div>
          </div>

          {/* Third Column for larger screens */}
          <div className="w-full md:col-span-3 space-y-8">
            <div
              className="relative bg-cover bg-center overflow-hidden h-44 md:block hidden"
              style={{
                backgroundImage: `url(${featuredArticles[2].image})`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
                <p className="text-sm text-white mb-1 uppercase">
                  {featuredArticles[2].type}
                </p>
                <h3 className="text-md text-white font-bold">
                  {featuredArticles[2].title}
                </h3>
                <p className="text-xs text-gray-300">
                  {featuredArticles[2].time}
                </p>
              </div>
            </div>

            <div
              className="relative bg-cover bg-center overflow-hidden h-44 md:block hidden"
              style={{
                backgroundImage: `url(${featuredArticles[3].image})`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
                <p className="text-sm text-white mb-1 uppercase">
                  {featuredArticles[3].type}
                </p>
                <h3 className="text-md text-white font-bold">
                  {featuredArticles[3].title}
                </h3>
                <p className="text-xs text-gray-300">
                  {featuredArticles[3].time}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Articles */}
        <div className="hidden md:flex justify-between mt-8">
          {articleThumbnails.map((thumbnail, index) => (
            <div key={index} className="flex items-start w-1/5">
              <div
                className="w-80 h-24 bg-cover bg-center rounded-full mr-3"
                style={{
                  backgroundImage: `url(${thumbnail.image})`,
                }}
              ></div>
              <div>
                <p className="text-xs text-gray-400">{thumbnail.time}</p>
                <p className="text-sm font-semibold text-gray-900 leading-snug">
                  {thumbnail.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureNews;
