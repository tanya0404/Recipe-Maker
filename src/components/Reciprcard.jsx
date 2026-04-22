import { Link } from "react-router-dom";

const Reciprcard = (props) => {
    const { id, image, chef, title, description, category } = props.recipe;
    return props.recipe ? (
        <Link
            to={`/recipes/detail/${id}`}
            className="group h-full overflow-hidden rounded-xl border border-white/20 bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            <div className="relative">
                <img 
                    className="h-48 w-full object-cover transition-all duration-300 group-hover:brightness-90 sm:h-52" 
                    src={image} 
                    alt={title} 
                />
                <div className="absolute right-3 top-3 rounded-full bg-purple-500 px-3 py-1 text-xs text-white sm:text-sm">
                    {category}
                </div>
            </div>
            <div className="p-4 sm:p-5">
                <h1 className="mb-2 text-lg font-semibold text-purple-300 transition-colors duration-300 group-hover:text-purple-200 sm:text-xl">
                    {title}
                </h1>
                <p className="mb-3 text-sm text-purple-200 sm:text-base">
                    <i className="ri-user-line mr-2"></i>
                    {chef}
                </p>
                <p className="line-clamp-2 text-sm text-gray-200 sm:text-base">
                    {description}
                </p>
                <div className="mt-4 text-sm text-purple-300 transition-transform duration-300 group-hover:translate-x-2 sm:text-base">
                    Read more <i className="ri-arrow-right-line ml-1"></i>
                </div>
            </div>
        </Link>
    ) : (
        "loading..."
    );
};

export default Reciprcard;
