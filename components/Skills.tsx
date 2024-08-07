"use client"
import React from 'react'
import { motion } from "framer-motion"
import Skill from "./Skill"
import { Skill as skill} from "../typings"

type Props = {
  topSkills: skill[]
}

const Skills = ({topSkills}: Props) => {
  return (
    <motion.div 
        className="
            border-box pt-20
            flex relative flex-col text-center 
            md:text-left max-w-[2000px]
            xl:px-10 min-h-screen
            justify-start mx-auto items-center mx-auto
            md:justify-center
            xl:space-y-0 xl:px-10 z-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}>
        
        <h3 className="md:absolute md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">skills</h3>
        <h3 className="md:absolute md:top-36 uppercase md:tracking-[3px] text-gray-500 text-sm">Hover over a skill for current proficiency</h3>

        <div className="
          grid 
          grid-cols-3
          p-10
          md:p-10
          md:p-0 
          md:grid-cols-4 
          md:gap-5">
            {topSkills.map((s,i) => (
              <Skill key={i} skill={s}/>
            ))}
        </div>
    </motion.div>
  )
}

export default Skills