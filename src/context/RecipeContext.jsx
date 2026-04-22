
import { createContext, useEffect, useState } from 'react';

export const recipecontext = createContext(null);

const defaultRecipes = [
  {
    id: 'demo-1',
    title: 'Paneer Butter Masala',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1200&auto=format&fit=crop',
    chef: 'Demo Chef',
    description: 'A creamy North Indian curry with paneer cubes in a rich tomato gravy.',
    ingredient: 'Paneer, tomato puree, cream, butter, ginger-garlic paste, spices',
    instructions: 'Saute aromatics, add tomato and spices, simmer, add paneer and cream',
    category: 'North-Indian',
  },
  {
    id: 'demo-2',
    title: 'Veg Hakka Noodles',
    image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?q=80&w=1200&auto=format&fit=crop',
    chef: 'Test User',
    description: 'Quick Indo-Chinese noodles tossed with crunchy vegetables and sauces.',
    ingredient: 'Noodles, cabbage, carrots, capsicum, soy sauce, vinegar, garlic',
    instructions: 'Boil noodles, stir-fry veggies, add sauces, toss noodles on high heat',
    category: 'Chinese',
  },
  {
    id: 'demo-3',
    title: 'Classic Tiramisu',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1200&auto=format&fit=crop',
    chef: 'Master Cook',
    description: 'Layered Italian dessert with coffee-soaked biscuits and mascarpone cream.',
    ingredient: 'Ladyfingers, coffee, mascarpone, cream, sugar, cocoa powder',
    instructions: 'Dip biscuits in coffee, layer with cream mix, chill and dust cocoa',
    category: 'Dessert',
  },
];

const RecipeContext = (props) => {
  const [data,setdata]=useState([]);

   useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem('recipes'));
    const initialRecipes =
      Array.isArray(savedRecipes) && savedRecipes.length > 0 ? savedRecipes : defaultRecipes;

    setdata(initialRecipes);
    localStorage.setItem('recipes', JSON.stringify(initialRecipes));
  }, []);
  return (
    
      <recipecontext.Provider value={{data,setdata}}>
         {props.children}
        </recipecontext.Provider>
    
  );
};

export default RecipeContext;
