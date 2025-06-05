import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white bg-opacity-10 backdrop-blur-md rounded-full px-8 py-4 mb-8">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-purple-400">
          Recipe Maker
        </div>
        <div className="flex items-center gap-8">
          <NavLink 
            className={({ isActive }) => 
              `transition-all duration-300 hover:text-purple-400 ${isActive ? "text-purple-400 font-semibold" : "text-gray-800"}`
            } 
            to="/"
          >
            Home
          </NavLink>
          <NavLink 
            className={({ isActive }) => 
              `transition-all duration-300 hover:text-purple-400 ${isActive ? "text-purple-400 font-semibold" : "text-gray-800"}`
            } 
            to="/recipes"
          >
            Recipes
          </NavLink>
          <NavLink 
            className={({ isActive }) => 
              `transition-all duration-300 hover:text-purple-400 ${isActive ? "text-purple-400 font-semibold" : "text-gray-800"}`
            } 
            to="/about"
          >
            About
          </NavLink>
          <NavLink 
            className={({ isActive }) => 
              `transition-all duration-300 hover:text-purple-400 ${isActive ? "text-purple-400 font-semibold" : "text-gray-300"}`
            } 
            to="/fav"
          >
            <i className="ri-heart-3-line text-xl"></i>
          </NavLink>
          <NavLink 
            className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-full hover:opacity-90 transition-all duration-300"
            to="/create-recipe"
          >
            Create Recipe
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
