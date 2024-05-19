import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import pilav from '../../assets/mısırlıpilav.png';

const MısırlıPilavPage = () => {
  return (
    <>
      <Header />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Mısırlı Pilav Tarifi
            </h1>
            <p className="mb-8 leading-relaxed">
              Mısırlı pilav, hafif tatlı ve doyurucu bir pilav tarifidir. Bu
              tarifle, hem mısırın lezzetini hem de pilavın enfes aromasını
              sofralarınıza taşıyacaksınız.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Gerekli Malzemeler:</h2>
            <ul className="list-disc list-inside mb-8 text-left">
              <li>2 su bardağı pirinç</li>
              <li>1 su bardağı konserve mısır</li>
              <li>2 yemek kaşığı tereyağı</li>
              <li>2 yemek kaşığı sıvı yağ</li>
              <li>4 su bardağı sıcak su veya tavuk suyu</li>
              <li>1 adet orta boy kuru soğan</li>
              <li>Tuz</li>
              <li>Karabiber</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-4">Hazırlanışı:</h2>
            <ol className="list-decimal list-inside mb-8 text-left">
              <li>Pirinci yıkayıp süzün.</li>
              <li>
                Tereyağı ve sıvı yağı tencereye alın, yemeklik doğranmış soğanı
                ekleyip kavurun.
              </li>
              <li>Soğanlar pembeleşince pirinci ekleyip kavurun.</li>
              <li>Konserve mısırı ekleyip karıştırın.</li>
              <li>
                Üzerine sıcak su veya tavuk suyu ekleyin, tuz ve karabiber ilave
                edin.
              </li>
              <li>Pilav suyunu çekene kadar kısık ateşte pişirin.</li>
              <li>Demlenmeye bırakın ve sıcak servis edin.</li>
            </ol>
            <p className="mb-4">
              Youtube üzerinden tarifi izlemek için{" "}
              <a
                href="https://www.youtube.com/watch?v=EHRgO-SADtQ"
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
              alt="Mısırlı Pilav"
              src={pilav}
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MısırlıPilavPage;
