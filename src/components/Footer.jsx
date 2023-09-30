import React from 'react'
import {AiFillYoutube} from "react-icons/ai";
import {BsFacebook,BsInstagram,BsPinterest} from "react-icons/bs"
import {FaXTwitter} from "react-icons/fa6"

const Footer = () => {
  return (
    <div>
      <div className='bg-gray-200 w-full flex flex-row justify-between py-12 px-6 items-center'>
        <div>
            <ul className='flex flex-col gap-6'>
                <h1 className='text-2xl md:text-3xl font-bold'>Aurora.</h1>
                <li  className='text-[0.86rem] md:text-xl cursor-pointer'>About</li>
                <li  className='text-[0.86rem] md:text-xl cursor-pointer'>Partenerships</li>
                <li  className='text-[0.86rem] md:text-xl cursor-pointer'>Careers</li>
                <li className='text-[0.86rem] md:text-xl cursor-pointer'>Newsroom</li>
                <li className='text-[0.86rem] md:text-xl cursor-pointer'>Advertisig</li>
            </ul>
        </div>
        <div>

        </div>
        <div>Made By Aditya Jain</div>
      </div>
    </div>
  )
}

export default Footer
