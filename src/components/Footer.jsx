import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer-section" className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        {/* Grid layout for the footer, adjusted for different screen sizes */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Left Section */}
          <div>
            {/* NASA Logo */}
            <img src="./image/nasa-logo.png" alt="NASA Logo" className="w-16 mb-4" />
            {/* Organization Title */}
            <h3 className="text-xl font-bold">National Aeronautics and Space Administration</h3>
            {/* Organization Description */}
            <p className="mt-2 text-sm">
              NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery.
            </p>
            {/* Join Us Link with Arrow */}
            <div className="flex items-center space-x-2 pt-5">
              <a href="#" className="text-red-500 font-bold">Join Us</a>
              <span className="w-4 h-4 flex items-center justify-center bg-red-500 rounded-full text-sm">
                🡢
              </span>
            </div>
          </div>

          {/* Middle Sections */}
          {/* Home Section */}
          <div>
            <h4 className="font-bold mb-4">Home</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">News & Events</a></li>
              <li><a href="#" className="hover:underline">Multimedia</a></li>
              <li><a href="#" className="hover:underline">NASA Live</a></li>
              <li><a href="#" className="hover:underline">Missions</a></li>
            </ul>
          </div>
          {/* More Section */}
          <div>
            <h4 className="font-bold mb-4">More</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Humans in Space</a></li>
              <li><a href="#" className="hover:underline">Earth & Climate</a></li>
              <li><a href="#" className="hover:underline">The Solar System</a></li>
              <li><a href="#" className="hover:underline">The Universe</a></li>
              <li><a href="#" className="hover:underline">Science</a></li>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            {/* Follow NASA Section */}
            <h4 className="font-bold mb-4">Follow NASA</h4>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-white text-2xl"><FaFacebookF /></a>
              <a href="#" className="text-white text-2xl"><FaTwitter /></a>
              <a href="#" className="text-white text-2xl"><FaYoutube /></a>
              <a href="#" className="text-white text-2xl"><FaInstagram /></a>
            </div>
            {/* Additional Links */}
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">More NASA Social Accounts</a></li>
              <li><a href="#" className="hover:underline">NASA Newsletters</a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
