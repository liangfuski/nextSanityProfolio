import { groq } from "next-sanity";
import { PageInfo } from '../../typings';
import { client } from "./client";

const query = groq`
    *[_type == 'pageInfo'][0]
`

export default async function getPageInfo(): Promise<PageInfo> {
  return client.fetch(query)
}
