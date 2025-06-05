import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-[80vh]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-2xl p-12 mb-12 shadow-xl">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">Discover & Share Amazing Recipes</h1>
          <p className="text-xl mb-8">Create, share, and explore delicious recipes from around the world. Your culinary journey starts here!</p>
          <div className="flex gap-4">
            <Link to="/recipes" className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300">
              Explore Recipes
            </Link>
            <Link to="/create-recipe" className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
              Create Recipe
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white bg-opacity-10 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
          <div className="text-4xl mb-4 text-purple-400">
            <i className="ri-book-2-line"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Recipe Collection</h3>
          <p className="text-gray-800">Browse through our extensive collection of recipes from various cuisines.</p>
        </div>

        <div className="bg-white bg-opacity-10 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
          <div className="text-4xl mb-4 text-blue-400">
            <i className="ri-heart-3-line"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Save Favorites</h3>
          <p className="text-gray-800">Save your favorite recipes and access them anytime, anywhere.</p>
        </div>

        <div className="bg-white bg-opacity-10 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
          <div className="text-4xl mb-4 text-green-400">
            <i className="ri-add-circle-line"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Create & Share</h3>
          <p className="text-gray-800">Share your own recipes with the community and get feedback.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Cooking?</h2>
        <p className="text-gray-300 mb-8">Join our community of food lovers and start sharing your recipes today!</p>
        <Link to="/create-recipe" className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-300">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;







 




