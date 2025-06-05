import { Link } from "react-router-dom";

const Reciprcard = (props) => {
    const { id, image, chef, title, description } = props.recipe;
    return props.recipe ? (
        <Link
            to={`/recipes/detail/${id}`}
            className="transition transform hover:scale-105 duration-300 w-[23vw] mr-5 mb-5 shadow overflow-hidden rounded"
        >
            <img className="w-full h-[30vh] object-cover" src={image} alt="" />
            <h1 className="pl-3 text-3xl mt-3">{title}</h1>
            <p className="pl-3 text-red-400">{chef}</p>
            <p className="pl-3 pb-4 mt-3">
                {description.slice(0, 100)}...{" "}
                <span className="text-blue-400">more</span>
            </p>
        </Link>
    ) : (
        "loading..."
    );
};

export default Reciprcard;
