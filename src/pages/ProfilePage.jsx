import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Profile from '../components/Profile'

const ProfilePage = () => {
  return (
    <>
      <Header></Header>
      <Profile></Profile>
      <div className='mt-20 lg:mt-80'>
        <Footer></Footer>
      </div>
    </>
  );
}

export default ProfilePage
