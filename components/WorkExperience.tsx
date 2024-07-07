"use client"
import React, { Component } from 'react'
import { motion } from "framer-motion"
import ExperienceCard from "./ExperienceCard"
import { Experience } from '@/typings'

type Props = { 
  experiences: Experience[]
}

function WorkExperience({ experiences }: Props){
    return (
      <motion.div 
        className="
            box-border
            h-screen
            flex overflow-hidden flex-col text-left md:flex-col
            max-w-full px-10 py-30 justify-center mx-auto items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        >
        <h3 
          className="uppercase tracking-[20px] text-gray-500 text-2xl">EXPERIENCE</h3>
        {/* i added absolute top-24 */}
        <div className="w-full flex space-x-5 overflow-x-auto overflow-y-hidden p-5 snap-x snap-mandatory
            scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
              {experiences?.map(experience => (
                <ExperienceCard key={experience._id} experience={experience}/>
              ))}
        </div>
      </motion.div>
    )
}

export default WorkExperience