import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function ExperienceCard({}: Props) {
  return <article className="
            md:h-[68vh]
            flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
            w-[80vw] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
            cursor-pointer transition-opacity duration-200">
        <motion.img
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-22 h-22 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-left"
            src="https://liangfuski.s3.amazonaws.com/ccs_s.png"

        />
        <div className="px-0 md:px-10 flex-shrink-0">
            <h4 className="text-xl md:text-3xl font-light">Full Stack Developer</h4>
            <p className="text-md font-bold md:text-2xl mt-1">CollegeCornerstone</p>
            <div className="flex space-x-2 my-2">
                <img
                    className="h-5 w-5 md:h-10 md:w-10 rounded-full"
                    src="https://liangfuski.s3.amazonaws.com/angular.png"
                />
                <img
                    className="h-5 w-5 md:h-10 md:w-10 rounded-full"
                    src="https://liangfuski.s3.amazonaws.com/angular.png"
                />
                <img
                    className="h-5 w-5 md:h-10 md:w-10 rounded-full"
                    src="https://liangfuski.s3.amazonaws.com/angular.png"
                />
            </div>
            <p className="uppercase py-2 text-gray-300 text-sm md:text-base">Started work... - Ended...</p>

            <ul className="list-disc space-y-3 ml-5 text-sm">
                <li>SSummary points Summary points Summary points Summary points Summary points Summary points Summary points Summary points Summary points Summary points Summary points ummary points </li>
                <li>SSummary points Summary points Summary points Summary points Summary points Summary points Summary points Summary points Summary points Summary points Summary points ummary points </li>
                <li>SSummary points Summary points Summary points Summary points Summary points Summary points Summary points Summary points Summary points Summary points Summary points ummary points </li>
                <li>SSummary points Summary points Summary points Summary points Summary points Summary points Summary points Summary points Summary points Summary points Summary points ummary points </li>
                <li>SSummary points Summary points Summary points Summary points Summary points Summary points Summary points Summary points Summary points Summary points Summary points ummary points </li>
            </ul>
        </div>
    </article>;
  
}

export default ExperienceCard