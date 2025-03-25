import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowCircleDown, HiOutlineArrowCircleUp } from "react-icons/hi";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { permafrost, Buckle_up, skynews_nasa } from "/src/Asset/image";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isMultimediaOpen, setIsMultimediaOpen] = useState(false);

  const handleProfileClick = () => navigate("/AuthenticatorSignUp");
  const handleHomeClick = () => navigate("/");
  const handleNavigation = (path) => navigate(path);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const toggleExplore = () => setIsExploreOpen(!isExploreOpen);
  const toggleMultimedia = () => setIsMultimediaOpen(!isMultimediaOpen);

  const navItems = [
    { name: "Home", type: "route", path: "/" },
    { name: "APOD", type: "route", path: "/Apod" },
    { name: "Mission", type: "route", path: "/SpaceXmission" },
    { name: "Astronauts", type: "route", path: "/PeopleOfNasa" },
    { name: "Skywatching", type: "route", path: "/Asteroids" },
    { name: "ភាសាខ្មែរ", type: "route", path: "/khmer" }
];

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
        type: "ARTICLE",
        time: "4 MIN READ",
        title:
         "NASA Helps Find Thawing Permafrost Adds to Near-Term Global Warming",
        image: permafrost,
    },
  ];

  return (
    <header className="w-full flex justify-between items-center p-4 bg-black relative z-50">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        {/* Hamburger Menu (Mobile) */}
        <button
          className="text-white text-2xl lg:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>

        {/* Explore Dropdown (Desktop) */}
        <div className="relative hidden lg:block">
          <button 
            className="flex items-center space-x-2 px-6 py-2 text-white text-3xl font-bold hover:text-gray-300 focus:outline-none"
            onClick={toggleExplore}
          >
            <span>Explore</span>
            {isExploreOpen ? <HiOutlineArrowCircleUp /> : <HiOutlineArrowCircleDown />}
          </button>
          {isExploreOpen && (
            <div className=" mt-2 w-screen bg-black text-white shadow-lg flex z-50">
              {/* Sidebar Menu */}
              <div className="w-64 p-6 border-r border-gray-700">
                <ul className="space-y-3">
                  {navItems.map((item, index) => (
                    <li 
                      key={index} 
                      className="hover:text-gray-300 cursor-pointer"
                      onClick={() => handleNavigation(item.path)}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Featured Section */}
              <div className="flex-1 p-6">
                <h2 className="text-gray-400 text-sm font-bold mb-4 ">FEATURED</h2>
                <div className="grid grid-cols-3 gap-6 mr-12">
                  {featuredArticles.map((article, index) => (
                    <div key={index} className="cursor-pointer">
                      <div className="bg-gray-800 overflow-hidden">
                        <img 
                          src={article.img} 
                          alt={article.title} 
                          className="w-full h-80 object-cover" 
                        />
                      </div>
                      <p className="text-gray-400 text-xs mt-2">{article.time}</p>
                      <h3 className="font-bold text-lg mt-1">{article.title}</h3>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className="text-xs border border-gray-600 rounded-full px-2 py-1">{article.type}</span>
                        <span className="text-xs text-gray-400">{article.days}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Search Bar (Desktop) */}
        {!isSearchOpen && (
          <input
            type="text"
            placeholder="Search..."
            className="hidden lg:block px-4 py-2 text-white bg-black border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        )}
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">

        {/* Search Icon (Mobile) */}
        <FiSearch
          className="lg:hidden text-white text-2xl cursor-pointer hover:text-gray-300"
          onClick={toggleSearch}
        />

        {/* Profile Icon */}
        <FaRegUserCircle
          className="hidden lg:block text-white text-2xl cursor-pointer hover:text-gray-300"
          onClick={handleProfileClick}
        />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white p-6 lg:hidden z-50">
          <ul className="space-y-4">
            {navItems.map((item, index) => (
              <li 
                key={index} 
                className="hover:text-gray-300 cursor-pointer"
                onClick={() => handleNavigation(item.path)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="bg-black absolute top-0 left-0 w-full h-full text-white p-6 z-50 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <input
              type="text"
              placeholder="Search the universe"
              className="w-full px-4 py-2 bg-black text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              autoFocus
            />
            <button className="ml-4 text-2xl text-white focus:outline-none" onClick={toggleSearch}>
              <AiOutlineClose />
            </button>
          </div>
          {/* Suggested Searches */}
          <div className="bg-black text-white p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-4">Suggested Searches</h3>
            <ul className="space-y-4">
              {["Climate Change", "Artemis", "Expedition 64", "Mars Perseverance", "SpaceX Crew-2", "International Space Station"].map((item, index) => (
                <li key={index} className="flex items-center space-x-2 border-b border-gray-200 pb-2">
                  <FiSearch className="text-gray-500" />
                  <span>{item}</span>
                </li>
              ))}
              <li className="text-blue-500 cursor-pointer pt-2 pb-7">View All Topics A-Z</li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
