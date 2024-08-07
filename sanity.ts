import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
// import { create } from "domain";

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "0xiqcz3q",
    apiVersion: "2021-03-25",
    useCdn: process.env.NODE_ENV === "production"
}

// Set up the client for fetching data in the getProps page functions 
export const sanityClient = createClient(config)

export const urlFor = (source: any) => createImageUrlBuilder(sanityClient).image(source); 