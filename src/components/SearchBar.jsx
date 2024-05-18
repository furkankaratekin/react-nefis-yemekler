import React, { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const clearInput = () => {
    setQuery("");
  };

  const handleSearch = () => {
    console.log(query);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center justify-center w-full mt-20">
      <div className="relative flex items-center w-1/2">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search for recipes..."
        />
        <button
          onClick={clearInput}
          className="absolute right-12 text-gray-400 hover:text-gray-600 focus:outline-none"
        >
          <FaTimes />
        </button>
        <button
          onClick={handleSearch}
          className="absolute right-2 text-gray-400 hover:text-gray-600 focus:outline-none"
        >
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
