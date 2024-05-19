import React from 'react'
import Header from '../components/Header'
import CreateRecipe from '../components/CreateRecipe'
import Footer from '../components/Footer'

const CreateRecipePage = () => {
  return (
    <>
      <Header></Header>
      <div className='py-12'>
        <CreateRecipe></CreateRecipe>
      </div>
      <Footer></Footer>
    </>
  );
}

export default CreateRecipePage
