import { NextResponse , NextRequest } from "next/server";

// export function GET (){
//     return NextResponse.json({
//         message : "Hello from Nabeel "
//     })
// }


const ShoppingList = [
    {
        name: "Shoes"
    },
   
]

export function GET (){
    return NextResponse.json(ShoppingList)
}




export async function POST (request : NextRequest) {
    const body = await request.json() //IN
    ShoppingList.push(body)


    return NextResponse.json(body) // OUT
}