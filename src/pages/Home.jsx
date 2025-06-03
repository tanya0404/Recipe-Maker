import React from 'react'
import axios from "axios";
const Home = () => {

  const getproduct = async()=> {
    try{
      const {data} =await axios.get("https://fakestoreapi.com/products/1");
      console.log(data);
     }
    catch(error){
      console.log(error);
    }
  }

  return (
    
    <div>
      <h2>home</h2>
      <button>Get Product</button>
    </div>
  )
}

export default Home;
