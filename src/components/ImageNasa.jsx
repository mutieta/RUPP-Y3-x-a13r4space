import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageNasa = () => {
  const [galleries, setGalleries] = useState({
    space: [],
    galaxy: [],
    cosmos: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGallery = async () => {
      const API_KEY = "vnoaoLR3rJQnYM0wfwSWTnssu967Vp173oqakocY"; // Replace with your NASA API key
      const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=30`; // Fetch 30 images

      setIsLoading(true);

      try {
        const response = await axios.get(API_URL);

        // Manually categorize images (simulate categories)
        const space = response.data.slice(0, 10); // First 10 images for 'People'
        const galaxy = response.data.slice(10, 20); // Next 10 images for 'Galaxy'
        const cosmos = response.data.slice(20, 30); // Last 10 images for 'Cosmos'

        setGalleries({
          space,
          galaxy,
          cosmos,
        });
      } catch (err) {
        setError('Failed to fetch images. Please try again later.');
        console.error('Error fetching gallery data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGallery();
  }, []);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const renderGalleryCard = (images, title) => {
    const previewImages = images.slice(0, 3); // Show first 3 images as previews

    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <div className="flex space-x-2 mb-2">
          {previewImages.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={image.title}
              className="w-1/3 h-24 object-cover rounded-md"
            />
          ))}
        </div>
        <p className="text-gray-600 text-sm">{images.length} IMAGES</p>
      </div>
    );
  };

  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">More NASA Images</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {renderGalleryCard(galleries.space, 'Space')}
        {renderGalleryCard(galleries.galaxy, 'Galaxy')}
        {renderGalleryCard(galleries.cosmos, 'Cosmos')}
      </div>
    </div>
  );
};

export default ImageNasa;
