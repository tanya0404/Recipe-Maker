import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';
import { recipecontext } from '../context/RecipeContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    const copydata = [...data, recipe];
    setdata(copydata);
    localStorage.setItem('recipes', JSON.stringify(copydata));
    toast.success('New recipe created!');
    reset();
    navigate('/recipes');
  };

  return (
    <div className="min-h-screen bg-[#fdfdfd] flex justify-center items-center px-4 py-8">
      <form
        onSubmit={handleSubmit(SubmitHandler)}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl border border-gray-200"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Create a New Recipe</h2>

        <input
          {...register('image', { required: true })}
          type="url"
          placeholder="Enter recipe image URL..."
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800 placeholder-gray-500"
        />
        {errors.image && <p className="text-sm text-red-500 mb-2">Image URL is required.</p>}

        <input
          {...register('title', { required: true })}
          type="text"
          placeholder="Recipe title..."
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800 placeholder-gray-500"
        />
        {errors.title && <p className="text-sm text-red-500 mb-2">Title is required.</p>}

        <input
          {...register('chef')}
          type="text"
          placeholder="Chef's name (optional)"
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800  placeholder-gray-500"
        />

        <textarea
          {...register('description')}
          rows={3}
          placeholder="Write a short description of the recipe..."
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800  placeholder-gray-500"
        />

        <textarea
          {...register('ingredient')}
          rows={3}
          placeholder="List ingredients, separated by commas..."
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800  placeholder-gray-500"
        />

        <textarea
          {...register('instructions')}
          rows={3}
          placeholder="Write cooking instructions, separated by commas..."
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800  placeholder-gray-500"
        />

        <select
          {...register('category')}
          className="w-full mb-6 p-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value="">Select category...</option>
          <option value="North-Indian">North Indian</option>
          <option value="South-Indian">South Indian</option>
          <option value="Chinese">Chinese</option>
          <option value="Italian">Italian</option>
          <option value="Dessert">Dessert</option>
        </select>

        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 transition duration-200 font-medium"
        >
          Save Recipe
        </button>
      </form>
    </div>
  );
};

export default Create;
