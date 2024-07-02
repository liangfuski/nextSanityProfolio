'use client';
import React from 'react';
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion"
import Link from 'next/link';
import { Social } from '@/typings';

type Props = {
    socials: Social[]
}

function Header({ socials }: Props) {
  
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
            {socials.map((social) => (
                <SocialIcon 
                    key={social._id} 
                    fgColor="gray"
                    bgColor="transparent"
                    url={social.url}/>
                ))}
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