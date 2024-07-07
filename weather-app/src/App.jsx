import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchResult from './SearchResult';
import WeatherDetail from './WeatherDetail';
import Search from './Search';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/search/:country" element={<SearchResult />} />
          <Route path="/search/:country/:lon/:lat" element={<WeatherDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;