import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleDelete = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(
        `https://yemek-api-vercel.onrender.com/api/user/delete/${userData._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      localStorage.removeItem("userData");
      localStorage.removeItem("token");
      navigate("/login");
    } catch (error) {
      console.error("Error deleting profile:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (!userData || !userData.username) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row mt-16">
      {/* Sol Taraf: Profil Özellikleri */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-4">
        <div className="w-full lg:w-3/4">
          <h2 className="text-2xl font-bold mb-4">Profil</h2>
          <div className="mb-6">
            <img
              src={userData.profilePicture}
              alt={userData.username}
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold">İsim: {userData.username}</h3>
            <h3 className="text-lg font-semibold">E-posta: {userData.email}</h3>
            <h3 className="text-lg font-semibold">
              Oluşturulma Tarihi:{" "}
              {new Date(userData.createdAt).toLocaleDateString()}
            </h3>
          </div>

          <div className="flex flex-col space-y-2 md:w-1/3 lg:w-1/3">
            <button
              className="px-8 bg-yellow-400 hover:bg-yellow-600 text-white py-2 rounded"
              onClick={() => setShowLogoutModal(true)}
            >
              Profilden Çıkış Yap
            </button>
            <button className="px-8 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
              Profili Güncelle
            </button>
            <button
              className="px-8 bg-red-600 hover:bg-red-700 text-white py-2 rounded"
              onClick={() => setShowDeleteModal(true)}
            >
              Profili Sil
            </button>
            <Link
              to="/create-recipe"
              className="px-8 bg-green-600 hover:bg-green-700 text-white py-2 rounded inline-block text-center"
            >
              Yeni Tarif Oluştur
            </Link>
          </div>
        </div>
      </div>

      {/* Sağ Taraf: Deftere Eklenen Tarifler */}
      <div className="w-full mt-8 lg:w-1/2 flex flex-col items-center justify-center p-4">
        <div className="w-full lg:w-3/4">
          <h2 className="text-2xl font-bold mb-4">Deftere Eklenen Tarifler</h2>
          <ul className="space-y-4">
            {userData.favorites_recipes &&
            userData.favorites_recipes.length > 0 ? (
              userData.favorites_recipes.map((recipe) => (
                <li key={recipe.id} className="flex items-center space-x-4">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <span className="text-lg">{recipe.name}</span>
                </li>
              ))
            ) : (
              <p>No favorite recipes found.</p>
            )}
          </ul>
        </div>
      </div>

      {/* Silme Onay Modali */}
      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl mb-4">
              Profili silmek istediğinize emin misiniz?
            </h2>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-red-600 text-white rounded mr-2"
                onClick={handleDelete}
              >
                Evet
              </button>
              <button
                className="px-4 py-2 bg-gray-600 text-white rounded"
                onClick={() => setShowDeleteModal(false)}
              >
                Hayır
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Çıkış Onay Modali */}
      {showLogoutModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl mb-4">
              Profilden çıkış yapmak istediğinize emin misiniz?
            </h2>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-red-600 text-white rounded mr-2"
                onClick={handleLogout}
              >
                Evet
              </button>
              <button
                className="px-4 py-2 bg-gray-600 text-white rounded"
                onClick={() => setShowLogoutModal(false)}
              >
                Hayır
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
