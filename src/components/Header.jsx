import React from "react";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-gray-600 body-font sticky top-0 bg-white shadow-md z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">YemekCart</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link
            to="/category"
            className="mr-5 hover:text-gray-900 cursor-pointer"
          >
            Kategoriler
          </Link>
          <Link to="/menus" className="mr-5 hover:text-gray-900 cursor-pointer">
            Menüler
          </Link>
          <Link to="/what-to-cook" className="mr-5 hover:text-gray-900 cursor-pointer">
            Bugün Ne Pişirsem ? 
          </Link>
          <Link to="/about" className="mr-5 hover:text-gray-900 cursor-pointer">
            Hakkımızda
          </Link>
          <Link
            to="/contact"
            className="mr-5 hover:text-gray-900 cursor-pointer"
          >
            İletişim
          </Link>
        </nav>
        <Link to="/login">
          <button className="inline-flex items-center text-3xl hover:text-gray-900 ml-8">
            <CgProfile />
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
