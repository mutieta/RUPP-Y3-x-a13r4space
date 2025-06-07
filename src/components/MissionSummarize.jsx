import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MissionSummarize = () => {
  const { id } = useParams();
  const [mission, setMission] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMissionDetails = async () => {
      try {
        const response = await fetch(
          `https://api.spacexdata.com/v4/launches/${id}`
        );
        if (!response.ok) throw new Error("Failed to fetch mission details.");
        const data = await response.json();
        setMission(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchMissionDetails();
  }, [id]);

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-center text-red-600 bg-white shadow-lg p-6 rounded-lg">
          <p>Error loading mission details: {error}</p>
        </div>
      </div>
    );
  }

  if (!mission) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="loader text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            {/* Mission Header */}
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
              {mission.name}
            </h1>
            <p className="text-xl text-center text-gray-600 mb-8">
              {mission.details || "No details available."}
            </p>

            {/* Mission Details Section */}
            <div className="flex flex-col md:flex-row md:space-x-8">
              {/* Left Side */}
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h2 className="text-3xl font-semibold text-gray-700 mb-4">
                  Mission Information
                </h2>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li>
                    <strong className="text-gray-900">Launch Date:</strong>{" "}
                    {new Date(mission.date_utc).toLocaleDateString()}
                  </li>
                  <li>
                    <strong className="text-gray-900">Success:</strong>{" "}
                    {mission.success ? "Yes" : "No"}
                  </li>
                  {mission.rocket && (
                    <li>
                      <strong className="text-gray-900">Rocket:</strong>{" "}
                      {mission.rocket.name}
                    </li>
                  )}
                  {mission.payloads && mission.payloads.length > 0 && (
                    <li>
                      <strong className="text-gray-900">Payload:</strong>
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        {mission.payloads.map((payload) => (
                          <li key={payload.id}>
                            <span className="text-gray-600">
                              {payload.name} - {payload.type} ({payload.orbit})
                            </span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  )}
                </ul>
              </div>

              {/* Right Side (Image) */}
              <div className="md:w-1/3 flex justify-center items-center">
                <img
                  src={
                    mission.links?.patch?.small ||
                    "https://via.placeholder.com/300?text=No+Image"
                  }
                  alt={mission.name}
                  className="w-full max-w-sm h-auto object-contain rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Links Section */}
            <div className="mt-8 text-center">
              {mission.links?.article && (
                <a
                  href={mission.links.article}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center justify-center gap-2"
                >
                  <span>Read more about the mission</span>
                  <span>&rarr;</span>
                </a>
              )}
              {mission.links?.webcast && (
                <a
                  href={mission.links.webcast}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center justify-center gap-2 mt-4"
                >
                  <span>Watch the launch video</span>
                  <span>&rarr;</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MissionSummarize;