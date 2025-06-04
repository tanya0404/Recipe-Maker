
import { createContext, useEffect, useState } from 'react';

export const recipecontext = createContext(null);

const RecipeContext = (props) => {
  const [data,setdata]=useState([]);

   useEffect(() => {
    setdata(JSON.parse(localStorage.getItem("recipes")) || []);
  }, []);
  return (
    
      <recipecontext.Provider value={{data,setdata}}>
         {props.children}
        </recipecontext.Provider>
    
  );
};

export default RecipeContext;



// {
//       id:1,

//       image:"https://cdn.dummyjson.com/recipe-images/1.webp",

//       title:"Classic Margherita Pizza",
      
//       description:"Margherita Pizza is a classic Italian pizza that highlights the beauty of simple, fresh ingredients. With a thin, crisp crust as the base, it's topped with a rich tomato sauce, slices of fresh mozzarella cheese, and fragrant basil leaves. Baked to perfection, this pizza is a tribute to the colors of the Italian flag—red (tomato), white (mozzarella), and green (basil). Perfectly balanced in flavor, it’s both light and satisfying, making it a timeless favorite for pizza lovers around the world.",

//       chef:"abc",

//       ingredients:["Pizza dough","Tomato sauce","Fresh mozzarella cheese","Fresh basil leaves","Olive oil","Salt and pepper to taste"],
      
//       instructions:["Preheat the oven to 475°F (245°C).","Roll out the pizza dough and spread tomato sauce evenly.","Top with slices of fresh mozzarella and fresh basil leaves.","Drizzle with olive oil and season with salt and pepper.","Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.","Slice and serve hot."],

//       category:"Chinese"
//     },