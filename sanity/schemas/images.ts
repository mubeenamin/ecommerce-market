import { defineType, defineField } from "sanity";

export default defineType({
    title:"Images",
    name:"images",
    type:"document",
    fields:[{
        title:"Image Name",
        name:"imageName",
        type:"string"
    },{
        title:"Product Images",
        name:"productImages",
        type:"array",
        of:[{
            type:"image"
        }]
    },]
})