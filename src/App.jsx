import { useState } from "react";

import "./App.css";
import WeatherCard from "./components/WeatherCard";

function App() {
  const API_KEY = import.meta.env.VITE_WEATHER_API;
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  //example of how its done in every other node application, not vite
  // const test = process.env.VITE_WEATHER_API

  const [city, setCity] = useState([]);
  const [weatherData, setWeatherData] = useState({});

  async function handleSearchClick() {
    console.log(city);
    try {
      const url = `${BASE_URL}?key=${API_KEY}&q=${city}&days=7`;
      const res = await fetch(url);
      const data = await res.json();
      setWeatherData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {console.log(import.meta.env.VITE_KEY)}
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearchClick}>Search</button>

      {weatherData.forecast?.forecastday.map((forecast) => (
        <div key={forecast.date}>
          <WeatherCard
            date={forecast.date}
            temp={forecast.day.maxtemp_f}
            rain={forecast.day.daily_chance_of_rain}
          />
        </div>
      ))}
    </>
  );
}

export default App;
