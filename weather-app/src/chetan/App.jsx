import {
  BrowserRouter , Routes , Route
} from "react-router-dom";

import './App.css'
import  Search from "./Search"
import SearchResult from "./SearchResult";
import Weather from "./Weather";

function App() {


return (
  <>
  <BrowserRouter >
    <Routes>
      <Route path="/"  element={<Search />}/> 
      <Route path="/search/:country" element={<SearchResult />} />
      <Route path="/search/:country/:lon/:lat" element ={<Weather/>} />

    </Routes>
  </BrowserRouter>
  </>
)
}

export default App