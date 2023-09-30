import React from 'react'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {SiYourtraveldottv} from 'react-icons/si'

const Search = () => {
  return (
    <div className='max-w-[80vw]  mx-auto grid lg:grid-cols-3 gap-4'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <h1 className='font-bold text-[1rem] md:text-[1.5rem] '>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h1>
        <p className='text-[0.85rem]'>Are you ready to escape to a tropical paradise like no other? Look no further than the Maldives, an archipelago of 26 atolls nestled in the heart of the Indian Ocean. With its white sandy beaches, crystal-clear waters, and overwater bungalows, the Maldives is a dream destination for travelers seeking tranquility, adventure, and unparalleled natural beauty.
        The Maldives is located in the Indian Ocean, southwest of Sri Lanka and India. It's an island nation composed of 26 atolls, each comprising numerous coral islands. These atolls are spread out over a vast area, creating a stunning and diverse underwater landscape.
        While the Maldives is renowned for its luxury resorts, there are also guesthouses and budget-friendly accommodations available on local islands. Resorts range from boutique hideaways to all-inclusive mega-resorts, each offering a unique blend of Maldivian hospitality and world-class amenities.
        Your journey to the Maldives promises a memorable blend of natural beauty, cultural experiences, and relaxation. Whether you're lounging in luxury, exploring local life, or embarking on thrilling adventures, the Maldives is a destination that will capture your heart and leave you with lasting memories of paradise.</p>

        <div className='flex my-4 flex-col md:flex-row gap-7'>
            <div className='flex items-center md:gap-2 gap-14'>
                <RiCustomerService2Fill size={70} className='bg-blue-500 p-2 rounded-sm text-white'/>
                <div className='w-7/12 sm:mx-auto'>
                <h1 className='text-center font-bold'>LEADING SERVICE</h1>
                <p className='text-center md:text-[0.8rem] text-[0.8rem]'>ALL INCLUSIVE COMPANY FOR 20 YEARS IN A ROW</p>
                </div>
            </div>
            <div className='flex items-center md:gap-2 gap-14'>
                <SiYourtraveldottv size={65} className='bg-blue-500 p-2 rounded-sm text-white'/>
                <div className='w-7/12 sm:mx-auto'>
                <h1 className='text-center font-bold'>AUTOMATED BOOKING</h1>
                <p className='text-center md:text-[0.8rem] text-[0.8rem]'>ALL INCLUSIVE COMPANY FOR 20 YEARS IN A ROW</p>
                </div>
            </div>
        </div>
    </div>
      <div  className='right'>
        <div className='border-black border-[0.1rem] text-center p-2 gap-2 flex flex-col'>
            <h1>GET ADDITIONAL 10% OFF </h1>
            <h1>12 HOURS LEFT</h1>
            <button className='bg-black text-white px-3 py-1'>BOOK NOW AND SAFE</button>
        </div>
        <div className='py-2 flex flex-col gap-2'>
        <label for="fname">Destination:</label>
        <input type="text" placeholder='Destination' className='border-black border-[0.1rem] p-1 rounded-sm outline-none' />
        <label for="fname">Check-in:</label>
        <input type="date" placeholder='Destination' className='border-black border-[0.1rem] p-1 rounded-sm outline-none' />
        <label for="fname">Check-out:</label>
        <input type="date" placeholder='Destination' className='border-black border-[0.1rem] p-1 rounded-sm outline-none' />
        <button className='bg-blue-500 text-white p-2 rounded-sm'>Rates & Availabilities</button>
        </div>
      </div>
    </div>
  )
}

export default Search
