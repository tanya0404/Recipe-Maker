import { useContext } from "react";
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
    } = useForm({
        defaultValues: {
            title: recipe?.title,
            image: recipe?.image,
            chef: recipe?.chef,
            description: recipe?.description,
            ingredient: recipe?.ingredient,
            instructions: recipe?.instructions,
            category: recipe?.category,
        },
    });

    const UpdateHandler = (recipe) => {
        const index = data.findIndex((r) => r.id == id);
        const copydata = [...data];
        copydata[index] = { ...copydata[index], ...recipe };
        setdata(copydata);
        toast.success("recipe updated!");
    };

    const deletehandler = () => {
        const filtererecipe = data.filter((r) => r.id != id);
        setdata(filtererecipe);
        toast.success("recipe deleted!");
        navigate("/recipes");
    };

    useEffect(()=>{
        
        getproduct();

        },[]);

    return recipe ? (
        <div className="w-full flex p-2">
            <div className="left w-1/2 p-2">
                <h1 className="text-5xl mb-3 ">{recipe?.title}</h1>
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

                {/* <h1 className="mt-3 text-xl font-medium">Ingredient</h1>
                <p>{recipe?.ingr}</p>
                <h1 className="mt-3 text-xl font-medium">Instructions</h1>
                <p>{recipe?.inst}</p> */}
            </div>

            <form
                className="right w-1/2 p-2 text-xl "
                onSubmit={handleSubmit(UpdateHandler)}
            >
                <input
                    {...register("image")}
                    className="w-full block mb-3 outline-0 border-b p-2 "
                    type="url"
                    placeholder="Recipe Image URL"
                />
                <input
                    {...register("title")}
                    className="w-full block mb-3 outline-0 border-b p-2 "
                    type="text"
                    placeholder="Recipe Title"
                />
                <input
                    {...register("chef")}
                    className="w-full block mb-3 outline-0 border-b p-2 "
                    type="text"
                    placeholder="Chef Name"
                />
                <textarea
                    {...register("description")}
                    className="w-full block mb-3 outline-0 border-b p-2 "
                    placeholder="recipe descriotion here..."
                ></textarea>
                <textarea
                    {...register("ingredient")}
                    className="w-full block mb-3 outline-0 border-b p-2 "
                    placeholder="recipe ingredients here (seperated by comma)..."
                ></textarea>
                <textarea
                    {...register("instructiond")}
                    className="w-full block mb-3 outline-0 border-b p-2 "
                    placeholder="recipe instructions here (seperated by comma)..."
                ></textarea>
                <select
                    {...register("category")}
                    className="w-full block mb-3 outline-0 border-b p-2 "
                >
                    <option value="breakfast">North-indeant</option>
                    <option value="lunch">South-indian</option>
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