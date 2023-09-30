import React from 'react'

const Selects = () => {
  return (
    <div className='max-w-[80vw] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

        <div>
        <p className='absolute text-white font-bold text-xl left-30 top-30'>Seychelles</p>
        <img src="https://images.pexels.com/photos/13549341/pexels-photo-13549341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='object-cover md:h-[12.55rem]' alt="" />
        </div>

        <div>
        <p className='absolute text-white font-bold text-xl'>Thailand</p>
        <img src="https://images.pexels.com/photos/472309/pexels-photo-472309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  className='object-cover md:h-[12.55rem]' alt="" />
        </div>

        <div>
        <p className=' text-xl font-bold text-white absolute'>Greece</p>
        <img src="https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='object-cover md:h-[12.55rem]' alt="" />
        </div>

        <div>
        <p className='absolute text-white font-bold text-xl'>Bali</p>
        <img src="https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='object-cover' alt="" />
       </div>

        <div>
        <p className='absolute text-white font-bold text-xl'>The Bahamas</p>
        <img src="https://images.pexels.com/photos/877962/pexels-photo-877962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='object-cover ' alt="" />
        </div>

        <div className=''>
        <p className='absolute text-white font-bold text-xl'>Australia</p>
        <img src="https://images.pexels.com/photos/2607832/pexels-photo-2607832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='object-cover' alt="" />
       </div>

    </div>
  )
}

export default Selects
