import { defineType, defineField } from "sanity";

export default defineType({
    title:"Banners",
    name:"banners",
    type:"document",
    fields:[{
        title:"Banner Name",
        name:"bannerName",
        type:"string"
    },
    {
        title:"Banner Images",
        name:"bannerImages",
        type:"array",
        of:[{type:'image'}]
    },
    
]
})