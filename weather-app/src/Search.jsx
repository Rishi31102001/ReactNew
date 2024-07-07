import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Search = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${query}`);
  };

  return (
    <div className="search-container">
      <h1>Search Weather</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter city or country"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;