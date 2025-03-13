import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowCircleDown } from "react-icons/hi";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control mobile menu visibility
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State to control search overlay visibility

  // Function to handle navigation to the subscribe page
  const handleProfileClick = () => {
    navigate("/AuthenticatorSignUp");
  };

  // Navigate to LandingPage when Home is clicked
  const handleHomeClick = () => {
    navigate("/"); // This navigates to the LandingPage.jsx
  };

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Toggle search overlay
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header className="w-full flex justify-between items-center p-4 bg-black relative z-50">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        {/* Hamburger Menu (Visible on mobile screens) */}
        <button
          className="text-white text-2xl lg:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>

        {/* Explore Dropdown (Visible on large screens) */}
        <div className="relative group hidden lg:block">
          <button className="flex items-center space-x-2 px-6 py-2 text-white text-3xl font-bold hover:text-gray-300 focus:outline-none">
            <span>Explore</span>
            <HiOutlineArrowCircleDown />
          </button>
          {/* Dropdown menu */}
          <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
            <ul>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={handleHomeClick} // Navigate to LandingPage when clicked
              >
                Home
              </li>
            </ul>
          </div>
        </div>

        {/* Search Bar (Visible on large screens) */}
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
        {/* Multimedia Dropdown (Visible on large screens) */}
        <div className="relative group hidden lg:block">
          <button className="flex items-center space-x-2 px-4 py-2 text-white hover:text-gray-300 focus:outline-none">
            <span>Multimedia</span>
            <FiChevronDown />
          </button>
          {/* Dropdown menu */}
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
            <ul>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Photos</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Videos</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Audio</li>
            </ul>
          </div>
        </div>

        {/* Search Icon (Visible on mobile screens) */}
        <div className="lg:hidden">
          <FiSearch
            className="text-white text-2xl cursor-pointer hover:text-gray-300"
            onClick={toggleSearch}
          />
        </div>

        {/* Profile Icon */}
        <div className="hidden lg:block relative">
          <FaRegUserCircle
            className="text-white text-2xl cursor-pointer hover:text-gray-300"
            onClick={handleProfileClick}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white p-6 lg:hidden z-50">
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">Explore</h3>
              <ul className="space-y-2">
                <li className="hover:text-gray-300 cursor-pointer">Option 1</li>
                <li className="hover:text-gray-300 cursor-pointer">Option 2</li>
                <li className="hover:text-gray-300 cursor-pointer">Option 3</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg">Multimedia</h3>
              <ul className="space-y-2">
                <li className="hover:text-gray-300 cursor-pointer">Photos</li>
                <li className="hover:text-gray-300 cursor-pointer">Videos</li>
                <li className="hover:text-gray-300 cursor-pointer">Audio</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="bg-black absolute top-0 left-0 w-full h-full text-white p-6 z-50">
          <div className="flex justify-between items-center mb-6 ">   
            <input    
                     
              type="text"
              placeholder="Search the universe"
              className="w-full px-4 py-2 bg-black text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button
              className="ml-4 text-2xl text-white focus:outline-none"
              onClick={toggleSearch}
            >
              <AiOutlineClose />
            </button>
          </div>

          {/* Suggested Searches */}
          <div className="bg-black text-white p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-4">Suggested Searches</h3>
            <ul className="space-y-4">
              {[
                "Climate Change",
                "Artemis",
                "Expedition 64",
                "Mars Perseverance",
                "SpaceX Crew-2",
                "International Space Station",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between border-b border-gray-200 pb-2"
                >
                  <div className="flex items-center space-x-2">
                    <FiSearch className="text-gray-500" />
                    <span>{item}</span>
              
                  </div>
                </li>
              ))}
              <li className="text-blue-500 cursor-pointer pt-2 pb-7">
                View All Topics A-Z
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
