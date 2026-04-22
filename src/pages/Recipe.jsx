import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Recipe = () => {
    const { id } = useParams();
    const { data, setdata } = useContext(recipecontext);
    const recipe = data.find((r) => r.id == id);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
    } = useForm();

    // Reset form values when recipe loads
    useEffect(() => {
        if (recipe) {
            reset({
                title: recipe.title,
                image: recipe.image,
                chef: recipe.chef,
                description: recipe.description,
                ingredient: recipe.ingredient,
                instructions: recipe.instructions,
                category: recipe.category,
            });
        }
    }, [recipe, reset]);

    const UpdateHandler = (updatedRecipe) => {
        const index = data.findIndex((r) => r.id == id);
        const copydata = [...data];
        copydata[index] = { ...copydata[index], ...updatedRecipe };
        setdata(copydata);
        localStorage.setItem("recipes", JSON.stringify(copydata));
        toast.success("Recipe updated!");
    };

    const deletehandler = () => {
        const filtererecipe = data.filter((r) => r.id != id);
        setdata(filtererecipe);
        localStorage.setItem("recipes", JSON.stringify(filtererecipe));
        toast.success("Recipe deleted!");
        navigate("/recipes");
    };

    // Fix: parse safely and ensure it's an array
    const [favourite, setfavourite] = useState(() => {
        try {
            const favFromStorage = JSON.parse(localStorage.getItem("fav"));
            return Array.isArray(favFromStorage) ? favFromStorage : [];
        } catch {
            return [];
        }
    });

    const FavHandler = () => {
        if (!recipe) return;
        
        // Check if recipe is already in favorites
        if (favourite.some(fav => fav.id === recipe.id)) {
            toast.info("Recipe is already in favorites!");
            return;
        }

        const updatedFav = [...favourite, recipe];
        setfavourite(updatedFav);
        localStorage.setItem("fav", JSON.stringify(updatedFav));
        toast.success("Recipe added to favorites!");
    };

    const UnFavHandler = () => {
        if (!recipe) return;
        
        const filterfav = favourite.filter((f) => f.id !== recipe.id);
        setfavourite(filterfav);
        localStorage.setItem("fav", JSON.stringify(filterfav));
        toast.success("Recipe removed from favorites!");
    };

    return recipe ? (
        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="relative rounded-2xl border border-white/20 bg-white/10 p-4 sm:p-5">
                {favourite.find((f) => f.id == recipe?.id) ? (
                    <i
                        onClick={UnFavHandler}
                        className="ri-heart-fill absolute right-4 top-4 cursor-pointer text-3xl text-red-400"
                    ></i>
                ) : (
                    <i
                        onClick={FavHandler}
                        className="ri-heart-line absolute right-4 top-4 cursor-pointer text-3xl text-red-400"
                    ></i>
                )}

                <h1 className="mb-3 pr-12 text-2xl font-semibold text-white sm:text-4xl">{recipe?.title}</h1>
                <img
                    className="h-56 w-full rounded-xl object-cover sm:h-72"
                    src={recipe?.image}
                    alt=""
                />
                <p className="mt-4 text-sm text-gray-200 sm:text-base">{recipe?.description}</p>

                <span className="mr-3 mt-4 inline-block rounded-full bg-red-400 px-3 py-1 text-sm text-white">
                    {recipe?.chef}
                </span>
                <span className="mt-4 inline-block rounded-full bg-green-500 px-3 py-1 text-sm text-white">
                    {recipe?.category}
                </span>
            </div>

            <form
                className="rounded-2xl border border-white/20 bg-white/10 p-4 text-base sm:p-5 sm:text-lg"
                onSubmit={handleSubmit(UpdateHandler)}
            >
                <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">Edit Recipe</h2>
                <input
                    {...register("image")}
                    className="mb-3 block w-full rounded-lg border border-white/20 bg-white/10 p-3 text-sm text-white outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-purple-400 sm:text-base"
                    type="url"
                    placeholder="Recipe Image URL"
                />
                <input
                    {...register("title")}
                    className="mb-3 block w-full rounded-lg border border-white/20 bg-white/10 p-3 text-sm text-white outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-purple-400 sm:text-base"
                    type="text"
                    placeholder="Recipe Title"
                />
                <input
                    {...register("chef")}
                    className="mb-3 block w-full rounded-lg border border-white/20 bg-white/10 p-3 text-sm text-white outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-purple-400 sm:text-base"
                    type="text"
                    placeholder="Chef Name"
                />
                <textarea
                    {...register("description")}
                    className="mb-3 block w-full rounded-lg border border-white/20 bg-white/10 p-3 text-sm text-white outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-purple-400 sm:text-base"
                    placeholder="Recipe description here..."
                ></textarea>
                <textarea
                    {...register("ingredient")}
                    className="mb-3 block w-full rounded-lg border border-white/20 bg-white/10 p-3 text-sm text-white outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-purple-400 sm:text-base"
                    placeholder="Ingredients (separated by comma)..."
                ></textarea>
                <textarea
                    {...register("instructions")}
                    className="mb-3 block w-full rounded-lg border border-white/20 bg-white/10 p-3 text-sm text-white outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-purple-400 sm:text-base"
                    placeholder="Instructions (separated by comma)..."
                ></textarea>
                <select
                    {...register("category")}
                    className="mb-3 block w-full rounded-lg border border-white/20 bg-white/10 p-3 text-sm text-white outline-none focus:ring-2 focus:ring-purple-400 sm:text-base"
                >
                    <option value="">Select category...</option>
          <option value="North-Indian">North Indian</option>
          <option value="South-Indian">South Indian</option>
          <option value="Chinese">Chinese</option>
          <option value="Italian">Italian</option>
          <option value="Dessert">Dessert</option>

                </select>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <button
                        type="submit"
                        className="rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
                    >
                        Update Recipe
                    </button>
                    <button
                        onClick={deletehandler}
                        type="button"
                        className="rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
                    >
                        Delete Recipe
                    </button>
                </div>
            </form>
        </div>
    ) : (
        "loading..."
    );
};

export default Recipe;
