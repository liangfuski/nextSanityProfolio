import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure"
import schemas from './sanity/schemas';

const config = defineConfig({

  projectId: '0xiqcz3q',

  dataset: 'production',
  
  title: "My profolio",

  apiVersion: "2023-03-04",

  basePath: "/admin",

  plugins: [structureTool()],

  schema: { types: schemas}
})

export default config