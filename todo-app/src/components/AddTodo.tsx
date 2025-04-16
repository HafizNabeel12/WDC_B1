"use client"
import { useState } from "react"
import {NewTodo} from "@/lib/drizzle"
import { useRouter } from "next/navigation"
import Image from "next/image"
const AddTodo = ()=>{
    const [task , setTask]= useState<NewTodo | null>(null)
    const {refresh} = useRouter()

    const handleSubmit = async ()=>{
        try{
            if(task){
                const res = await fetch ("/api/todo", {
                    method :"POST",
                    body : JSON.stringify({
                        task : task.task
                    })
                })
                refresh()


            }

        }catch(err){
            console.log(err);
            

        }

    }
    return(
        <div>
            <form className="w-full flex gap-x3 ">
                <input type="text" 
                className=" rounded-full w-full py-3.5 px-3 border mx-4 focus:outline-secondary"
                onChange={(e)=> setTask({task:e.target.value})}
                placeholder="Write a new Task"/>
                <button type="button" onClick={handleSubmit} className="p-4 rounded-full shrink-0 bg-gradient-to-b from-primary to-secondary"> 
                    <Image src={"/Vector.png"} width={20} height={20} alt="vector" />
                </button>
            </form>
        </div>
    )
}
export default AddTodo;