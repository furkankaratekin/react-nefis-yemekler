import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MapContact from '../components/MapContact'

const ContactPage = () => {
  return (
    <>
      <Header></Header>
      <MapContact></MapContact>
      <div className='mt-12'>
        <Footer></Footer>
      </div>
    </>
  );
}

export default ContactPage
