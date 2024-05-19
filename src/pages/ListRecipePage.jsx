import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ListRecipe from '../components/ListRecipe'
import RecipeComment from '../components/RecipeComment'

const ListRecipePage = () => {
  return (
    <>
      <Header></Header>
      <ListRecipe></ListRecipe>
      <RecipeComment></RecipeComment>
      <div className='mt-20'>
        <Footer></Footer>
      </div>
    </>
  );
}

export default ListRecipePage
