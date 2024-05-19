import React from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <Link to="/list-recipe">
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/4 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/600x360"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    KATEGORİ
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Yemeğin Adı
                  </h1>
                  <p class="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Gallery;
