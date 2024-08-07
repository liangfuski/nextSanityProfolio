"use client"
import React from 'react'
import { motion } from "framer-motion";
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
    pageInfo: PageInfo
}

function About({ pageInfo }: Props) {
  return (
    <motion.div 
      initial={{ opacity:0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="
        box-border
        h-screen
        flex 
        px-5
        flex-col relative text-center max-w-7xl justify-start md:mx-auto items-center
        p-30
        md:pt-0
        md:pb-0
        md:text-left
        md:justify-center
        md:flex-row "
      
      style={{paddingTop: "100px", paddingBottom: "100px"}}>

        <h3 className="
          md:absolute 
          md:top-24
          md:pb-0
          pb-5
          uppercase 
          tracking-[20px] 
          text-gray-500 
          text-2xl">About</h3>

        <motion.img
          initial={{
            x: -200,
            opacity:0
          }}
          whileInView={{x:0, opacity:1}}
          viewport={{ once: true }}
          src={urlFor(pageInfo?.profilePic).url()}
          className="hidden md:inline-block md:mb-0 flex-shrink-1 w-30 h-30 rounded-full object-cover object-top md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]">
        </motion.img>

        <div className="space-y-10 px-0 md:px-10 
          overflow-y-auto 
          scrollbar-thin
          scrollbar-track-black scrollbar-thumb-[#F7AB0A]/8">
          <h4 className="text-4xl font-semibold">Here is a <span className="underline decoration-[#F7AB0A]/50">little</span> background</h4>
          <p className="text-base">{pageInfo.backgroundInformation}</p>
        </div>
    </motion.div>
  )
}

export default About