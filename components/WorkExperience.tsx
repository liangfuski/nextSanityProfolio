"use client"
import React, { Component } from 'react'
import { motion } from "framer-motion"
import ExperienceCard from "./ExperienceCard"

type Props = {}

type State = {}

class WorkExperience extends Component<Props, State> {
  state = {}

  render() {
    return (
      <motion.div 
        className="
            box-border
            h-fit
            md:h-screen
            flex overflow-hidden flex-col text-left md:flex-col
            max-w-full px-10 pt-30 justify-center mx-auto items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        >
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">EXPERIENCE</h3>

        {/* i added absolute top-24 */}
        <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
            scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
            <ExperienceCard/>
            <ExperienceCard/>
            <ExperienceCard/>
            <ExperienceCard/>
        </div>
      </motion.div>
    )
  }
}

export default WorkExperience