import React, { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext'; 
import Reciprcard from '../components/Reciprcard';

const Recipies = () => {

  const {data}= useContext(recipecontext);

const renderrecipes = data.map((recipe) => (
        <Reciprcard key={recipe.id} recipe={recipe}/>
));

  return (
    <div className='flex flex-wrap'>
      {renderrecipes}
    </div>
  )
}

export default Recipies
