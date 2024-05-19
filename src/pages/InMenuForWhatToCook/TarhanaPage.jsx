import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const TarhanaPage = () => {
  return (
    <>
      <Header />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Tarhana Çorbası Tarifi
            </h1>
            <p className="mb-8 leading-relaxed">
              Tarhana çorbası, Anadolu'nun geleneksel lezzetlerinden biridir.
              Besleyici ve lezzetli bu çorba, özellikle kış aylarında tercih
              edilir.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Gerekli Malzemeler:</h2>
            <ul className="list-disc list-inside mb-8 text-left">
              <li>4 yemek kaşığı toz tarhana</li>
              <li>1 yemek kaşığı domates salçası</li>
              <li>1 yemek kaşığı tereyağı</li>
              <li>1 yemek kaşığı sıvı yağ</li>
              <li>6 su bardağı su veya et suyu</li>
              <li>2 diş sarımsak (ezilmiş)</li>
              <li>Tuz</li>
              <li>Karabiber</li>
              <li>Pul biber (isteğe bağlı)</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-4">Hazırlanışı:</h2>
            <ol className="list-decimal list-inside mb-8 text-left">
              <li>
                Tarhanayı bir kaseye alın ve üzerine 1 su bardağı su ekleyip
                karıştırarak eritin.
              </li>
              <li>
                Tereyağını ve sıvı yağı tencereye alın, salçayı ekleyip kavurun.
              </li>
              <li>
                Ezilmiş sarımsakları ekleyin ve kokusu çıkana kadar kavurun.
              </li>
              <li>
                Eritilmiş tarhanayı tencereye ekleyin ve karıştırarak pişirin.
              </li>
              <li>
                Kalan suyu veya et suyunu ekleyin, tuz ve karabiber ilave edin.
              </li>
              <li>
                Çorba kaynamaya başlayınca altını kısın ve yaklaşık 15-20 dakika
                kadar pişirin.
              </li>
              <li>Servis yaparken üzerine pul biber serpebilirsiniz.</li>
            </ol>
            <p className="mb-4">
              Youtube üzerinden tarifi izlemek için{" "}
              <a
                href="https://www.youtube.com/watch?v=nncdWyHP2F4"
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
              alt="Tarhana Çorbası"
              src="https://storage.myseldon.com/news-pict-06/0623138B930D78A515A5624AB59C3392"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TarhanaPage;
