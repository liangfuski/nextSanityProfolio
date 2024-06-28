"use client"
import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function About({}: Props) {
  return (
    <motion.div 
      initial={{ opacity:0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="
        flex flex-col relative h-fit text-center max-w-7xl px-10 justify-center mx-auto items-center
        pt-20
        pb-20
        md:pt-0
        md:pb-0
        md:h-screen
        md:text-left 
        md:flex-row ">

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
          src="https://liangfuski.s3.amazonaws.com/profile2.png"
          className="mb-10 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover object-top md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]">
        </motion.img>

        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-4xl font-semibold">Here is a <span className="underline decoration-[#F7AB0A]/50">little</span> background</h4>
          <p className="text-base">With over three years of experience in implementing web-based systems, complemented by an advanced program in artificial intelligence, I have honed my skills in applying DevOps/MLOps principles to cutting-edge AI projects.
            Throughout my tech career, I have contributed to three large-scale enterprise projects across the financial, airline, and retail sectors, enriching my expertise in full-stack development, system design, cloud technologies, and CI/CD workflows. Two of these projects were data-driven AI systems, which inspired me to further my education in AI, acquiring advanced skills in machine learning, computer vision, big data, NLP, deep learning, LLM, and MLOps. My internship provided opportunities to solve industrial problems, applying both my experience and newfound knowledge.
            I leveraged my skills and expertise in my award-winning capstone project, a yoga auto-training Android application. This success has motivated me to continue bringing innovative AI ideas to production-level products.</p>
        </div>
    </motion.div>
  )
}

export default About