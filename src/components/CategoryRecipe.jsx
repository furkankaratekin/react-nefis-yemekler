import React from 'react'
import { Link } from 'react-router-dom';

const CategoryRecipe = () => {
  return (
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="-my-8 divide-y-2 divide-gray-100">
          <h3 className="text-left mb-16 text-3xl font-semibold text-black">
            Çorbalar
          </h3>


          <div class="py-8 flex flex-wrap md:flex-nowrap">
            <div class="mr-8">
              <img
                class="w-64 h-64 sm:w-64 sm:h-64 md:w-64 md:h-64 lg:w-64 lg:h-64 object-cover"
                src="https://cdn3d.iconscout.com/3d/premium/thumb/food-and-drink-5727926-4800418.png?f=webp"
                alt=""
              />
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                Bitters hashtag waistcoat fashion axe chia unicorn
              </h2>
              <p class="leading-relaxed">
                Glossier echo park pug, church-key sartorial biodiesel
                vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon
                party messenger bag selfies, poke vaporware kombucha
                lumbersexual pork belly polaroid hoodie portland craft beer.
              </p>
              <a class="text-indigo-500 inline-flex items-center mt-4">
                Learn More
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoryRecipe
