import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MenuCategory = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    axios
      .get("https://nefisyemekler-clone-project.onrender.com/api/menu")
      .then((response) => {
        setMenus(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-wrap -m-4">
          {menus.map((menu) => (
            <div key={menu._id} className="lg:w-1/4 sm:w-1/2 p-4">
              <Link to={`/list-menu/${menu._id}`}>
                <div className="relative group">
                  <img
                    alt={menu.name}
                    className="w-full h-full object-cover object-center opacity-85 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                    src={menu.picture}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-2xl font-medium text-white bg-opacity-50 px-2 py-1">
                      {menu.name}
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

export default MenuCategory;
