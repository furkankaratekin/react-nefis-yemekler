import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SignUp from '../components/SignUp'
const SignUpPage = () => {
  return (
    <>
      <Header></Header>
      <div className='mt-20'>
        <SignUp></SignUp>
      </div>
      <div className='mt-28'>
        <Footer></Footer>
      </div>
    </>
  );
}

export default SignUpPage
