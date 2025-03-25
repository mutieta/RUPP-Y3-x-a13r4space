import React, { useEffect, useState } from 'react';
import { MdSaveAlt } from "react-icons/md";
import axios from 'axios';

const ImageOfTheDay = () => {
  const [imageData, setImageData] = useState({
    title: '',
    explanation: '',
    url: '',
    media_type: '',
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAPOD = async () => {
      const API_KEY = "vnoaoLR3rJQnYM0wfwSWTnssu967Vp173oqakocY"; // Replace with your NASA API key
      const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

      try {
        const response = await axios.get(API_URL);
        setImageData({
          title: response.data.title,
          explanation: response.data.explanation,
          url: response.data.url,
          media_type: response.data.media_type,
        });
      } catch (error) {
        console.error('Error fetching APOD data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAPOD();
  }, []);

  const handleDownload = () => {
    if (imageData.url) {
      const link = document.createElement('a');
      link.href = imageData.url;
      link.download = `${imageData.title}.jpg`; // Default to .jpg
      link.click();
    }
  };

  if (isLoading) {
    return <p>Loading...</p>; // Show a loading indicator
  }

  if (imageData.media_type !== 'image') {
    return <p>The media type for today is not an image. Check out the APOD site for more!</p>;
  }

  return (
    <div id="apod-section" className="flex flex-col lg:flex-row bg-white overflow-hidden px-8 py-12 relative">
      {/* Text Section */}
      <div className="flex flex-col justify-center lg:w-1/2 relative lg:pr-8">
        <p className="text-xs uppercase text-gray-400 tracking-wide absolute top-0 left-0 z-10 mb-0">Today</p>
        <h1 className="text-5xl font-bold text-gray-800 absolute top-5 left-0 z-10 mb-8">Image Of The Day</h1>
        <h2 className="text-3xl font-bold text-gray-700 mt-20 mb-2">{imageData.title}</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">{imageData.explanation}</p>
        <div className="flex items-center mb-2">
          <a
            href="https://apod.nasa.gov/apod/archivepix.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:underline"
          >
            Browse Image Archive
          </a>
          <div className="bg-red-500 w-4 h-4 rounded-full flex items-center justify-center ml-2">
            <span className="text-white text-sm">→</span>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 relative">
        <img
          src={imageData.url}
          alt={imageData.title}
          className="w-full h-full object-cover"
        />
        <button
          onClick={handleDownload}
          className="absolute bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700"
        >
          <MdSaveAlt className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ImageOfTheDay;
