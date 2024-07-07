import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './index.css';

const WeatherDetail = () => {
  const { country, lon, lat } = useParams();
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const apiKey = 'c794508908b44cf992d35958240407';

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${country}&lat=${lat}&lon=${lon}`);
        console.log(response);
        setWeather(response.data.current);
        setError('');
      } catch (err) {
        setError('Data not found');
        setWeather(null);
      }
    };

    fetchWeather();
  }, [lat, lon]);

  return (
    <div className="country-details-container">
      <h1>Weather Details for {country}</h1>
      {error && <p className="error">{error}</p>}
      {weather && (
        <div className="weather-info">
          <h2>{weather.condition.text}</h2>
          <p>Temperature: {weather.temp_c}°C ({weather.temp_f}°F)</p>
          <p>Feels Like: {weather.feelslike_c}°C ({weather.feelslike_f}°F)</p>
          <p>Wind: {weather.wind_kph} kph ({weather.wind_mph} mph) {weather.wind_dir}</p>
          <p>Humidity: {weather.humidity}%</p>
          <p>Pressure: {weather.pressure_mb} mb</p>
          <p>Visibility: {weather.vis_km} km ({weather.vis_miles} miles)</p>
          <p>UV Index: {weather.uv}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherDetail;