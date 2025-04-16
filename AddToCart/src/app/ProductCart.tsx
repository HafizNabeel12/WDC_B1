"use client"
import Image from "next/image";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";


const getProduct = async () =>{

  const res = await client.fetch(`*[_type=="product"]   `)
  return res;

}




export default async function ProductCart() {
  const data = await getProduct();


  const handleAddToCart = async (item:any)=>{
      const res = await fetch (
          `/api/cart`, {
              method: 'POST',
              body: JSON.stringify({
                product_id: item._id
              })
      })
  
      const result = await res.json()
      }
    
    
        
  // console.log(data);
  

  return (
   <div>
    {
      data.map((item:any)=>{
        return(
          <div className="bg-red-700">
          {item.name}
          <p >{item.description}</p>
          <p> {item.price} </p>
          <img src={urlFor(item.image).url()} alt="Pic" width={200} height={500}/>
          <button onClick={ () => handleAddToCart(item)} className="border py-2 px-6 rounded bg-black text-white" >Add to cart</button>
          </div>
        )

      })
    }

   </div>
  );
}