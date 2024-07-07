import React from 'react'
import { motion } from "framer-motion"
import { Experience } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
    experience: Experience;
}

function ExperienceCard({experience}: Props) {

    const companyImageClass = experience.shouldCompanyImageRound ? 
        "w-[80px] h-[80px] rounded-full xl:w-[100px] xl:h-[100px]" :
        "w-auto h-10 xl:w-auto xl:h-[60px]" 

    const clientImageClass = experience.shouldClientImageRound ? 
        "w-[80px] h-[80px] rounded-full xl:w-[100px] xl:h-[100px]" :
        "w-auto h-10 xl:w-auto xl:h-[100px]" 

  return <article className="
            border-box
            h-[64vh]
            md:h-[65vh]
            flex flex-col rounded-lg items-center md:space-y-7 md:space-y-15 flex-shrink-0 
            w-[80vw] md:w-[600px] xl:w-[900px] snap-center md:bg-[#292929] md:p-10 hover:opacity-100 md:opacity-40
            cursor-pointer transition-opacity duration-200
             hover:overflow-y-auto scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/8
            ">
        
        <div className="flex flex-row justify-center items-center space-x-2 md:space-x-5" style={{flex:1}}>
            <div className='xl:h-[100px] flex flex-col justify-center'>
                <motion.img
                    initial={{
                        y: -10,
                        opacity: 0,
                    }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={companyImageClass}
                    src={urlFor(experience?.companyImage).url()}

                />
            </div>
            {
                experience.projectClientImage && 
                    (
                        <div className="relative w-7 h-7 transform rotate-45 md:w-10 md:h-10">
                            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-1 bg-[#F7AB0A]"></div>
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#F7AB0A]"></div>
                        </div>
                    )
                
            }
            {
                experience.projectClientImage && (
                <div className=' xl:h-[100px] flex flex-col justify-center'>
                    <motion.img
                        initial={{
                            y: -10,
                            opacity: 0,
                        }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={clientImageClass}
                        src={urlFor(experience?.projectClientImage).url()}
                    />
                </div>)

            }
        </div>
        
        <div className="flex flex-col px-0 md:px-10 flex-shrink-0 space-y-3" style={{flex:5}}>
            <h4 className="text-xl md:text-3xl font-light">{experience.jobTitle}</h4>
            <p className="text-md font-bold md:text-2xl mt-1">{experience.company} : {experience.projectDescription}</p>
            <div className="flex space-x-2 my-2">
                {
                    experience.technologies.map((t,i) => (
                            <img
                                key={i}
                                className="h-5 w-5 md:h-10 md:w-10 rounded-full"
                                src={urlFor(t?.image).url()}
                            />
                        
                    ))
                }
            </div>
            <p className="uppercase py-2 text-gray-300 text-sm md:text-base">
                {new Date(experience.dateStarted).toDateString()} -{" "}
                {experience.isCurrentlyWorkingHere 
                    ? "Present"
                    : new Date(experience.dateEnded).toDateString()}
            </p>

            <ul className="border-box list-disc space-y-3 text-lg md:px-10
            max-w-100" style={{flex:1}}>
            {/* <ul className="list-disc space-y-3 ml-5 text-lg"> */}
                {
                    experience.points.map((p, i) => (
                        <li key={i}>{p}</li>
                    ))
                }
            </ul>
        </div>
    </article>;
  
}

export default ExperienceCard