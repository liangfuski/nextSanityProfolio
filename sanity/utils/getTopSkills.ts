import { groq } from "next-sanity";
import { TopSkills } from '../../typings';
import { client } from "./client";

const query = groq`
    *[_type == 'topSkills'][0]{
    ...,
    skills[] ->
    }
`

export default async function getTopSkill(): Promise<TopSkills> {
  return client.fetch(query)
}