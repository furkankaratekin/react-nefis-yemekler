import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import GalleryCategory from "../components/GalleryCategory";


const CategoriesPage = () => {
  return (
    <>
      <Header></Header>
      <h2 className="text-center mt-16 text-2xl font-serif">
        Kategoriler
      </h2>
      <GalleryCategory></GalleryCategory>
      <Footer></Footer>
    </>
  );
};

export default CategoriesPage;
