import React from 'react'
import { motion } from "framer-motion"
import {Skill as skill} from "../typings"
import { urlFor } from '@/sanity';

type Props = {
    skill: skill;
}

const Skill = ({ skill }: Props) => {
  return (
    <div className="
        group relative flex cursor-pointer w-24 h-24"
        style={{
            background: `url("${urlFor(skill.image).url()}")`,
            backgroundPosition: 'center center',
            backgroundSize:'75% auto',
            backgroundRepeat: 'no-repeat'
        }}>
        {/* <img
            src={urlFor(skill.image).url()}
            className="
                rounded-full 
                border border-gray-500 object-cover 
                w-24 h-24 
                filter group-hover:grayscale transition duration-300 ease-in-out"
        /> */}

        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 
                ease-in-out group-hover:bg-white h-24 w-24 z-0 rounded-full">
            <div className='flex items-center justify-center h-full'>
                <p className="text-3xl font-bold text-black opacity-100">{skill.progress}%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill