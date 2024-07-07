import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './index.css';

const SearchResult = () => {
  const { country } = useParams();
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const apiKey = 'c794508908b44cf992d35958240407';
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(`http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${country}`);
        console.log(response.data);
        setWeather(response.data);
        setError('');
      } catch (err) {
        setError('City or country not found');
        setWeather(null);
      }
    };
    fetchWeather();
  }, [country, apiKey]);

  return (
    <>
      {error && <p className="error">{error}</p>}
      {weather && weather.map((val, index) => (
        <div 
          className="search-results-container" 
          key={index} 
          onClick={() => navigate(`/search/${val.name}/${val.lat}/${val.lon}`)}
        >
          <h1>{val.country}</h1>
          <div className="weather-info" style={{ textAlign: "center", marginTop: "5px" }}>
            <h2>{val.name}</h2>
            <p>{val.region}</p>
            <p>Longitude: {val.lon}</p>
            <p>Latitude: {val.lat}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default SearchResult;