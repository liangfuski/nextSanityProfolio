import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { TopSkills } from '../../typings';

const query = groq`
    *[_type == 'topSkills'][0]{
    ...,
    skills[] ->
    }
`
type Data = {
    topSkills: TopSkills
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const topSkills: TopSkills = await sanityClient.fetch(query);

    res.status(200).json({ topSkills })
  }