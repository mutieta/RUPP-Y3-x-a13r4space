import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Asteroids = () => {
  const [featuredItems, setFeaturedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = "vnoaoLR3rJQnYM0wfwSWTnssu967Vp173oqakocY"; // Replace with your NASA API key

  useEffect(() => {
    const fetchAPOD = async () => {
      try {
        const today = new Date();
        const requests = [];
        for (let i = 0; i < 7; i++) {
          const date = new Date(today);
          date.setDate(today.getDate() - i);
          const formattedDate = date.toISOString().split("T")[0];
          requests.push(
            fetch(
              `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${formattedDate}`
            ).then((res) => res.json())
          );
        }

        const results = await Promise.all(requests);

        // Filter out undefined or missing data
        const validResults = results.filter(item => item && item.title);

        // Fill the featuredItems array with valid data, ensuring no duplicates
        const adjustedResults = [];
        for (let i = 0; i < 7; i++) {
          if (validResults[i]) {
            adjustedResults.push(validResults[i]);
          } else {
            // If data is missing, continue to the next available day
            if (validResults[i + 1]) {
              adjustedResults.push(validResults[i + 1]);
            }
          }
        }

        setFeaturedItems(adjustedResults);
      } catch (err) {
        setError("Failed to fetch APOD data. Please check your API key.");
      } finally {
        setLoading(false);
      }
    };

    fetchAPOD();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="relative h-screen bg-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/image/sky-watching.webp)", // Ensure the path is correct based on your file structure
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 flex items-end justify-start h-4/5 text-white px-8 pb-16">
          <div>
            <h1 className="text-6xl md:text-8xl font-bold">Skywatching</h1>
            <p className="text-lg md:text-2xl mt-4 text-white-300">
              What exciting events are unfolding in our galaxy this week?
            </p>
          </div>
        </div>
      </div>

      {/* Featured Section with White Background */}
      <div className="p-6 bg-white">
        <h1 className="text-5xl font-bold mb-8 text-black">Featured</h1>
        <div className="space-y-8">
          {featuredItems.map((item, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* Text Block First on Small Screens */}
              <div className={`order-1 md:order-1 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <h2 className="text-xl font-bold mb-2 text-black">
                  {`${(index + 1).toString().padStart(2, "0")} ${item.title || "No Title Available"}`}
                </h2>
                <p className="text-gray-700 mb-4">{item.explanation || "No explanation available."}</p>
                <a
                  href={item.hdurl || item.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 font-semibold"
                >
                  Explore
                </a>
                <p className="mt-4 text-gray-500 text-sm">{item.date || "Date unavailable"}</p>
                <p className="text-gray-500 text-sm">{item.copyright || "NASA"}</p>
              </div>

              {/* Image Block Second on Small Screens */}
              <div className={`order-2 md:order-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <img
                  src={item.url}
                  alt={item.title || "Image unavailable"}
                  className="w-full h-auto object-cover rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Asteroids;
