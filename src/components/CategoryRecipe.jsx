import React from 'react'
import { Link } from 'react-router-dom';

const CategoryRecipe = () => {
  return (
    <section className="text-gray-600 body-font">
      <h3 className='text-center mt-16 text-3xl font-serif text-blue-950'>Çorbalar</h3> {/* api ile gelecek */}
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/4 sm:w-1/2 p-4">
            <Link to="/list-recipe">
              <div className="relative group">
                <img
                  alt="mercimek"
                  className="w-full h-full object-cover object-center opacity-85 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                  src="https://cdn.yemek.com/mnresize/1250/833/uploads/2022/12/sade-mercimek-corbasi-sunum-yemekcom.jpg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-2xl font-medium text-white bg-opacity-50 px-2 py-1">
                    Çorbalar
                  </h1>
                </div>
              </div>
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default CategoryRecipe
