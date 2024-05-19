import React from "react";

const Profile = () => {
  const recipes = [
    { id: 1, name: "Tarif 1", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Tarif 2", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Tarif 3", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="flex flex-col lg:flex-row mt-16">
      {/* Sol Taraf: Profil Özellikleri */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-4">
        <div className="w-full lg:w-3/4">
          <h2 className="text-2xl font-bold mb-4">Profil</h2>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">İsim: John Doe</h3>
            <h3 className="text-lg font-semibold">
              E-posta: johndoe@example.com
            </h3>
            <h3 className="text-lg font-semibold">Yaş: 30</h3>
          </div>
          <button className="px-8 bg-red-500 text-white py-2 rounded mb-2">
            Profili Sil
          </button>

        </div>
      </div>

      {/* Sağ Taraf: Deftere Eklenen Tarifler */}
      <div className="w-full mt-8 lg:w-1/2 flex flex-col items-center justify-center p-4">
        <div className="w-full lg:w-3/4">
          <h2 className="text-2xl font-bold mb-4">Deftere Eklenen Tarifler</h2>
          <ul className="space-y-4">
            {recipes.map((recipe) => (
              <li key={recipe.id} className="flex items-center space-x-4">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-16 h-16 rounded-full"
                />
                <span className="text-lg">{recipe.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
