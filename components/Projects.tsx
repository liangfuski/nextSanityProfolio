"use client"
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const Projects = (props: Props) => {
    const projects = [1,2,3,4,5]

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
              <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col justify-center items-center space-y-5 px-10 pt-40 md:px-20 md:pt-40 h-[99vh]'>
                <motion.img 
                  initial={{
                    y: -300,
                    opacity: 0
                  }}
                  transition={{ duration: 1.2 }}
                  whileInView={{ opacity:1, y: 0 }}
                  alt="ssGlobal" 
                  src="https://liangfuski.s3.amazonaws.com/ss-full-front.png" 
                  className='w-1/1 lg:w-1/3'/>

                <div className="space-y-10 px-0 md:py-10 max-w-6xl lg:w-1/3">
                  <h4 className='text-4xl font-semibold text-center'>
                      <span className="underline decoration-[#F7AB0A]/50">Project {i+1} of {projects.length}: </span>
                      SS Global Limited
                    </h4>{" "}
                <p className="text-md text-center md:text-left">
                If a check is in a box next to a layer, it means that layer will be part of your final product. For example, If I were to make the
        white background in the "chair" image transparent then you would see the image in the next layer, if the next layer has a check in the check
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