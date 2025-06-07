import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SpaceXmission = () => {
  const [missions, setMissions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch the mission data from the API
  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const response = await fetch("https://api.spacexdata.com/v4/launches"); // Example SpaceX API endpoint
        const data = await response.json();
        setMissions(data); // Set the fetched data to state
      } catch (error) {
        console.error("Error fetching mission data:", error);
      }
    };

    fetchMissions();
  }, []); // Empty dependency array to run this only once when the component mounts

  // Filter missions based on search query
  const filteredMissions = missions.filter((mission) =>
    mission.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="bg-gray-200 min-h-screen p-8 flex flex-col items-center justify-center">
        {/* Title and Search Bar */}
        <div className="flex flex-col items-center mb-8 space-y-4">
          <p className="text-3xl font-semibold text-gray-700">Mission List</p>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search Mission..."
              className="py-2 pl-4 pr-24 rounded-lg bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update search query
            />
          </div>
        </div>

        {/* Grid for Missions */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-6">
          {filteredMissions.length > 0 ? (
            filteredMissions.map((mission) => (
              <Link
                key={mission.id}
                to={`/MissionSummarize/${mission.id}`}
                className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col"
              >
                <div className="w-full overflow-hidden rounded-t-lg p-4 flex-grow">
                  <img
                    src={
                      mission.links.patch.small ||
                      "https://via.placeholder.com/300?text=No+Image"
                    }
                    alt={mission.name}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </div>
                <div className="p-4 bg-blue-200 mt-auto">
                  <h2 className="text-lg font-semibold text-gray-900 truncate">
                    {mission.name}
                  </h2>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center col-span-full py-10">
              <p className="text-lg text-gray-600">No missions found.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SpaceXmission;