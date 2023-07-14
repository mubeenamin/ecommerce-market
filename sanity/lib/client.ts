
import { createClient } from '@sanity/client';



export const client = createClient({
  token:process.env.SANITY_ACCESS_TOKEN,
  apiVersion:"2023-06-04",
  dataset:"production",
  projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn:true,
})

