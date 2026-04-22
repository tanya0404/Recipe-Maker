import React, { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext'; 
import Reciprcard from '../components/Reciprcard';

const Recipies = () => {

  const {data}= useContext(recipecontext);

const renderrecipes = data.map((recipe) => (
        <Reciprcard key={recipe.id} recipe={recipe}/>
));

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <h1 className="text-2xl font-semibold text-white sm:text-3xl">All Recipes</h1>
        <p className="text-sm text-gray-300 sm:text-base">{data.length} recipe(s)</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {renderrecipes}
      </div>

      {data.length === 0 && (
        <div className="rounded-xl border border-white/20 bg-white/5 p-8 text-center text-gray-300">
          No recipes found. Create your first recipe to get started.
        </div>
      )}
    </div>
  )
}

export default Recipies
