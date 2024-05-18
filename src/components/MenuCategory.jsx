import React from "react";
import { Link } from "react-router-dom";

const MenuCategory = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/4 sm:w-1/2 p-4">
            <Link to="/">
              <div className="relative group">
                <img
                  alt="mercimek"
                  className="w-full h-full object-cover object-center opacity-85 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                  src="https://cdn.yemek.com/mnresize/1250/833/uploads/2022/12/sade-mercimek-corbasi-sunum-yemekcom.jpg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-2xl font-medium text-white bg-opacity-50 px-2 py-1">
                    Kahvaltı Menüsü
                  </h1>
                </div>
              </div>
            </Link>
          </div>
          <div className="lg:w-1/4 sm:w-1/2 p-4">
            <Link to="/list-category">
              <div className="relative group">
                <img
                  alt="domates"
                  className="w-full h-full object-cover object-center opacity-85 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                  src="https://cdn.yemek.com/mnresize/1250/833/uploads/2022/03/ev-usulu-pizza-yemekcom.jpg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-2xl font-medium text-white bg-opacity-50 px-2 py-1">
                    Akşam yemeği menüsü
                  </h1>
                </div>
              </div>
            </Link>
          </div>
          <div className="lg:w-1/4 sm:w-1/2 p-4">
            <Link to="/list-category">
              <div className="relative group">
                <img
                  alt="ezogelin"
                  className="w-full h-full object-cover object-center opacity-85 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                  src="https://cdn.yemek.com/mnresize/1250/833/uploads/2015/07/puf-boregi-yeni-onecikan.jpg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-2xl font-medium text-white bg-opacity-50 px-2 py-1">
                    Ramazan Menüsü
                  </h1>
                </div>
              </div>
            </Link>
          </div>
          <div className="lg:w-1/4 sm:w-1/2 p-4">
            <Link to="/list-category">
              <div className="relative group">
                <img
                  alt="iskembe"
                  className="w-full h-full object-cover object-center opacity-85 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                  src="https://www.cumhuriyet.com.tr/Archive/2023/6/21/154721798-akdeniz-salata.jpg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-2xl font-medium text-white bg-opacity-50 px-2 py-1">
                    Doğum Günü Menüsü
                  </h1>
                </div>
              </div>
            </Link>
          </div>
          <div className="lg:w-1/4 sm:w-1/2 p-4">
            <Link to="/list-category">
              <div className="relative group">
                <img
                  alt="tavuk suyu"
                  className="w-full h-full object-cover object-center opacity-85 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                  src="https://i.lezzet.com.tr/images-xxlarge/salcali-makarna-f60e9ce7-6ad0-49ab-8dae-a3f6aa385734"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-2xl font-medium text-white bg-opacity-50 px-2 py-1">
                   Yılbaşı Menüsü
                  </h1>
                </div>
              </div>
            </Link>
          </div>
          <div className="lg:w-1/4 sm:w-1/2 p-4">
            <Link to="/list-category">
              <div className="relative group">
                <img
                  alt="mantar"
                  className="w-full h-full object-cover object-center opacity-85 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                  src="https://i.lezzet.com.tr/images-xxlarge-recipe/sebzeli_zeytinyagli_enginar-f12ccd3d-663c-4ae9-8170-550552da1409.jpg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-2xl font-medium text-white bg-opacity-50 px-2 py-1">
                    Sebze Yemekleri
                  </h1>
                </div>
              </div>
            </Link>
          </div>
          <div className="lg:w-1/4 sm:w-1/2 p-4">
            <Link to="/list-category">
              <div className="relative group">
                <img
                  alt="brokoli"
                  className="w-full h-full object-cover object-center opacity-85 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4ZOYj_MNM3VYrPLfKa4AJtXmCLXGfn5OTsYnE5zZ3g&s"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-2xl font-medium text-white bg-opacity-50 px-2 py-1">
                    Et Yemekleri
                  </h1>
                </div>
              </div>
            </Link>
          </div>
          <div className="lg:w-1/4 sm:w-1/2 p-4">
            <Link to="/list-category">
              <div className="relative group">
                <img
                  alt="balkabagi"
                  className="w-full h-full object-cover object-center opacity-85 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                  src="https://img-s3.onedio.com/id-627bc8d83814729c6b2965c2/rev-0/w-600/h-450/f-jpg/s-867d54e7c63431f18cd5117fdf289f0f28287181.jpg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-2xl font-medium text-white bg-opacity-50 px-2 py-1">
                    Tatlı
                  </h1>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuCategory;
