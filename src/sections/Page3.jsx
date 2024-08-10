import React, { useState } from 'react';
import icon1 from '../assets/images/icon1.png';
import icon2 from '../assets/images/icon2.png';
import icon3 from '../assets/images/icon3.png';
import icon4 from '../assets/images/icon4.png';
import { specialite } from '../constants';

const Page3 = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className='page min-h-screen flex flex-col justify-center items-center gap-10 bg-gray-200 bg-opacity-80 p-4'>
      <div className='bg-white shadow-lg rounded-lg p-10 flex flex-col justify-center items-center w-full max-w-4xl max-sm:p-5'>
        <div className='flex flex-col gap-10 w-full text-center mb-10'>
          <p className='text-3xl font-bold text-gray-800 max-sm:text-2xl'>{specialite[selectedIndex].href.replace('#', '')}</p>
          <p className='max-sm:text-sm'>{specialite[selectedIndex].content}</p>
        </div>
        <div className='flex justify-center gap-20 max-lg:gap-10 max-lg:flex-wrap'>
          <img
            src={icon1}
            alt="Icon 1"
            className={`w-16 h-16 cursor-pointer hover:scale-150 transition-transform max-sm:w-12 max-sm:h-12 ${selectedIndex === 0 ? 'transform scale-125' : ''}`}
            onClick={() => setSelectedIndex(0)}
          />
          <img
            src={icon2}
            alt="Icon 2"
            className={`w-16 h-16 cursor-pointer hover:scale-150 transition-transform max-sm:w-12 max-sm:h-12 ${selectedIndex === 1 ? 'transform scale-125' : ''}`}
            onClick={() => setSelectedIndex(1)}
          />
          <img
            src={icon3}
            alt="Icon 3"
            className={`w-16 h-16 cursor-pointer hover:scale-150 transition-transform max-sm:w-12 max-sm:h-12 ${selectedIndex === 2 ? 'transform scale-125' : ''}`}
            onClick={() => setSelectedIndex(2)}
          />
          <img
            src={icon4}
            alt="Icon 4"
            className={`w-14 h-14 cursor-pointer hover:scale-150 transition-transform max-sm:w-12 max-sm:h-12 ${selectedIndex === 3 ? 'transform scale-125' : ''}`}
            onClick={() => setSelectedIndex(3)}
          />
        </div>
      </div>
    </div>
  );
}

export default Page3;
