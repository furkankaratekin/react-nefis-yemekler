import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery); // Her harf girişinde arama terimini gönder
  };

  const clearInput = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <div className="flex items-center justify-center w-full mt-20">
      <div className="relative flex items-center w-1/2">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search for recipes..."
        />
        <button
          onClick={clearInput}
          className="absolute right-12 text-gray-400 hover:text-gray-600 focus:outline-none"
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
