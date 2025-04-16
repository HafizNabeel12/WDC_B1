import Image from "next/image";
import  UserForm from "../components/UserForm";

export default async function Home() {

   const url = await fetch("http://localhost:3000/api/hello", {
    cache : "no-store"

   })
   const data = await url.json()
   



  return (
 <div>
 < UserForm/>
 {
  data.map((item:any)=>{
    return(
      <h1>{item.name}</h1>

    )
  })
 }


 </div>
  );
}
