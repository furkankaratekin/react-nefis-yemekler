import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Çorbalar",
    image:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2022/12/sade-mercimek-corbasi-sunum-yemekcom.jpg",
    value: "corbalar",
  },
  {
    name: "Ana Yemekler",
    image:
      "https://www.begonya.com/wp-content/uploads/2022/12/nezaket-kebabi-nasil-yapilir.jpg",
    value: "ana-yemekler",
  },
  {
    name: "Salatalar",
    image: "https://klike.net/uploads/posts/2022-09/1662964096_b-2.jpg",
    value: "salatalar",
  },
  {
    name: "Tatlılar",
    image:
      "https://img-s1.onedio.com/id-649862f0d4b1c6ef3e7d531d/rev-0/w-1200/h-800/f-jpg/s-e8ad012110258a3752294b2e16959092b1eae828.jpg",
    value: "tatlilar",
  },
  {
    name: "Aperatifler",
    image:
      "https://fac.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Ffac.2F2021.2F06.2F17.2F35d53638-eb18-42d8-9742-3952e0d0322d.2Ejpeg/1200x800/quality/65/notre-selection-de-mignardises-a-picorer.jpg",
    value: "aperatifler",
  },
  {
    name: "Kahvaltılıklar",
    image:
      "https://icdn.ensonhaber.com/crop/1200x0/resimler/diger/kok/2023/03/22/ramazan-boyunca-baybay-sahurda-yenirse-susatan-yiyecekler_aef11807.jpg",
    value: "kahvaltiliklar",
  },
  {
    name: "Diyet Yemekleri",
    image: "https://klike.net/uploads/posts/2022-08/1661929396_j-8.jpg",
    value: "diyet-yemekleri",
  },
  {
    name: "Hamur İşi",
    image:
      "https://glossy.espreso.co.rs/data/images/2022/12/13/14/350975_pogacashutterstock-785663056_share.jpg",
    value: "hamur-isi",
  },
];

const GalleryCategory = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap -m-4">
          {categories.map((category) => (
            <div key={category.value} className="lg:w-1/4 sm:w-1/2 p-4">
              <Link to={`/list-category/${category.value}`}>
                <div className="relative group">
                  <img
                    alt={category.name}
                    className="w-full h-full object-cover object-center opacity-85 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                    src={category.image}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-2xl font-medium text-white bg-opacity-50 px-2 py-1">
                      {category.name}
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryCategory;
