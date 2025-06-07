import React, { useState } from "react";
import { LiaLinkedinIn } from "react-icons/lia";
import { TiSocialFacebook } from "react-icons/ti";
import { RiTwitterXLine } from "react-icons/ri";
import { TbClover } from "react-icons/tb";

function NewsPage() {
  const [likes, setLikes] = useState(0); // State for likes
  const [comment, setComment] = useState(""); // State for the comment input
  const [comments, setComments] = useState([]); // State for the list of comments

  // Handle like button click
  const handleLike = () => {
    setLikes(likes + 1);
  };

  // Handle comment submission
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment(""); // Clear the input field
    }
  };

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto p-20 bg-white flex flex-col lg:flex-row">
        {/* Sidebar Section */}
        <aside className="lg:w-1/4 pr-2">
          {/* Author and Date Section */}
          <div className="text-sm mb-4">
            <p className="font-bold text-lg">Tiernan P. Doyle</p>
            <hr className="my-2" />
            <p className="text-gray-500">Oct 30, 2024</p>
            <hr className="my-2" />
          </div>

          {/* Article Button */}
          <div className="mb-4">
            <button className="flex items-center space-x-2 text-gray-600">
              <TbClover className="h-5 w-5" />
              <span className="text-sm font-medium">ARTICLE</span>
            </button>
            <hr className="my-2" />
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-blue-500" aria-label="Twitter">
              <RiTwitterXLine className="h-6 w-6 bg-blue-600 rounded-sm" />
            </a>
            <a href="#" className="text-white hover:text-blue-500" aria-label="Facebook">
              <TiSocialFacebook className="h-6 w-6 bg-blue-500 rounded-sm" />
            </a>
            <a href="#" className="text-white hover:text-blue-500" aria-label="LinkedIn">
              <LiaLinkedinIn className="h-6 w-6 bg-blue-400 rounded-sm" />
            </a>
          </div>
        </aside>

        {/* Main Content Section */}
        <main className="lg:w-3/4">
          <div className="text-gray-500 text-xs mb-4">
            <p>4 MIN READ</p>
          </div>
          <article className="prose">
            <h1 className="text-gray-800 text-4xl font-bold">
              NASA Technologies Named Among TIME Inventions of 2024
            </h1>
            <div className="my-4 pt-20">
              <p>
                As NASA continues to innovate for the benefit of humanity, agency inventions that use
                new structures to harness sunlight for space travel, enable communications with
                spacecraft at record-breaking distances, and determine the habitability of a moon of
                Jupiter, were named Wednesday among TIME’s Inventions of 2024.
              </p>
              <br />
              <p>
                "The NASA workforce — wizards, I call them — have been at the forefront of invention
                and technology for more than 65 years," said NASA Administrator Bill Nelson. "From
                developing Europa Clipper, the largest satellite for a planetary mission that NASA has
                ever launched, to the Advanced Composite Solar Sail System, and communicating with
                lasers from deep space, NASA is improving our understanding of life on Earth — and the
                cosmos — for the benefit of all."
              </p>
              <h2 className="text-xl font-semibold mt-6">
                Solar Sailing with Composite Booms
              </h2>
            </div>
            <div className="my-6">
              <img
                className="w-full"
                src="./image/acs.jpg" // Ensure the correct path
                alt="Solar Sail with Composite Booms"
                loading="lazy"
              />
              <p className="text-gray-600 text-sm mt-2">
                Meisa Perez, left, holds a deployable solar panel as Doug Tarr, right, secures it to the
                Advanced Composite Solar Sail System’s mechanical test fixture inside Building N239 at
                NASA’s Ames Research Center.
              </p>
            </div>

            {/* Like Button */}
            <div className="my-6">
              <button
                onClick={handleLike}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                👍 Like ({likes})
              </button>
            </div>

            {/* Comment Section */}
            <div className="my-6">
              <h3 className="text-lg font-semibold mb-2">Leave a Comment</h3>
              <form onSubmit={handleCommentSubmit} className="flex flex-col space-y-2">
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="border p-2 rounded w-full"
                  rows="3"
                  placeholder="Write your thoughts..."
                ></textarea>
                <button
                  type="submit"
                  className="self-start bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Submit
                </button>
              </form>
              <div className="mt-4 space-y-2">
                {comments.map((c, i) => (
                  <div key={i} className="bg-gray-100 p-2 rounded">
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}

export default NewsPage;