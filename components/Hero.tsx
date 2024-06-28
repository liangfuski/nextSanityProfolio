'use client'
import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'

function Hero() {
    const [text, count] = useTypewriter({
        words: [
            "Hi, My Name's Fu Liang",
            "Guy-who-loves-Coffee.tsx",
            "<ButLovesToCodeMore />"
        ],
        loop: true,
        delaySpeed: 2000,
    })

  return (
    // 55:35
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden relative">
        <BackgroundCircles/>
        <img 
            className="relative rounded-full h-32 w-32 mx-auto object-coveer"
            src="https://media.licdn.com/dms/image/D4D03AQF7H1IS1gXM2Q/profile-displayphoto-shrink_200_200/0/1718242091457?e=1724889600&v=beta&t=uaggwtuZnsSElDQiy895dJ3zzgxadUWBoeGQll-_gnc"/>
        <div className="z-20">
            <h2 className="text-xs md:text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Full Stack Engineer</h2>
            <h1 className="text-xl md:text-5xl lg:text-6xl font-semibold scrool-px-10">
                <span className="mr-3">{text}</span>
                <Cursor cursorColor='#F7AB0A'/>
            </h1>

            <div className="pt-5">
                <Link href="#about">
                    <button className="heroButton">About</button>
                </Link>
                <Link href="#experience">
                    <button className="heroButton">Experience</button>
                </Link>
                <Link href="#skill">
                    <button className="heroButton">Skill</button>
                </Link>
                <Link href="#projects">
                    <button className="heroButton">Project</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero