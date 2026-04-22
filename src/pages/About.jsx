import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-[80vh]">
      {/* About Header */}
      <div className="mb-10 text-center sm:mb-12">
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl">About Recipe Maker</h1>
        <p className="mx-auto max-w-2xl text-base text-gray-300 sm:text-xl">
          Your ultimate destination for discovering, creating, and sharing amazing recipes
        </p>
      </div>

      {/* Mission Section */}
      <div className="mb-10 rounded-2xl bg-white bg-opacity-10 p-5 sm:mb-12 sm:p-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="leading-relaxed text-gray-700">
          At Recipe Maker, we believe that cooking is more than just preparing food – it's about creating memories, 
          sharing experiences, and bringing people together. Our platform is designed to make recipe sharing and 
          discovery as easy and enjoyable as possible.
        </p>
      </div>

      {/* Features Grid */}
      <div className="mb-10 grid grid-cols-1 gap-5 sm:mb-12 md:grid-cols-2 md:gap-8">
        <div className="rounded-xl bg-white bg-opacity-10 p-5 sm:p-6">
          <h3 className="text-xl font-semibold mb-3">Easy Recipe Creation</h3>
          <p className="text-gray-700">
            Create and share your recipes with our intuitive interface. Add images, ingredients, 
            and step-by-step instructions to make your recipes come alive.
          </p>
        </div>

        <div className="rounded-xl bg-white bg-opacity-10 p-5 sm:p-6">
          <h3 className="text-xl font-semibold mb-3">Recipe Discovery</h3>
          <p className="text-gray-700">
            Explore a diverse collection of recipes from various cuisines. Find inspiration for 
            your next culinary adventure.
          </p>
        </div>

        <div className="rounded-xl bg-white bg-opacity-10 p-5 sm:p-6">
          <h3 className="text-xl font-semibold mb-3">Save Favorites</h3>
          <p className="text-gray-700">
            Keep track of your favorite recipes with our easy-to-use favorites system. Access 
            your saved recipes anytime, anywhere.
          </p>
        </div>

        <div className="rounded-xl bg-white bg-opacity-10 p-5 sm:p-6">
          <h3 className="text-xl font-semibold mb-3">Community Driven</h3>
          <p className="text-gray-700">
            Join a community of food enthusiasts. Share your recipes, get feedback, and learn 
            from other passionate cooks.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Join Our Community?</h2>
        <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <Link to="/recipes" className="rounded-full bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-2 text-white transition-all duration-300 hover:opacity-90">
            Explore Recipes
          </Link>
          <Link to="/create-recipe" className="rounded-full border-2 border-purple-400 px-6 py-2 text-purple-200 transition-all duration-300 hover:bg-purple-500 hover:text-white">
            Create Recipe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
