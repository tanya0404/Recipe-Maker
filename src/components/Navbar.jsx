import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === '/auth') {
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  return (
    <nav className="mb-6 rounded-2xl border border-white/20 bg-white/10 px-4 py-4 backdrop-blur-md sm:mb-8 sm:px-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="text-center text-xl font-bold text-purple-300 sm:text-left sm:text-2xl">
          Recipe Maker
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:justify-end">
          <NavLink 
            className={({ isActive }) => 
              `rounded-full px-3 py-1 text-sm transition-all duration-300 hover:text-purple-300 ${isActive ? "bg-white/10 text-purple-300 font-semibold" : "text-gray-200"}`
            } 
            to="/"
          >
            Home
          </NavLink>
          <NavLink 
            className={({ isActive }) => 
              `rounded-full px-3 py-1 text-sm transition-all duration-300 hover:text-purple-300 ${isActive ? "bg-white/10 text-purple-300 font-semibold" : "text-gray-200"}`
            } 
            to="/recipes"
          >
            Recipes
          </NavLink>
          <NavLink 
            className={({ isActive }) => 
              `rounded-full px-3 py-1 text-sm transition-all duration-300 hover:text-purple-300 ${isActive ? "bg-white/10 text-purple-300 font-semibold" : "text-gray-200"}`
            } 
            to="/about"
          >
            About
          </NavLink>
          <NavLink 
            className={({ isActive }) => 
              `rounded-full px-3 py-1 text-sm transition-all duration-300 hover:text-purple-300 ${isActive ? "bg-white/10 text-purple-300 font-semibold" : "text-gray-200"}`
            } 
            to="/fav"
          >
            <i className="ri-heart-3-line text-xl"></i>
          </NavLink>
          <NavLink 
            className="rounded-full bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-2 text-sm text-white transition-all duration-300 hover:opacity-90 sm:px-6"
            to="/create-recipe"
          >
            Create Recipe
          </NavLink>
          
          {user && (
            <div className="flex items-center gap-2 border-white/20 pt-1 sm:gap-3 sm:pt-0 lg:border-l lg:pl-4">
              <span className="max-w-28 truncate text-xs text-gray-200 sm:max-w-none sm:text-sm">
                {user.fullName}
              </span>
              <button 
                onClick={handleLogout}
                className="flex items-center gap-2 rounded-full bg-red-500 px-3 py-2 text-xs text-white transition-all duration-300 hover:bg-red-600 sm:px-4 sm:text-sm"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
