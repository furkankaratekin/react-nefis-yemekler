import React, { useState } from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import SearchBar from "../components/SearchBar";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Header />
      <Slider />
      <hr />
      <SearchBar onSearch={handleSearch} />
      <Gallery searchQuery={searchQuery} />
      <Footer />
    </>
  );
};

export default HomePage;
