
import { fetchPageInfo } from "@/utils/fetchPageInfo"
import { fetchExperiences } from "@/utils/fetchExperiences"
import { fetchProjects } from "@/utils/fetchProjects"
import { fetchTopSkills } from "@/utils/fetchTopSkills"
import { fetchSocials } from "@/utils/fetchSocials"

export const fetchData = async() => {
    const socials = await fetchSocials();
    const pageInfo = await fetchPageInfo();
    const experiences = await fetchExperiences();
    const projects = await fetchProjects();
    const topSkills = await fetchTopSkills();

    return {
        pageInfo,
        experiences,
        projects,
        topSkills,
        socials
    }
}