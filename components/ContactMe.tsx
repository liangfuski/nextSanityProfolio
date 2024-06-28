"use client"
import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/16/solid'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Props = {}

const ContactMe = (props: Props) => {

  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:tony.f.liang@outlook.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message}`
  }



  return (
    <div 
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row
        max-w-full justify-evenly mx-auto items-center z-20">
          <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            contact me</h3>
        
      <div className="flex flex-col space-y-10 px-10 pt-20">
          <h4 className="text-4xl font-semibold text-center">
            I have got just what you need.{" "}
            <span className="decoration-[#F7AB0A]/50 underline">Let's Talk</span>
          </h4>       

          <div className="space-y-10">
            <div className="flex items-center justify-center space-x-5">
              <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
              <p className="text-2xl">+1(473)799-2147</p>
            </div>

            <div className="flex items-center justify-center space-x-5">
              <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
              <p className="text-2xl">tony.f.liang@outlook.com</p>
            </div>

            <div className="flex items-center justify-center space-x-5">
              <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
              <p className="text-2xl">Markham Canada</p>
            </div>

            <form 
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col md:space-y-2 w-fit mx-auto">
              <div className="flex flex-col md:space-x-2 md:flex-row">
                <input {...register('name')} className="contactInput" type="text" placeholder="Name"/>
                <input {...register('email')} className="contactInput" type="text" placeholder='Email'/>
            </div>
                <input {...register('subject')} className="contactInput" type="text" placeholder="Subject"/>
                <textarea {...register('message')}  className="contactInput" placeholder='Message'/>
                <button type="submit" className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold">Submit</button>
            </form>

          </div>
      </div>
    </div>
  )
}

export default ContactMe