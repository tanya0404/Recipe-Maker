import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import {nanoid} from "nanoid"
import { recipecontext } from '../context/RecipeContext'
import { data } from 'react-router-dom'
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const navigate= useNavigate();
  const {data,setdata} = useContext(recipecontext)
  const {register,handleSubmit,reset}= useForm();

  const SubmitHandler =(recipe)=> {
    // console.log(data)
    recipe.id=nanoid();

    // const copydata=[...data];
    // copydata.push(recipe);
    // setdata(copydata);

    setdata([...data,recipe])
    toast.success("New recipe created!")
    reset();
    navigate("/recipes")
  }

  return (
    <div>
      <form onSubmit={handleSubmit(SubmitHandler)}>
        <input className='block border-b outline-0 p-2' {...register("image")} type="url" />

        <small className='text-red-400'>This is how the error is shown</small>

        <input className='block border-b outline-0 p-2' {...register("title")} type="text" placeholder='Recipe Name' />

        <input className='block border-b outline-0 p-2' {...register("chef")} type="text" placeholder='Chef Name' />

        <textarea className='block border-b outline-0 p-2' {...register("description")} placeholder='start from here' />

        <textarea className='block border-b outline-0 p-2' {...register("ingredient")} placeholder='write ingredient seperated by comma' />

        <textarea className='block border-b outline-0 p-2' {...register("instructions")} placeholder='write ingredient seperated by comma' />

        <select className='block border-b outline-0 p-2 ' {...register("category")} >
          <option className='text-gray-800' value="">North-indian</option>
          <option className='text-gray-800' value="">South-indian</option>
          <option className='text-gray-800' value="">Chinese</option>
        </select>

        <button className='mt-5 block bg-gray-700 px-4 py-2 rounded'>Save recipe</button>
      </form>
    </div>
  )




}

export default Create


