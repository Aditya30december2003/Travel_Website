import React from 'react'
import { useState } from 'react'
import { AiOutlineSearch, AiFillYoutube , AiOutlineClose } from "react-icons/ai";
import {CiUser,CiMenuFries} from "react-icons/ci"
import {BsFacebook,BsInstagram,BsPinterest} from "react-icons/bs"
import {FaXTwitter} from "react-icons/fa6"

const Navbar = () => {
  const [nav , setNav]= useState(false)
  const [logo, setLogo] = useState(false)
  const handleNav=()=>{
    setNav(!nav)
    setLogo(!logo)
  }
  return (
    <div>
      <div className='flex justify-between items-center p-3 w-full absolute z-10 text-white'>
        <div onClick={handleNav} className={logo ? 'hidden' : 'block'}>
        <h1  className='text-4xl font-bold '>Aurora.</h1>
        </div>
        <div className='mx-auto'>
            <ul className=' gap-12 cursor-pointer text-sm hidden md:flex mx-1'>
                <li>Home</li>
                <li>Destinations</li>
                <li>Travel</li>
                <li>Views</li>
                <li>Books</li>
            </ul>
        </div>
        
        <div className='px-2 hidden md:flex'>
            <button className='px-4'>
            <AiOutlineSearch className='font-bold'/>
            </button>
            <button>
            <CiUser className='font-bold'/>
            </button>
        </div>
       
      <div onClick={handleNav} className='md:hidden cursor-pointer'>
       <CiMenuFries size={20} className={nav ? 'hidden' : 'block'}/>
      </div>
        
 {/* Mobile-Menu */}
        <div onClick={handleNav} className={nav ? 'absolute text-black left-[0] duration-300 bg-gray-100/90 top-0 z-10 w-full h-screen' : 'absolute left-[-100%]'}>
         <ul>
          <div className='flex justify-between items-center'>
          <h1 className='text-3xl font-bold p-4'>Aurora.</h1>
          <AiOutlineClose className='text-black cursor-pointer font-bold mr-3' size={20} />
          </div>
          <li className='px-3 md:px-[3.2rem] py-4 cursor-pointer '>Destination</li>
          <hr className='bg-black w-11/12 mx-auto border-black'/>
          <li className='px-3 md:px-[3.2rem] py-4 cursor-pointer '>Travel</li>
          <hr className='bg-black w-11/12 mx-auto border-black'/>
          <li className='px-3 md:px-[3.2rem] py-4 cursor-pointer '>Views</li>
          <hr className='bg-black w-11/12 mx-auto border-black'/>
          <li className='px-3 md:px-[3.2rem] py-4 cursor-pointer '>Book</li>
          <hr className='bg-black w-11/12 mx-auto border-black'/>
        <div className='my-8 flex flex-col space-y-6 w-full'>
            <button className='p-2 bg-blue-500  text-white w-10/12 md:w-8/12 rounded-sm mx-auto'>Search</button>
            <button className='p-2 bg-blue-500  text-white w-10/12 md:w-8/12 rounded-sm mx-auto'>Account</button>
          </div>
         </ul>
        
         <div className='flex justify-between w-11/12 mx-auto mt-12 mb-8 cursor-pointer'>
          <BsFacebook  color='blue'  size={20} />
          <FaXTwitter  color='blue' size={20} />
          <BsInstagram color='blue' size={20} />
          <BsPinterest color='blue' size={20}/>
          <AiFillYoutube color='blue' size={20}/>
         </div>

         </div>
 {/* Mobile-Menu end */}
      </div>
    </div>
  )
}

export default Navbar
