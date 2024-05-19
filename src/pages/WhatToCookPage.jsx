import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatToCook from '../components/WhatToCook'

const WhatToCookPage = () => {
  return (
    <>
      <Header></Header>
      <h2 className="text-center mt-16 text-2xl font-serif">
        Bugün Ne Pişirsem ?{" "}
      </h2>
      <WhatToCook></WhatToCook>
      <div className='mt-52'>
        <Footer></Footer>
      </div>
    </>
  );
}

export default WhatToCookPage
