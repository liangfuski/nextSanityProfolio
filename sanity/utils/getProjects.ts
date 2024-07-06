
import { groq } from "next-sanity";
import { Project } from '../../typings';
import { client } from "./client";

const query = groq`
    *[_type == 'project']| order(_createdAt desc) {
      ...,
      technologies[] -> 
    }
`

export default async function getProjects(): Promise<Project[]> {
  return client.fetch(query)
}
