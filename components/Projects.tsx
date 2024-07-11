"use client"
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '@/sanity'
import Link from 'next/link'

type Props = {
    projects: Project[],
}

const Projects = ({projects}: Props) => {

  return (
    <motion.div
      initial={{ opacity:0 }} 
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="
        box-border pt-[100px] pb-[100px] m-h-screen relative flex flex-col text-left 
        max-w-full justify-start mx-auto items-center">
        <h3 className="
          uppercase tracking-[20px] text-gray-500 text-2xl">
            Project</h3>

        <div className="z-10 box-border relative w-full flex overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
            {projects.map((project, i) => (
                <div key={i} className={`w-screen flex-shrink-0 snap-center flex flex-col a justify-start md:justify-center items-center space-y-5 px-10 p-10`}>
                    <Link href={project.linkToBuild} className="contents">
                        <motion.img 
                          initial={{
                            y: -100,
                            opacity: 0
                          }}
                          transition={{ duration: 1.2 }}
                          whileInView={{ opacity:1, y: 0 }}
                          alt="ssGlobal" 
                          src={urlFor(project?.image).url()} 
                          className='w-1/1 lg:w-1/3'
                          viewport={{once: true}} />
                    </Link>
                  <div className="space-y-10 px-0 max-w-6xl lg:w-1/3">
                    <h4 className='text-3xl md:text-4xl font-semibold text-center'>
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

            ))}
        </div>
        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  )
}

export default Projects