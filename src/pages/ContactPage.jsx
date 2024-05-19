import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MapContact from '../components/MapContact'

const ContactPage = () => {
  return (
    <>
      <Header></Header>
      <p className="text-center mt-20 font-serif text-3xl">
        Bizimle İletişime Geçin !{" "}
      </p>
      <MapContact></MapContact>
      <div className='mt-4'>
        <Footer></Footer>
      </div>
    </>
  );
}

export default ContactPage
