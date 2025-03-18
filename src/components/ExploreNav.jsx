import React, { useState } from "react";

const ExploreNav = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-black text-white p-6 h-full transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:w-64 md:translate-x-0`}
    >
      <button className="absolute top-4 left-4 text-white" onClick={toggleSidebar}>
        <X size={24} />
      </button>
      <div className="flex justify-center mb-4">
        <img src="https://via.placeholder.com/50" alt="NASA Logo" className="w-10" />
      </div>
      <ul className="space-y-4">
        <li className="font-bold border-b pb-2"><a href="#">Home</a></li>
        <li><a href="#">Missions</a></li>
        <li><a href="#">Humans in Space</a></li>
        <li><a href="#">Earth</a></li>
        <li><a href="#">The Solar System</a></li>
        <li><a href="#">The Universe</a></li>
        <li><a href="#">Science</a></li>
        <li><a href="#">Aeronautics</a></li>
        <li><a href="#">Technology</a></li>
        <li><a href="#">Learning Resources</a></li>
        <li><a href="#">About NASA</a></li>
        <li><a href="#">Español</a></li>
      </ul>
    </div>
  );
};

const FeaturedArticles = () => {
  const articles = [
    {
      title: "NASA Cameras on Blue Ghost Capture First-of-its-Kind Moon Landing Footage",
      image: "https://via.placeholder.com/300", // Replace with actual image URL
      time: "4 MIN READ",
      date: "4 DAYS AGO"
    },
    {
      title: "NASA Atmospheric Wave-Studying Mission Releases Data from First 3,000 Orbits",
      image: "https://via.placeholder.com/300", // Replace with actual image URL
      time: "4 MIN READ",
      date: "2 DAYS AGO"
    },
    {
      title: "What’s Up: March 2025 Skywatching Tips from NASA",
      image: "https://via.placeholder.com/300", // Replace with actual image URL
      time: "5 MIN READ",
      date: "2 WEEKS AGO"
    }
  ];

  return (
    <div className="ml-0 md:ml-72 p-6 text-white">
      <h2 className="text-xl font-bold mb-4">FEATURED</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="bg-gray-900 p-4 rounded-lg">
            <img src={article.image} alt={article.title} className="w-full h-40 object-cover rounded" />
            <p className="text-sm text-gray-400 mt-2">{article.time}</p>
            <h3 className="font-bold text-lg mt-1">{article.title}</h3>
            <p className="text-gray-400 text-xs mt-1">ARTICLE • {article.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black min-h-screen flex">
      <button className="absolute top-4 left-4 text-white md:hidden" onClick={toggleSidebar}>
        <Search size={24} />
      </button>
      <ExploreNav isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <FeaturedArticles />
    </div>
  );
};

export default App;
