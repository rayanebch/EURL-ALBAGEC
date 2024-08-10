import React from 'react'
import map from '../assets/images/map.png';
import telephone from '../assets/images/telephone.png'
import mark from '../assets/images/gridicons_location.png'

const Page4 = () => {
  return (
    <div id='contact' className='page bg-contact bg-cover min-h-screen flex items-center justify-center p-4'>
      <div className='bg-bluebg bg-opacity-40 p-10 px-20 shadow-lg flex flex-col justify-center items-center gap-10 mt-10 w-full max-w-4xl max-sm:px-5 max-sm:py-8'>
        <p className='text-gold text-4xl font-bold max-sm:text-2xl'>CONTACTEZ-NOUS</p>
        <div className='flex justify-center gap-36 max-lg:flex-col max-lg:gap-5 max-sm:gap-3'>
          <div className='flex flex-col gap-5 max-w-96 max-sm:items-center'>
            <img 
              src={map}
              className="max-lg:hidden"
              alt="Map"
            />
            <div className='flex items-center gap-4'>
              <img 
                src={telephone}
                alt="Telephone"
              />
              <p className='text-xl text-white max-sm:text-lg'>0778935906</p>
            </div>
            <div className='flex items-center gap-4'>
              <img 
                src={mark}
                alt="Location"
              />
              <p className='text-xl text-white max-sm:text-lg'>Baraki Alger</p>
            </div>
          </div>
          <div className='w-fit flex flex-col gap-4 max-sm:items-center'>
            <p className='text-black font-semibold text-xl max-sm:text-lg'>Gmail :</p>
            <p className='text-white max-sm:text-lg'>Albagec26@gmail.com</p>
            <p className='text-black font-semibold text-xl max-sm:text-lg'>Whatsapp :</p>
            <p className='text-white max-sm:text-lg'>0778935906</p>
            <p className='text-black font-semibold text-xl max-sm:text-lg'>Facebook :</p>
            <p className='text-white max-sm:text-lg'>Alba Geca</p>
            <p className='text-black font-semibold text-xl max-sm:text-lg'>TikTok :</p>
            <p className='text-white max-sm:text-lg'>Albagec</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page4;
