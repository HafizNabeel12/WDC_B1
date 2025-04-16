export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Product Name'
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description'
        },
        {
            name: "image",
            type: "image",
            title: "Image",
          
        },
        {
            name: 'category',
            type: 'reference',
            title: 'Category',
            to: {
                type: 'category',
                },
                }
    ]
}