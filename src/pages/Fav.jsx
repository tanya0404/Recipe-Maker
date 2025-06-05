import React, { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext';
import Reciprcard from "../components/Reciprcard"

const Fav = () => {
  const favourite  = JSON.parse(localStorage.getItem("fav") || []);

  const renderrecipes = favourite.map((recipe) => (
        <Reciprcard key={recipe.id} recipe={recipe}/>
));

  return (
    <div className='flex flex-wrap'>
      {data.length> 0 ? renderrecipes : "No favourite recipes found!"}
    </div>
  )
}


export default Fav
