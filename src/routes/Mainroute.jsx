import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Recipies from '../pages/Recipies'
import About from '../pages/About'
import Create from '../pages/Create'
import Recipe from '../pages/Recipe'
const Mainroute = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/recipes' element={<Recipies/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/recipes/detail/:id' element={<Recipe/>}/>
      <Route path='/create-recipe' element={<Create/>}/>
      <Route path='/fav' element={<About/>}/>
      <Route path='*' element={<About/>}/>
    </Routes>
  )
}

export default Mainroute;
