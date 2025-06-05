import { Link } from "react-router-dom";

const Reciprcard = (props) => {
    const { id, image, chef, title, description, category } = props.recipe;
    return props.recipe ? (
        <Link
            to={`/recipes/detail/${id}`}
            className="group bg-white bg-opacity-10 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 w-[23vw] mr-5 mb-5"
        >
            <div className="relative">
                <img 
                    className="w-full h-[30vh] object-cover group-hover:brightness-90 transition-all duration-300" 
                    src={image} 
                    alt={title} 
                />
                <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
                    {category}
                </div>
            </div>
            <div className="p-6">
                <h1 className="text-2xl font-semibold mb-2 group-hover:text-purple-400 transition-colors duration-300 text-purple-500">
                    {title}
                </h1>
                <p className="text-purple-400 mb-3">
                    <i className="ri-user-line mr-2"></i>
                    {chef}
                </p>
                <p className="text-gray-700 line-clamp-2">
                    {description}
                </p>
                <div className="mt-4 text-purple-400 group-hover:translate-x-2 transition-transform duration-300">
                    Read more <i className="ri-arrow-right-line ml-1"></i>
                </div>
            </div>
        </Link>
    ) : (
        "loading..."
    );
};

export default Reciprcard;
