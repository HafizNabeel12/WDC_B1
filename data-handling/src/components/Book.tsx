export default async function Book(){

    //Making API request
    const url = await fetch("https://simple-books-api.glitch.me/books?type=fiction")
    
    // Coverting it into JSON
    const result = await url.json()
    


    // console.log(result[0].name);
    
    
    
    return(
        <main>
            {
                result.map((book: any)=>{
                 return(
                 <div>
                        <h1> {book.name}   </h1>
                        <h1>{book.id}</h1>
                        </div>
                )})
            }
        </main>
      
        
    )
}