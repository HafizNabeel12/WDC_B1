import Image from "next/image";
import { client } from "../sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const getProduct = async () => {
  const res = await client.fetch((`*[_type=="product"] `));
  return res
}
export default async function Home() {


  const data = await getProduct();
  console.log(data);

  return (
    <h1>
      {data.map((pet: any) => (
        <div className="bg-red-700">
          {pet.name}
          <p>{pet.description}</p>
          <Image src={urlFor(pet.image).url()} alt="Pic" width={200} height={200} />
          <button>Add to Cart </button>
          </div>
      ))}
    </h1>
    
  );
}