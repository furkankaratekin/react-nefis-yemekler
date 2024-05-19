import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const SezarSalataPage = () => {
  return (
    <>
      <Header />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Sezar Salata Tarifi
            </h1>
            <p className="mb-8 leading-relaxed">
              Sezar salata, taze ve lezzetli malzemelerle hazırlanan, her öğüne
              yakışan bir salata tarifidir. Bu tarifle, hem sağlıklı hem de
              doyurucu bir salata hazırlayabilirsiniz.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Gerekli Malzemeler:</h2>
            <ul className="list-disc list-inside mb-8 text-left">
              <li>1 adet Romaine marulu</li>
              <li>1 su bardağı rendelenmiş Parmesan peyniri</li>
              <li>1 su bardağı kruton</li>
              <li>1 su bardağı Sezar sos</li>
              <li>1 adet tavuk göğsü (ızgara)</li>
              <li>Tuz</li>
              <li>Karabiber</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-4">Hazırlanışı:</h2>
            <ol className="list-decimal list-inside mb-8 text-left">
              <li>Marulu yıkayıp doğrayın ve geniş bir kaseye alın.</li>
              <li>
                Izgara tavuk göğsünü dilimleyin ve marulun üzerine ekleyin.
              </li>
              <li>Krutonları ve rendelenmiş Parmesan peynirini ekleyin.</li>
              <li>Sezar sosunu salatanın üzerine dökün ve iyice karıştırın.</li>
              <li>Tuz ve karabiber ile tatlandırın.</li>
              <li>Hemen servis edin.</li>
            </ol>
            <p className="mb-4">
              Youtube üzerinden tarifi izlemek için{" "}
              <a
                href="https://www.youtube.com/watch?v=9hpuqBawjlQ"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                tıklayın
              </a>
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded-2xl"
              alt="Sezar Salata"
              src="https://media.leverans.ru/product_images_inactive/krasnoiarsk/vkusnaia-ryba/c42f2717421f60863e1a923b54b361de.jpg"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SezarSalataPage;
