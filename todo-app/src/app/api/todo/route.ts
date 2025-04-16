import {db, todoTable} from "../../../lib/drizzle"
import {sql} from "@vercel/postgres"

import { NextResponse, NextRequest } from "next/server"


export async function GET (){
  
    try{
        await sql`CREATE TABLE IF NOT EXISTS Todos(id serial , task varchar(255));`
        const res = await db.select().from(todoTable)
        return NextResponse.json({
            data : res
        })

    }catch(error){
        return NextResponse.json({message: "Something went wrong"})

    }
}


export async function POST (request: NextRequest) {
    const req =await request.json()
    try{
        if(req.task){
         const res = await db.insert(todoTable).values({
            task : req.task
         }).returning()
          return NextResponse.json({message: "Data added successfully" , data : res})

        }else{
            throw new Error("Task field is required")


        }

    }catch(err){
        return NextResponse.json({message: (err as{message:string}).message})

    }
}
