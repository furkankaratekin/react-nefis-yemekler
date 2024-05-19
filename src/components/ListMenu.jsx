import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ListMenu = () => {
  const { menuId } = useParams();
  const [menu, setMenu] = useState(null);
  const [recipes, setRecipes] = useState({});

  useEffect(() => {
    axios
      .get(`https://yemek-api-vercel.onrender.com/api/menu/${menuId}`)
      .then((response) => {
        setMenu(response.data);
        console.log(response.data); // Menü bilgilerini konsola yazdır

        // Menüdeki her tarif ID'si için tarif bilgilerini çek
        response.data.recipe_ids.forEach((recipeId) => {
          axios
            .get(`https://yemek-api-vercel.onrender.com/api/recipe/${recipeId}`)
            .then((recipeResponse) => {
              setRecipes((prevRecipes) => ({
                ...prevRecipes,
                [recipeId]: {
                  name: recipeResponse.data.name,
                  picture: recipeResponse.data.picture, // Görsel URL'si
                },
              }));
            })
            .catch((error) => {
              console.error(
                "There was an error fetching the recipe data!",
                error
              );
            });
        });
      })
      .catch((error) => {
        console.error("There was an error fetching the menu data!", error);
      });
  }, [menuId]);

  if (!menu) {
    return <div>Loading...</div>;
  }

  return (
    <section className="text-gray-600 body-font">
      <p className="text-center mt-20 text-3xl text-blue-950 font-serif">
        {menu.name}
      </p>
      <div className="container px-5 py-24 mx-auto">
        <p className="mb-20">{menu.content}</p>
        <div className="flex flex-wrap -m-4">
          {menu.recipe_ids.map((recipeId, index) => (
            <div key={recipeId} className="lg:w-1/4 sm:w-1/2 p-4">
              <Link to={`/list-recipe/${recipeId}`}>
                <div className="relative group">
                  <img
                    alt={recipes[recipeId]?.name || `Tarif-${index + 1}`}
                    className="w-full h-full object-cover object-center opacity-85 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                    src={
                      recipes[recipeId]?.picture ||
                      `https://via.placeholder.com/150`
                    }
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-2xl font-medium text-white bg-opacity-50 px-2 py-1">
                      {recipes[recipeId]?.name || "Loading..."}
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

export default ListMenu;
