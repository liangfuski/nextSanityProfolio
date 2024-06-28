'use client';
import React from 'react';
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion"
import Link from 'next/link';

type Props = {}

function Header({}: Props) {
  return (
    // video 35:00 for snapping
    <header className="bg-[rgb(36,36,36)] sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center z-100">
        <motion.div 
            initial={{
                x:-500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity:1,
                scale: 1
            }}
            transition={{
                duration: 1.5,
            }}
            className='flex flex-row items-center'>
            {/* Social Icons */}

            <SocialIcon 
                url="https://www.youtube.com/channel/UC6i0uWY2Sz49eepv7ZcLBxQ" 
                fgColor="gray"
                bgColor="transparent"
            />

            <SocialIcon 
                url="https://www.linkedin.com/in/fu-liang-tony/" 
                fgColor="gray"
                bgColor="transparent"
            />

            <SocialIcon 
                url="https://github.com/liangfuski" 
                fgColor="gray"
                bgColor="transparent"
            />
        </motion.div>
        
            <motion.div 
                initial={{
                    x:500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity:1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5,
                }}
                className="flex flex-row items-center text-gray-300 cursor-pointer">
                <SocialIcon 
                    className='cursor-pointer'
                    network="email"
                    fgColor="gray"
                    bgColor="transparent"
                />

            <Link href="#contact">
                <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get it Touch</p>
            </Link>
            </motion.div>
    </header>
  )
}

export default Header