"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

const UserForm = () =>{
    const [name , setName] = useState("");
    const router = useRouter();

    const handleSubmit = async (e :any) =>{
        e.preventDefault()

     

        const url = await fetch("/api/hello" , {
            method : 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({name})
        })
        await url.json()
        router.refresh()
        

    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                value={name}
                onChange={(e :any)=> setName(e.target.value)}
                className=""
                placeholder="Enter Product Name"
                type="text" />

                <button type="submit">Submit</button>
            </form>




        </div>
    )
}

export default UserForm