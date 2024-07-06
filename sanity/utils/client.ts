import { createClient, groq } from "next-sanity";

export const client = createClient({
          
    projectId: '0xiqcz3q',

    dataset: 'production',
    
    apiVersion: "2023-03-04",
})
