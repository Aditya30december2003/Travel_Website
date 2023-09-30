import React from 'react'

const Destinations = () => {
  return (
    <div className='max-w-[80vw]  mx-auto py-20'>
      <div className='items-center text-center'>
        <h1 className='text-[2.2rem] font-bold'>All-Inclusive Resorts</h1>
        <h2>On Maldives Best Beaches</h2>

       {/* images */}
       <div className='grid md:grid-cols-5 grid-rows-none gap-2 md:gap-4 my-10'>
        <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2  rounded-sm'src="https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <img className='w-full h-full object-cover rounded-sm'src="https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <img className='w-full h-full object-cover rounded-sm'src="https://images.pexels.com/photos/3601426/pexels-photo-3601426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <img className='w-full h-full object-cover rounded-sm'src="https://images.pexels.com/photos/1024981/pexels-photo-1024981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <img className='w-full h-full object-cover rounded-sm'src="https://images.pexels.com/photos/1320679/pexels-photo-1320679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
       </div>
      </div>
    </div>
  )
}

export default Destinations
