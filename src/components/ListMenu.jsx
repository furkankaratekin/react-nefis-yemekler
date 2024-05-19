import React from 'react'
import { Link } from 'react-router-dom';

const ListMenu = () => {
  return (
    <section className="text-gray-600 body-font">
      <p className="text-center mt-20 text-3xl text-blue-950 font-serif">
        {" "}
        Menu Adı
      </p>
      <div className="container px-5 py-24 mx-auto">
        <p className="mb-20">
          Açıklama olacak Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Velit corrupti voluptates aspernatur obcaecati laborum inventore
          cum porro optio, quis ex perferendis adipisci, quidem nobis quasi
          ullam eaque ipsam minus? Ipsa eum dolorum magni, quisquam odit nisi
          quaerat enim deleniti est officia, fugiat, incidunt quam facere? Non
          eaque, delectus voluptatibus in eius odio. Aspernatur autem veniam
          vero ipsum excepturi quo deleniti, commodi, in quidem iste quaerat.
          Laudantium sit quis odit natus nobis dignissimos ducimus molestiae
          impedit beatae incidunt dolores unde, tempora eum adipisci libero ea
          corrupti error nostrum voluptatem earum tempore voluptates delectus
          inventore. Rerum explicabo perspiciatis nesciunt voluptates quidem
          temporibus.
        </p>

        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/4 sm:w-1/2 p-4">
            <Link to="/list-recipe">
              <div className="relative group">
                <img
                  alt="mercimek"
                  className="w-full h-full object-cover object-center opacity-85 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                  src="https://i.pinimg.com/736x/c9/ca/41/c9ca4141982f32e5661457b06ef42379.jpg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-2xl font-medium text-white bg-opacity-50 px-2 py-1">
                    Tarif-1
                  </h1>
                </div>
              </div>
            </Link>
          </div>
          <div className="lg:w-1/4 sm:w-1/2 p-4">
            <Link to="/list-recipe">
              <div className="relative group">
                <img
                  alt="domates"
                  className="w-full h-full object-cover object-center opacity-85 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                  src="https://cdn.idntimes.com/content-images/community/2018/10/5ad1a56f0f2543171c9ab74c-5014ca12344a864e567deee14c3ddbe8_600x400.jpg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-2xl font-medium text-white bg-opacity-50 px-2 py-1">
                    Tarif-2
                  </h1>
                </div>
              </div>
            </Link>
          </div>
          <div className="lg:w-1/4 sm:w-1/2 p-4">
            <Link to="/list-recipe">
              <div className="relative group">
                <img
                  alt="ezogelin"
                  className="w-full h-full object-cover object-center opacity-85 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                  src="http://www.akkaryemek.com/images/icerik/1690129809.jpg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-2xl font-medium text-white bg-opacity-50 px-2 py-1">
                    Tarif-3
                  </h1>
                </div>
              </div>
            </Link>
          </div>
          <div className="lg:w-1/4 sm:w-1/2 p-4">
            <Link to="/list-recipe">
              <div className="relative group">
                <img
                  alt="iskembe"
                  className="w-full h-full object-cover object-center opacity-85 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                  src="https://www.cumhuriyet.com.tr/Archive/2023/6/21/154721798-akdeniz-salata.jpg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-2xl font-medium text-white bg-opacity-50 px-2 py-1">
                    Tarif-4
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

export default ListMenu
