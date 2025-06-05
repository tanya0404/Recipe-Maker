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
        formState: { errors },
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
        } catch (e) {
            return [];
        }
    });

    const FavHandler = () => {
        const updatedFav = [...favourite, recipe];
        setfavourite(updatedFav);
        localStorage.setItem("fav", JSON.stringify(updatedFav));
    };

    const UnFavHandler = () => {
        const filterfav = favourite.filter((f) => f.id != recipe?.id);
        setfavourite(filterfav);
        localStorage.setItem("fav", JSON.stringify(filterfav));
    };

    return recipe ? (
        <div className="w-full flex p-2">
            <div className="relative left w-1/2 p-2">
                {favourite.find((f) => f.id == recipe?.id) ? (
                    <i
                        onClick={UnFavHandler}
                        className="right-[5%] absolute text-3xl text-red-400 ri-heart-fill"
                    ></i>
                ) : (
                    <i
                        onClick={FavHandler}
                        className="right-[5%] absolute text-3xl text-red-400 ri-heart-line"
                    ></i>
                )}

                <h1 className="text-5xl mb-3">{recipe?.title}</h1>
                <img
                    className="w-full h-[40vh] object-cover"
                    src={recipe?.image}
                    alt=""
                />
                <p>{recipe?.description}</p>

                <span className="text-white mr-5 inline-block mt-2 bg-red-400 rounded p-2">
                    {recipe?.chef}
                </span>
                <span className="text-white inline-block mt-2 bg-green-400 rounded p-2">
                    {recipe?.category}
                </span>
            </div>

            <form
                className="right w-1/2 p-2 text-xl"
                onSubmit={handleSubmit(UpdateHandler)}
            >
                <input
                    {...register("image")}
                    className="w-full block mb-3 outline-0 border-b p-2"
                    type="url"
                    placeholder="Recipe Image URL"
                />
                <input
                    {...register("title")}
                    className="w-full block mb-3 outline-0 border-b p-2"
                    type="text"
                    placeholder="Recipe Title"
                />
                <input
                    {...register("chef")}
                    className="w-full block mb-3 outline-0 border-b p-2"
                    type="text"
                    placeholder="Chef Name"
                />
                <textarea
                    {...register("description")}
                    className="w-full block mb-3 outline-0 border-b p-2"
                    placeholder="Recipe description here..."
                ></textarea>
                <textarea
                    {...register("ingredient")}
                    className="w-full block mb-3 outline-0 border-b p-2"
                    placeholder="Ingredients (separated by comma)..."
                ></textarea>
                <textarea
                    {...register("instructions")}
                    className="w-full block mb-3 outline-0 border-b p-2"
                    placeholder="Instructions (separated by comma)..."
                ></textarea>
                <select
                    {...register("category")}
                    className="w-full block mb-3 outline-0 border-b p-2"
                >
                    <option value="breakfast">North-Indian</option>
                    <option value="lunch">South-Indian</option>
                    <option value="supper">Chinese</option>
                </select>
                <button
                    type="submit"
                    className="mt-5 px-4 py-2 mr-10 bg-blue-400 rounded"
                >
                    Update Recipe
                </button>
                <button
                    onClick={deletehandler}
                    type="button"
                    className="mt-5 px-4 py-2 bg-red-400 rounded"
                >
                    Delete Recipe
                </button>
            </form>
        </div>
    ) : (
        "loading..."
    );
};

export default Recipe;
