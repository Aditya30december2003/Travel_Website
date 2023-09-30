import React from 'react'
import Hero_video from '../assets/Hero_video.mp4'
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
      <video className='w-full h-full object-cover' src={Hero_video}
       autoPlay 
       muted 
       loop 
       />  
       {/* overlay */}
       <div className='absolute w-full h-full bg-gray-700/30 top-0 left-0'></div>

       {/* SearchBar */}

       <div className='absolute w-full top-[35%] items-center text-center  text-white flex flex-col'>
            <h1 className='text-3xl md:text-4xl font-bold'>First Class Travel</h1>
            <h2 className='text-2xl md:text-3xl font-bold'>Top 1% Locations World Wide</h2>
            <div className='flex w-[80%] md:w-[60%] bg-white mt-6 h-10  items-center justify-around rounded-sm mb-2'>
            <input type="text" placeholder='Search Destination' className='mx-auto text-black w-full   outline-none p-1 rounded-sm'/>
            <div className='cursor-pointer text-white bg-blue-700 mr-2 p-2 rounded-sm'>
            <AiOutlineSearch />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
