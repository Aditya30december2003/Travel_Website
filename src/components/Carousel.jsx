import React , {useState} from 'react'
import {BsArrowLeftSquareFill , BsArrowRightSquareFill} from 'react-icons/bs'

const slideData=[
    {
       url:'https://images.unsplash.com/photo-1600208537475-6cdbf234ca5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
       url:'https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
       url:'https://images.unsplash.com/photo-1621789097689-511e97f099e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
]
const Carousel = () => {
    const [slide , setSlide]=useState(0)
    const length=slideData.length;
    const prevSlide=()=>{
        setSlide(slide === length-1 ? 0 : slide+1)
    }
    const nextSlide=()=>{
        setSlide(slide === 0 ? length-1 : slide-1)
    }
  return (
      <div className='max-w-[80vw] mx-auto px-4 py-16 relative flex justify-center items-center'>
        <BsArrowLeftSquareFill onClick={prevSlide} className='absolute top-[45%] text-3xl text-white cursor-pointer left-5'/>
        < BsArrowRightSquareFill onClick={nextSlide} className='absolute top-[45%] text-3xl text-white cursor-pointer right-5'/>
        {slideData.map((item,index)=>(
            <div className={ index === slide ? 'opacity-100' : 'opacity-0'}> 
               {index=== slide && (<img className='w-full rounded-md' src={item.url} alt=''/>)} 
            </div>
        ))}
      </div>
  );
}

export default Carousel
