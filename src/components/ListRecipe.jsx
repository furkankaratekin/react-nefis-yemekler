import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ListRecipe = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isAdded, setIsAdded] = useState(false);

  const userData = JSON.parse(localStorage.getItem("userData"));
  const token = localStorage.getItem("token");

  const handleAddToFavorites = async () => {
    try {
      await axios.post(
        `https://nefisyemekler-clone-project.onrender.com/api/recipe/favorites/${userData._id}/add`,
        { recipeId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Başarı ile deftere eklendi");
      setIsAdded(true);
    } catch (error) {
      console.error("Error adding to favorites:", error);
      toast.error("Deftere ekleme işlemi başarısız oldu");
    }
  };

const handleRemoveFromFavorites = async () => {
  try {
    await axios.delete(
      `https://nefisyemekler-clone-project.onrender.com/api/recipe/favorites/${userData._id}/remove`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: { recipeId }, // Burada `data` anahtarını kullanıyoruz
      }
    );
    toast.success("Başarı ile defterden kaldırıldı");
    setIsAdded(false);
  } catch (error) {
    console.error("Error removing from favorites:", error);
    toast.error("Defterden kaldırma işlemi başarısız oldu");
  }
};


  const handleClick = () => {
    if (isAdded) {
      handleRemoveFromFavorites();
    } else {
      handleAddToFavorites();
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://nefisyemekler-clone-project.onrender.com/api/recipe/${recipeId}`
      )
      .then((response) => {
        setRecipe(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the recipe data!", error);
      });
  }, [recipeId]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          {/* Tarifleri yazan yer */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {recipe.name}
            </h1>
            <p className="mb-8 leading-relaxed">{recipe.recipe}</p>
            <h2 className="text-2xl font-semibold mb-4">Gerekli Malzemeler:</h2>
            <ul className="list-disc list-inside mb-8 text-left">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h2 className="text-2xl font-semibold mb-4">Hazırlanışı:</h2>
            <ol className="list-decimal list-inside mb-8 text-left">
              {recipe.recipe.split(". ").map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
            <p className="mb-4">
              Youtube üzerinden tarifi izlemek için{" "}
              <a
                href="#"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                tıklayın
              </a>
            </p>
          </div>

          {/* Görselin olduğu yer */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded-2xl"
              alt="Tarif Görseli"
              src={recipe.picture || "https://dummyimage.com/720x600"}
            />
            <button
              onClick={handleClick}
              className={`mt-5 px-10 py-2 rounded ${
                isAdded ? "bg-blue-500" : "bg-green-500"
              } text-white`}
            >
              {isAdded ? "Defterden Kaldır" : "Deftere Ekle"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListRecipe;
