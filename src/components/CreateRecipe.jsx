import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const CreateRecipe = () => {
  const [formData, setFormData] = useState({
    name: "",
    pictureUrl: "",
    category: "",
    youtube_link: "",
    ingredients: [""],
    recipe: "",
    calorie: "",
    contentPhotoUrls: [""],
  });

  const [errors, setErrors] = useState({
    calorie: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "calorie") {
      if (!/^\d*$/.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          calorie: "Kalori değerini sayısal bir değer giriniz.",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          calorie: "",
        }));
      }
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleIngredientChange = (index, value) => {
    const updatedIngredients = [...formData.ingredients];
    updatedIngredients[index] = value;
    setFormData((prevData) => ({
      ...prevData,
      ingredients: updatedIngredients,
    }));
  };

  const addIngredient = () => {
    setFormData((prevData) => ({
      ...prevData,
      ingredients: [...prevData.ingredients, ""],
    }));
  };

  const handleContentPhotoUrlChange = (index, value) => {
    const updatedContentPhotoUrls = [...formData.contentPhotoUrls];
    updatedContentPhotoUrls[index] = value;
    setFormData((prevData) => ({
      ...prevData,
      contentPhotoUrls: updatedContentPhotoUrls,
    }));
  };

  const addContentPhotoUrl = () => {
    setFormData((prevData) => ({
      ...prevData,
      contentPhotoUrls: [...prevData.contentPhotoUrls, ""],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.calorie) {
      const token = localStorage.getItem("token");
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const dataToSend = {
        ...formData,
        content_photos: formData.contentPhotoUrls,
      };

      axios
        .post(
          "https://yemek-api-vercel.onrender.com/api/recipe/add",
          dataToSend,
          {
            headers,
          }
        )
        .then((response) => {
          console.log(response.data);
          toast.success("Başarılı bir şekilde tarif eklendi!");
        })
        .catch((error) => {
          console.error("There was an error submitting the recipe:", error);
          toast.error("Tarif eklenirken bir hata oluştu.");
        });
    } else {
      console.error("Please fix the errors before submitting");
      toast.error("Lütfen hataları düzeltin ve tekrar deneyin.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-4">Tarif Oluştur</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Tarifin Adı
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Tarifin Resim URL'si
          </label>
          <input
            type="text"
            name="pictureUrl"
            value={formData.pictureUrl}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Kategori
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          >
            <option value="">Kategori Seçiniz</option>
            <option value="category1">Kategori 1</option>
            <option value="category2">Kategori 2</option>
            <option value="category3">Kategori 3</option>
            <option value="category4">Kategori 4</option>
            <option value="category5">Kategori 5</option>
            <option value="category6">Kategori 6</option>
            <option value="category7">Kategori 7</option>
            <option value="category8">Kategori 8</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            YouTube Link
          </label>
          <input
            type="text"
            name="youtube_link"
            value={formData.youtube_link}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Malzemeler
          </label>
          {formData.ingredients.map((ingredient, index) => (
            <input
              key={index}
              type="text"
              value={ingredient}
              onChange={(e) => handleIngredientChange(index, e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded mb-2"
            />
          ))}
          <button
            type="button"
            onClick={addIngredient}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Malzeme Ekle
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Tarif Nasıl Yapılır (Lütfen nokta kullanarak yazın)
          </label>
          <textarea
            name="recipe"
            value={formData.recipe}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Kalori
          </label>
          <input
            type="text"
            name="calorie"
            value={formData.calorie}
            onChange={handleChange}
            className={`mt-1 p-2 w-full border rounded ${
              errors.calorie ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.calorie && (
            <p className="text-sm text-red-600 mt-1">{errors.calorie}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Tarifin Fotoğraf URL'leri
          </label>
          {formData.contentPhotoUrls.map((photoUrl, index) => (
            <input
              key={index}
              type="text"
              value={photoUrl}
              onChange={(e) =>
                handleContentPhotoUrlChange(index, e.target.value)
              }
              className="mt-1 p-2 w-full border border-gray-300 rounded mb-2"
            />
          ))}
          <button
            type="button"
            onClick={addContentPhotoUrl}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Yeni Fotoğraf URL'si Ekle
          </button>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-600 text-white rounded"
        >
          Yeni Tarifi Oluştur
        </button>
      </form>
    </div>
  );
};

export default CreateRecipe;
