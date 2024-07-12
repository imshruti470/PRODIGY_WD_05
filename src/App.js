import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './weather';
import './app.css'
import './api.json'

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('London');
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching the weather data", error);
      }
    };

    fetchData();
  }, [city, API_KEY]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <input 
          type="text" 
          value={city} 
          onChange={e => setCity(e.target.value)} 
          placeholder="Enter city"
        />
        {weatherData ? <Weather data={weatherData} /> : <p>Loading...</p>}
      </header>
    </div>
  );
}

export default App;
