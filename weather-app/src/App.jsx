import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchResult from './SearchResult';
import WeatherDetail from './WeatherDetail';
import Search from './Search';
import ShoppingCart from './shoppingcart';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<Search />} />
          <Route path="/search/:country" element={<SearchResult />} />
          <Route path="/search/:country/:lon/:lat" element={<WeatherDetail />} /> */}
          <Route path="/" element={<ShoppingCart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
