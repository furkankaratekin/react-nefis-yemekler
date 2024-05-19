import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import sarma from '../../assets/sarma.jpg';
const YaprakSarmaPage = () => {
  return (
    <>
      <Header />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Zeytinyağlı Yaprak Sarma Tarifi
            </h1>
            <p className="mb-8 leading-relaxed">
              Zeytinyağlı yaprak sarma, incecik yaprakların içine doldurulan
              nefis harcı ve hafifliği ile sofraların vazgeçilmez lezzetlerinden
              biridir.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Gerekli Malzemeler:</h2>
            <ul className="list-disc list-inside mb-8 text-left">
              <li>500 gram asma yaprağı (taze veya salamura)</li>
              <li>2 su bardağı pirinç</li>
              <li>2 adet orta boy soğan (ince doğranmış)</li>
              <li>1 su bardağı zeytinyağı</li>
              <li>1 yemek kaşığı dolmalık fıstık</li>
              <li>1 yemek kaşığı kuş üzümü</li>
              <li>1 tatlı kaşığı toz şeker</li>
              <li>1 tatlı kaşığı kuru nane</li>
              <li>Tuz</li>
              <li>Karabiber</li>
              <li>2 su bardağı sıcak su</li>
              <li>1 limonun suyu</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-4">Hazırlanışı:</h2>
            <ol className="list-decimal list-inside mb-8 text-left">
              <li>Asma yapraklarını kaynar suda 2-3 dakika haşlayıp süzün.</li>
              <li>
                Zeytinyağını tencereye alın, soğanları ekleyip pembeleşinceye
                kadar kavurun.
              </li>
              <li>Pirinci ekleyip 2-3 dakika kavurun.</li>
              <li>
                Dolmalık fıstık, kuş üzümü, toz şeker, kuru nane, tuz ve
                karabiber ekleyip karıştırın.
              </li>
              <li>
                2 su bardağı sıcak suyu ekleyin ve kısık ateşte pirinçler suyunu
                çekene kadar pişirin.
              </li>
              <li>
                Hazırladığınız harcı asma yapraklarının içine koyup sarın.
              </li>
              <li>
                Sardığınız yaprakları tencereye dizin, üzerine limon suyu
                gezdirin ve üzerine zeytinyağı dökün.
              </li>
              <li>
                Üzerini geçecek kadar su ekleyip, kısık ateşte yaklaşık 30-40
                dakika pişirin.
              </li>
              <li>Sarmalar soğuduktan sonra servis yapın.</li>
            </ol>
            <p className="mb-4">
              Youtube üzerinden tarifi izlemek için{" "}
              <a
                href="https://www.youtube.com/watch?v=w9Z6fUBYWJM"
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
              alt="Zeytinyağlı Yaprak Sarma"
              src={sarma}
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default YaprakSarmaPage;
