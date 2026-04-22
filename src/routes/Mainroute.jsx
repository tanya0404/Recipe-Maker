import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Recipies from '../pages/Recipies'
import About from '../pages/About'
import Create from '../pages/Create'
import Recipe from '../pages/Recipe'
import Fav from '../pages/Fav'
import AuthPage from '../pages/AuthPage'
import { useAuth } from '../context/AuthContext'

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/auth" replace />;
};

const Mainroute = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path='/auth' element={<AuthPage/>}/>
      <Route path='/' element={isAuthenticated ? <Home/> : <Navigate to="/auth" replace />}/>
      <Route path='/recipes' element={<ProtectedRoute element={<Recipies/>}/>}/>
      <Route path='/about' element={<ProtectedRoute element={<About/>}/>}/>
      <Route path='/recipes/detail/:id' element={<ProtectedRoute element={<Recipe/>}/>}/>
      <Route path='/create-recipe' element={<ProtectedRoute element={<Create/>}/>}/>
      <Route path='/fav' element={<ProtectedRoute element={<Fav/>}/>}/>
      <Route path='*' element={<About/>}/>
    </Routes>
  )
}

export default Mainroute;
