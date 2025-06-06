import React, { useEffect, useState } from 'react';
import Reciprcard from '../components/Reciprcard';
import { toast } from 'react-toastify';

const Fav = () => {
  const [favourite, setFavourite] = useState([]);

  useEffect(() => {
    try {
      const favFromStorage = JSON.parse(localStorage.getItem("fav")) || [];
      const recipesFromStorage = JSON.parse(localStorage.getItem("recipes")) || [];

     
      const validFavs = favFromStorage.filter((fav) =>
        recipesFromStorage.some((recipe) => recipe.id === fav.id)
      );

      setFavourite(validFavs);
      
      localStorage.setItem("fav", JSON.stringify(validFavs));
    } catch (e) {
      console.error("Failed to load favourites:", e);
      toast.error("Failed to load favorites!");
    }
  }, []);

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-3xl mb-6'>My Favorite Recipes</h1>
      <div className='flex flex-wrap justify-center'>
        {favourite.length > 0 ? (
          favourite.map((recipe) => (
            <Reciprcard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <div className='text-center text-gray-400'>
            <p className='text-xl'>No favorite recipes found!</p>
            <p className='mt-2'>Add some recipes to your favorites to see them here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Fav;
