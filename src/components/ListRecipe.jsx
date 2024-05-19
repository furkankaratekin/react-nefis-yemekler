import { useState } from "react";
import React from 'react'

const ListRecipe = () => {
    const [isAdded, setIsAdded] = useState(false);

    const handleClick = () => {
      setIsAdded(!isAdded);
    };
   return (
     <>
       <section className="text-gray-600 body-font">
         <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
           {/* Tarifleri yazan yer */}
           <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
             <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
               Tarif Başlığı
             </h1>
             <p className="mb-8 leading-relaxed">
               Tarif açıklaması burada yer alacak. Bu alana API'den gelecek
               tarif açıklaması yerleştirilecek.
             </p>
             <h2 className="text-2xl font-semibold mb-4">
               Gerekli Malzemeler:
             </h2>
             <ul className="list-disc list-inside mb-8 text-left">
               <li>Malzeme 1</li>
               <li>Malzeme 2</li>
               <li>Malzeme 3</li>
               <li>Malzeme 4</li>
               <li>Malzeme 5</li>
               <li>Malzeme 6</li>
               <li>Malzeme 7</li>
             </ul>
             <h2 className="text-2xl font-semibold mb-4">Hazırlanışı:</h2>
             <ol className="list-decimal list-inside mb-8 text-left">
               <li>Adım 1</li>
               <li>Adım 2</li>
               <li>Adım 3</li>
               <li>Adım 4</li>
               <li>Adım 5</li>
               <li>Adım 6</li>
               <li>Adım 7</li>
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
               src="https://dummyimage.com/720x600"
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
}

export default ListRecipe
