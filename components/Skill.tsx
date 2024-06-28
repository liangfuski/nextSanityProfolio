import React from 'react'
import { motion } from "framer-motion"

type Props = {
    directionLeft?: boolean;
}

const Skill = ({ directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
        <img
            src="https://liangfuski.s3.amazonaws.com/angular.png"
            className="
                rounded-full 
                border border-gray-500 object-cover 
                w-24 h-24 
                filter group-hover:grayscale transition duration-300 ease-in-out"
        />

        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 
                ease-in-out group-hover:bg-white h-24 w-24 z-0 rounded-full">
            <div className='flex items-center justify-center h-full'>
                <p className="text-3xl font-bold text-black opacity-100">100%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill