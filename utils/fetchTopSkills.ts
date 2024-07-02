import { Skill } from "../typings";


export const fetchTopSkills = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTopSkills`)

    const data = await res.json()
    // console.log("log: ", data.topSkills)
    const skills: Skill[] = data.topSkills!.skills;

    return skills
}