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
    <div className="space-y-5">
      <h1 className="text-center text-2xl font-semibold text-white sm:text-left sm:text-3xl">My Favorite Recipes</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {favourite.length > 0 ? (
          favourite.map((recipe) => (
            <Reciprcard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <div className="col-span-full rounded-xl border border-white/20 bg-white/5 p-8 text-center text-gray-300">
            <p className="text-xl">No favorite recipes found!</p>
            <p className="mt-2">Add some recipes to your favorites to see them here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Fav;
