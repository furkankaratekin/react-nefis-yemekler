import React from "react";
import { Link } from "react-router-dom";

const PageNotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-8xl font-extrabold text-gray-800 mb-4 animate-bounce">
        404
      </h1>
      <p className="text-2xl text-gray-600 mb-8">Oops! Sayfa Bulunamadı.</p>
      <Link to="/" className="relative inline-block text-lg group">
        <span className="relative z-10 block px-5 py-3 bg-white border border-gray-900 rounded-lg group-hover:bg-gray-800 transition-all duration-300 ease-out">
          <span className="relative text-gray-800 group-hover:text-white">
            Ana Sayfaya Dön
          </span>
        </span>
        <span className="absolute inset-0 w-full h-full bg-gray-900 rounded-lg group-hover:scale-110 transition-transform duration-300 ease-out"></span>
      </Link>
    </div>
  );
};

export default PageNotFoundPage;
