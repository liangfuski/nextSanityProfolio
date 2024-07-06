
import { groq } from "next-sanity";
import { Experience } from '../../typings';
import { client } from "./client";

const query = groq`
    *[_type == 'experience'] {
      ...,
      technologies[] -> 

    } | order(dateStarted desc)
`

export default async function getExperience(): Promise<Experience[]> {
  return client.fetch(query)
}
