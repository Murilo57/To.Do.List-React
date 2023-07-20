import React from 'react'

const Search = ({search, setSearch}) => {
  return <div className="search">
    <h2>Search:</h2>
    <input type="text" 
    value={search} 
    onChange={(e) => setSearch(e.target.value)} placegolder="Type to search..." />
  </div>
  
}

export default Search