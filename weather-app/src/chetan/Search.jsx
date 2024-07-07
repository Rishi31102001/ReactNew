import { useState } from "react"

import { useNavigate } from "react-router-dom"
function Search() {
  const [country , getName] = useState('')
  const navigate = useNavigate()
  function route(){
    navigate(`/search/${country}`)
  }
    return (
        <div>
            <input placeholder="Search Country" type="text" onChange={country => getName(country.target.value)}/><br />
            <button onClick={route}>Search</button>
           
        </div>
    )
}

export default Search