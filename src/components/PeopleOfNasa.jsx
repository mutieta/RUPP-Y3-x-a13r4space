import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { CiSearch } from 'react-icons/ci';

const PeopleOfNasa = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [peopleData, setPeopleData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    ApolloMissions: false,
    SpaceShuttleMissions: false,
    ISSAstronauts: false,
    Moonwalkers: false,
    MarsMissions: false,
  });

  const API_URL = 'https://images-api.nasa.gov/search';

  useEffect(() => {
    const fetchAstronauts = async () => {
      try {
        const response = await fetch(`${API_URL}?q=astronaut&media_type=image`);
        const data = await response.json();

        // Process the items and filter based on portrait aspect ratio
        const items = await Promise.all(
          data.collection.items
            .filter(item => item.links?.[0]?.href && item.data[0]?.media_type === 'image')
            .map(async (item) => {
              const imageUrl = item.links?.[0]?.href || 'https://via.placeholder.com/300'; // Fallback for missing images
              const img = new Image();
              img.src = imageUrl;

              // Wait for the image to load and check if it's portrait (height > width)
              const isPortrait = await new Promise(resolve => {
                img.onload = () => resolve(img.height > img.width);
              });

              return isPortrait
                ? {
                    name: item.data[0]?.title || 'No name available',
                    description: item.data[0]?.description || 'No description available',
                    image: imageUrl,
                    mission: item.data[0]?.keywords || [], // Assuming 'keywords' contains mission data
                  }
                : null; // Filter out non-portrait images
            })
        );

        // Remove null entries (non-portrait images)
        setPeopleData(items.filter(item => item !== null));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAstronauts();
  }, []);

  // Filter people based on search term and selected filters
  const filteredPeople = peopleData.filter((person) => {
    // Check if the person matches the search term (name or description)
    const matchesSearch = person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.description.toLowerCase().includes(searchTerm.toLowerCase());

    // Check if the person matches any of the selected filters
    const matchesFilters = Object.keys(filters).every((filter) => {
      if (filters[filter]) {
        return person.mission.includes(filter); // Check if the mission matches the selected filter
      }
      return true; // If the filter is not selected, include all missions
    });

    return matchesSearch && matchesFilters; // Only include person if both search and filter match
  });

  // Handle filter checkbox change
  const handleFilterChange = (filter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Container */}
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header
          className="relative bg-cover bg-center h-96 flex items-center justify-center text-white"
          style={{ backgroundImage: "url('./image/astronauts.webp')" }}
        >
        </header>

        {/* Main Content */}
        <div className="container mx-auto py-10 px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters */}
            <aside className="w-full md:w-1/4">
              <h2 className="text-xl font-semibold mb-4">Filters</h2>
              <div className="space-y-2">
                {['ApolloMissions', 'SpaceShuttleMissions', 'ISSAstronauts', 'Moonwalkers', 'MarsMissions'].map((filter, index) => (
                  <label key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4"
                      checked={filters[filter]}
                      onChange={() => handleFilterChange(filter)}
                    />
                    <span className="ml-2">{filter.replace(/([A-Z])/g, ' $1').trim()}</span>
                  </label>
                ))}
              </div>
            </aside>

            {/* People Grid */}
            <main className="w-full md:w-3/4">
              {/* Search Bar */}
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search NASA Astronauts"
                  className="w-full border border-gray-300 rounded-lg p-2 pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <CiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 text-xl" />
              </div>

              {/* Loading State */}
              {isLoading ? (
                <p className="text-center text-gray-500">Loading...</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPeople.map((person, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-800">{person.name}</h3>
                        <p className="text-gray-600 mt-2 text-sm">{person.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </main>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default PeopleOfNasa;
