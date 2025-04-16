import { log } from "console"

const ArrayMap = () => {
    const fruits1 = ["Apple" , "Orange" , "Mango" ,80 , 811,849];
    const fruits = [
        { fruitName: "Apple",
             price: 200
             },
        { fruitName: "Orange", price: 500 },
        { fruitName: "Mango", price: 800 },
        { fruitName: "WaterMelons", price: 300 },
    ]

    const Cars = [
        {
            model: "Bmw",
            price: 200
        },

        {
            model: "Alto",
            price: 200
        },

        {
            model: "Mira",
            price: 200000
        },

        {
            model: "Civic",
            price: 200
        },
    ]




    return (
        <div>
            {
                fruits.map((phal) => {
                    return (
                        <div>
                            <div>
                                <h1> {phal.fruitName} </h1>
                                <h1> {phal.price} </h1>

                            </div>
                        </div>
                    )

                })
            } 

            {
                Cars.map((vehicle)=>{
                    return(
                        <div>
                            <div >
                            <h1 > {vehicle.model} </h1>
                            </div>
                            <h1> {vehicle.price} </h1>
                        </div>
                    )
                })
            }




        </div>
    )
}

export default ArrayMap