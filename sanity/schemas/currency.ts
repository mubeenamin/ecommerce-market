
import { defineType, defineField } from "sanity";

export default defineType({
    title:"Currency",
    name:"currency",
    type:"document",
    fields:[{
        title:"Name",
        name:"currencyName",
        type:"string"
    },
    {
        title:"Symbol",
        name:"symbol",
        type:"string"
    }
    
]
})