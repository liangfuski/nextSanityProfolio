import Head from "next/head"
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import WorkExperience from "../components/WorkExperience"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import ContactMe from "@/components/ContactMe"
import Link from "next/link"
import { PageInfo, Experience, Skill, Project, Social} from "../typings"
import { fetchData } from "@/utils/fetchData"
import { use } from 'react';
import getPageInfo from "@/sanity/utils/getPageInfo"

const Home = async () => {
 
  const page = await getPageInfo();

  console.log("pageInfo :: ", page)
  const {pageInfo,  experiences, topSkills, projects, socials } = use(fetchData());
  return (
    <div className="
      bg-[rgb(36,36,36)] 
      text-white
      h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Fu&apos;s Portfolio</title>
      </Head>
      
      <Header socials={socials}/>
      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo}/>
      </section>

      {/* About */}
      <section id='about' className="snap-center">
        <About pageInfo={pageInfo}/>
      </section>
      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences}/>
      </section>
      {/* Skills */}
      <section id="skills" className="snap-center">
        <Skills topSkills={topSkills}/>
      </section>

      {/* Projects */}
      <section id="projects" className="snap-center">
        <Projects projects={projects}/>
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grapscale hover:grayscale-0 cursor-pointer" 
              src="https://liangfuski.s3.amazonaws.com/logo.png" alt=""/>
          </div>
        </footer>
      </Link>
    </div>
  );
}

export default Home;

// how I fix vercel build issue
// ref: https://github.com/vercel/next.js/issues/49578
// export const runtime = "edge"