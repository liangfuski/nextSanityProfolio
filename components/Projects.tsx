"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '@/sanity'
import Link from 'next/link'

type Props = {
    projects: Project[]
}

const Projects = ({projects}: Props) => {

  return (
    <motion.div
      initial={{ opacity:0 }} 
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row
        max-w-full justify-evenly mx-auto items-center z-20">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Project</h3>

        <div className="relative w-full flex overflow-x-scroll snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
            {projects.map((project, i) => (
              <Link key={i} href={project.linkToBuild}>
                <div className='w-screen flex-shrink-0 snap-center flex flex-col justify-center items-center space-y-5 px-10 pt-40 md:px-20 md:pt-40 h-[99vh]'>
                  <motion.img 
                    initial={{
                      y: -300,
                      opacity: 0
                    }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity:1, y: 0 }}
                    alt="ssGlobal" 
                    src={urlFor(project?.image).url()} 
                    className='w-1/1 lg:w-1/3'/>

                  <div className="space-y-10 px-0 md:py-10 max-w-6xl lg:w-1/3">
                    <h4 className='text-4xl font-semibold text-center'>
                        <span className="underline decoration-[#F7AB0A]/50">Project {i+1} of {projects.length}: </span>
                      {project?.title}
                    </h4>{" "}
                    <div className="flex items-center space-x-2 justify-center">
                        {project?.technologies.map((tech, i) => (
                            <img
                              className="h-7 w-7"
                              key={tech._id}
                              src={urlFor(tech.image).url()}
                            />
                        ))}
                    </div>
                    <p className="text-md text-center md:text-left">
                      {project?.summary}
                    </p>
                  </div>
                </div>
              </Link>

            ))}
        </div>
        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  )
}

export default Projects