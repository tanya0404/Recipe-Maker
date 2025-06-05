import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-[80vh]">
      {/* About Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Recipe Maker</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Your ultimate destination for discovering, creating, and sharing amazing recipes
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-white bg-opacity-10 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          At Recipe Maker, we believe that cooking is more than just preparing food – it's about creating memories, 
          sharing experiences, and bringing people together. Our platform is designed to make recipe sharing and 
          discovery as easy and enjoyable as possible.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white bg-opacity-10 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-3">Easy Recipe Creation</h3>
          <p className="text-gray-700">
            Create and share your recipes with our intuitive interface. Add images, ingredients, 
            and step-by-step instructions to make your recipes come alive.
          </p>
        </div>

        <div className="bg-white bg-opacity-10 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-3">Recipe Discovery</h3>
          <p className="text-gray-700">
            Explore a diverse collection of recipes from various cuisines. Find inspiration for 
            your next culinary adventure.
          </p>
        </div>

        <div className="bg-white bg-opacity-10 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-3">Save Favorites</h3>
          <p className="text-gray-700">
            Keep track of your favorite recipes with our easy-to-use favorites system. Access 
            your saved recipes anytime, anywhere.
          </p>
        </div>

        <div className="bg-white bg-opacity-10 p-6 rounded-xl">
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
        <div className="flex justify-center gap-4">
          <Link to="/recipes" className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-full hover:opacity-90 transition-all duration-300">
            Explore Recipes
          </Link>
          <Link to="/create-recipe" className="border-2 border-purple-500 text-purple-500 px-6 py-2 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300">
            Create Recipe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
