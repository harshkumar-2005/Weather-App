import { useState } from "react";
import Navbar from "./component/Navbar";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;

    setLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      const response = await fetch(
        `https://weather-app-1-rl9d.onrender.com/v1/api/weather?city=${city.trim()}`
      );
      const data = await response.json();

      if (data.success) {
        setWeatherData(data.result);
      } else {
        setError(data.message || "Something went wrong");
      }
    } catch (err) {
      setError("Could not connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <>
      <Navbar />

      <form onSubmit={handleSubmit} className="p-4 flex gap-2 items-center">
        <label htmlFor="city" className="font-semibold">
          City
        </label>
        <input
          id="city"
          type="text"
          value={city}
          onChange={handleChange}
          placeholder="Enter city name"
          className="border px-2 py-1 rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="border px-3 py-1 rounded hover:bg-gray-100 disabled:bg-gray-200"
        >
          {loading ? "Searching..." : "Submit"}
        </button>
      </form>

      {/* Error Message */}
      {error && <div className="px-4 text-red-500 font-medium">{error}</div>}

      {/* Weather Results */}
      {weatherData && (
        <div className="m-4 p-6 border rounded-lg shadow-sm max-w-md">
          <h2 className="text-2xl font-bold">{weatherData.name}</h2>
          <div className="mt-2">
            <p className="text-4xl font-semibold">
              {Math.round(weatherData.main.temp)}°C
            </p>
            <p className="capitalize text-gray-600">
              {weatherData.weather[0].description}
            </p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500">Humidity:</span>{" "}
              {weatherData.main.humidity}%
            </div>
            <div>
              <span className="text-gray-500">Wind:</span>{" "}
              {weatherData.wind.speed} m/s
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
