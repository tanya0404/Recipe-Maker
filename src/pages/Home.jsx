import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-[80vh] space-y-10 sm:space-y-12">
      {/* Hero Section */}
      <div className="relative rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 p-6 text-white shadow-xl sm:p-10 lg:p-12">
        <div className="max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:mb-6 sm:text-4xl lg:text-5xl">Discover & Share Amazing Recipes</h1>
          <p className="mb-6 text-base sm:mb-8 sm:text-lg lg:text-xl">Create, share, and explore delicious recipes from around the world. Your culinary journey starts here!</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link to="/recipes" className="rounded-full bg-white px-6 py-3 text-center font-semibold text-purple-600 transition-all duration-300 hover:bg-opacity-90 sm:px-8">
              Explore Recipes
            </Link>
            <Link to="/create-recipe" className="rounded-full border-2 border-white px-6 py-3 text-center font-semibold transition-all duration-300 hover:bg-white hover:text-purple-600 sm:px-8">
              Create Recipe
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8">
        <div className="rounded-xl bg-white bg-opacity-10 p-6 transition-all duration-300 hover:scale-[1.02]">
          <div className="text-4xl mb-4 text-purple-400">
            <i className="ri-book-2-line"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Recipe Collection</h3>
          <p className="text-gray-700">Browse through our extensive collection of recipes from various cuisines.</p>
        </div>

        <div className="rounded-xl bg-white bg-opacity-10 p-6 transition-all duration-300 hover:scale-[1.02]">
          <div className="text-4xl mb-4 text-blue-400">
            <i className="ri-heart-3-line"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Save Favorites</h3>
          <p className="text-gray-700">Save your favorite recipes and access them anytime, anywhere.</p>
        </div>

        <div className="rounded-xl bg-white bg-opacity-10 p-6 transition-all duration-300 hover:scale-[1.02]">
          <div className="text-4xl mb-4 text-green-400">
            <i className="ri-add-circle-line"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Create & Share</h3>
          <p className="text-gray-700">Share your own recipes with the community and get feedback.</p>
        </div>
      </div>

    
      <div className="text-center">
        <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Ready to Start Cooking?</h2>
        <p className="text-gray-300 mb-8">Join our community of food lovers and start sharing your recipes today!</p>
        <Link to="/create-recipe" className="rounded-full bg-gradient-to-r from-purple-600 to-blue-500 px-8 py-3 font-semibold text-white transition-all duration-300 hover:opacity-90">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;







 




