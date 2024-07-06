import { groq } from "next-sanity";
import { Social } from '../../typings';
import { client } from "./client";

const query = groq`
    *[_type == 'social']
`

export default async function getSocials(): Promise<Social[]> {
  return client.fetch(query)
}

