import React, { useState } from 'react';
import '../asset/css/search.css';
import { FaSearch } from "react-icons/fa";

const SearchFilter = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };
  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search profiles..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-filter-field"
      />
     <FaSearch onClick={handleSearch}  className="search-icon"/>
    </div>
  )
}

export default SearchFilter