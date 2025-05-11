import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Apod = () => {
  const navigate = useNavigate();
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [showMonthOptions, setShowMonthOptions] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // NASA API Key
  const apiKey = "vnoaoLR3rJQnYM0wfwSWTnssu967Vp173oqakocY"; // Replace with your actual NASA API key

  const months = Array.from({ length: 12 }, (_, i) => ({
    value: String(i + 1).padStart(2, "0"),
    label: new Date(0, i).toLocaleString("default", { month: "long" }),
  }));

  const isSubmitEnabled = day && month && year;

  const maxDate = new Date(); // Today's date
  const minDate = new Date("1995-06-16"); // Example start date for APOD data (June 16, 1995)

  const validateDate = () => {
    const inputDate = new Date(`${year}-${month}-${day}`);
    if (inputDate > maxDate) {
      setErrorMessage("Date is in the future. Please select a valid date.");
      return false;
    }
    if (inputDate < minDate) {
      setErrorMessage("Date is before available data. Please select a valid date.");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const handleSubmit = async () => {
    if (isSubmitEnabled && validateDate()) {
      try {
        const date = `${year}-${month}-${day}`;
        const response = await fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${apiKey}`);
        
        if (!response.ok) {
          throw new Error("Failed to fetch APOD data");
        }

        const data = await response.json();
        navigate("/ApodDetail", { state: { day, month, year, apiData: data } });
      } catch (error) {
        setErrorMessage("Error fetching data from NASA API.");
      }
    }
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest(".month-dropdown")) {
      setShowMonthOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <>
      <Navbar />
      <div
        className="text-white min-h-screen flex flex-col items-center justify-center"
        style={{
          fontFamily: "'Inter', sans-serif",
          backgroundImage: "url('/src/Asset/Buckle_Up.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl whitespace-normal font-bold text-center mb-10">
          Astronomy Picture of the Day Calendar
        </h1>

        <div className="flex flex-col md:flex-row gap-4 mb-4 w-full max-w-md px-4">
          <input
            type="number"
            placeholder="Day"
            min="1"
            max="31"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="text-center flex-1 rounded-md px-4 py-2 bg-gray-200 text-black text-lg font-semibold shadow-md"
          />

          <div className="relative flex-1 month-dropdown">
            <button
              className="w-full rounded-md px-4 py-2 bg-gray-200 text-black text-lg font-semibold shadow-md"
              onClick={() => setShowMonthOptions(!showMonthOptions)}
            >
              {month ? months.find((m) => m.value === month)?.label : "Month"}
            </button>
            {showMonthOptions && (
              <div className="absolute left-0 right-0 bg-gray-800 border border-gray-600 z-10 mt-2">
                {months.map((m) => (
                  <button
                    key={m.value}
                    onClick={() => {
                      setMonth(m.value);
                      setShowMonthOptions(false);
                    }}
                    className="w-full text-left p-2 hover:bg-gray-700 text-white"
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <input
            type="number"
            placeholder="Year"
            min="1900"
            max={new Date().getFullYear()}
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="text-center flex-1 rounded-md px-4 py-2 bg-gray-200 text-black text-lg font-semibold shadow-md"
          />
        </div>

        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}

        <button
          onClick={handleSubmit}
          disabled={!isSubmitEnabled}
          className={`rounded-md px-6 py-2 ${
            isSubmitEnabled
              ? "bg-gray-900 text-white hover:bg-blue-200 hover:text-gray-900"
              : "bg-gray-600 text-gray-400 cursor-not-allowed"
          } text-lg font-semibold shadow-md transition-transform transform`}
        >
          Submit
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Apod;
