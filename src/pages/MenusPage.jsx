import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GalleryCategory from '../components/GalleryCategory'
import MenuCategory from '../components/MenuCategory'

const MenusPage = () => {
  return (
    <>
      <Header />
      <h2 className="text-center mt-16 text-2xl font-serif">
        Menüler
      </h2>
      <MenuCategory />
      <Footer />
    </>
  );
}

export default MenusPage
