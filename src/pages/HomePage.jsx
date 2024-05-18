import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import SearchBar from "../components/SearchBar";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Header></Header>
      <Slider></Slider>
      <hr />
      <SearchBar></SearchBar>
      <Gallery></Gallery>
      <Footer></Footer>
    </>
  );
};

export default HomePage
