export const product = {
    name : "product",
    type : "document",
    title: "Product",
    fields:[
        {
            name : "name",
            type : "string",
            title :"Product Name",
            
        },
        {
            name : "description",
            type : "string",
            title :"Product Description"
        },
        {
            name : "price",
            type : "number",
            title :"Product Price"
        },
        {
            name : "image",
            type : "image",
            title :"Product Image"
        },
        {
           name : "category",
           title : "Category Name",
           type : "reference",
           to : [
            {
                type : "category"
            },
           
           
           ] 
        }
        
       

    ]
}



// name:{
//  Shirt
// }