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
    <div className="flex justify-center px-2 py-2 sm:px-4">
      <form
        onSubmit={handleSubmit(SubmitHandler)}
        className="w-full max-w-2xl rounded-2xl border border-white/20 bg-white/10 p-5 shadow-lg backdrop-blur-md sm:p-8"
      >
        <h2 className="mb-6 text-center text-2xl font-semibold text-white sm:text-3xl">Create a New Recipe</h2>

        <input
          {...register('image', { required: true })}
          type="url"
          placeholder="Enter recipe image URL..."
          className="mb-4 w-full rounded-lg border border-white/20 bg-white/10 p-3 text-sm text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 sm:text-base"
        />
        {errors.image && <p className="mb-2 text-sm text-red-300">Image URL is required.</p>}

        <input
          {...register('title', { required: true })}
          type="text"
          placeholder="Recipe title..."
          className="mb-4 w-full rounded-lg border border-white/20 bg-white/10 p-3 text-sm text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 sm:text-base"
        />
        {errors.title && <p className="mb-2 text-sm text-red-300">Title is required.</p>}

        <input
          {...register('chef')}
          type="text"
          placeholder="Chef's name (optional)"
          className="mb-4 w-full rounded-lg border border-white/20 bg-white/10 p-3 text-sm text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 sm:text-base"
        />

        <textarea
          {...register('description')}
          rows={3}
          placeholder="Write a short description of the recipe..."
          className="mb-4 w-full rounded-lg border border-white/20 bg-white/10 p-3 text-sm text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 sm:text-base"
        />

        <textarea
          {...register('ingredient')}
          rows={3}
          placeholder="List ingredients, separated by commas..."
          className="mb-4 w-full rounded-lg border border-white/20 bg-white/10 p-3 text-sm text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 sm:text-base"
        />

        <textarea
          {...register('instructions')}
          rows={3}
          placeholder="Write cooking instructions, separated by commas..."
          className="mb-4 w-full rounded-lg border border-white/20 bg-white/10 p-3 text-sm text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 sm:text-base"
        />

        <select
          {...register('category')}
          className="mb-6 w-full rounded-lg border border-white/20 bg-white/10 p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 sm:text-base"
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
          className="w-full rounded-lg bg-indigo-500 py-3 font-medium text-white transition duration-200 hover:bg-indigo-600"
        >
          Save Recipe
        </button>
      </form>
    </div>
  );
};

export default Create;
