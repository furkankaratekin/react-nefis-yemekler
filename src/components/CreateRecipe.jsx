import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateRecipe = () => {
  const [formData, setFormData] = useState({
    name: "",
    picture: "",
    category: "",
    youtube_link: "",
    ingredients: [""],
    recipe: "",
    calorie: "",
    content_photos: [""],
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prevData) => ({
        ...prevData,
        picture: reader.result,
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleContentPhotoChange = (index, e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const updatedContentPhotos = [...formData.content_photos];
      updatedContentPhotos[index] = reader.result;
      setFormData((prevData) => ({
        ...prevData,
        content_photos: updatedContentPhotos,
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
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

  const addContentPhoto = () => {
    setFormData((prevData) => ({
      ...prevData,
      content_photos: [...prevData.content_photos, ""],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.calorie) {
      console.log(formData);
      toast.success("Başarılı bir şekilde tarif eklendi!");
    } else {
      console.error("Please fix the errors before submitting");
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
            Tarifin Resimi
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
          {formData.picture && (
            <img
              src={formData.picture}
              alt="Selected"
              className="mt-1 w-full h-auto"
            />
          )}
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
            <option value="">Select a category</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
            <option value="category4">Category 4</option>
            <option value="category5">Category 5</option>
            <option value="category6">Category 6</option>
            <option value="category7">Category 7</option>
            <option value="category8">Category 8</option>
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
            Tarifin Fotoğrafları
          </label>
          {formData.content_photos.map((photo, index) => (
            <div key={index} className="mb-2">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleContentPhotoChange(index, e)}
                className="mt-1 p-2 w-full border border-gray-300 rounded"
              />
              {photo && (
                <img
                  src={photo}
                  alt={`Content ${index}`}
                  className="mt-1 w-full h-auto"
                />
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addContentPhoto}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Yeni Fotoğraf Ekle
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
