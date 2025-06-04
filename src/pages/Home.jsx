import React, { useEffect } from 'react'
import axios from "axios";
const Home = () => {

  const getproduct = async()=> {
    try{
      const response =await axios.get("https://fakestoreapi.com/products/1");
      console.log(response.data);
     }
    catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    console.log("bj");
    getproduct();

    return()=>{
      console.log("vuyg")
    }
  }
)

  return (
    
    <div>
      <h2>home</h2>
      <button onClick={getproduct}>Get Product</button>
    </div>
  )
}

export default Home;







 




