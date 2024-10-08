import React, { useState, useEffect, useRef } from 'react';
import icon1 from '../assets/images/icon1.png';
import icon2 from '../assets/images/icon2.png';
import icon3 from '../assets/images/icon3.png';
import icon4 from '../assets/images/icon4.png';
import { specialite } from '../constants';

const Page3 = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const pageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add class to trigger animation
          pageRef.current.classList.add('animate-fadeIn');
        } else {
          // Remove the class so it can be added again on the next scroll
          pageRef.current.classList.remove('animate-fadeIn');
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (pageRef.current) {
      observer.observe(pageRef.current);
    }

    return () => {
      if (pageRef.current) {
        observer.unobserve(pageRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={pageRef}
      className='page min-h-screen flex flex-col justify-center items-center gap-10 bg-gray-200 bg-opacity-80 opacity-0'
    >
      <div className='bg-white shadow-lg rounded-lg p-10 flex flex-col justify-center items-center w-3/4'>
        <div className='flex flex-col gap-10 w-full text-center mb-10'>
          <p className='text-3xl font-bold text-gray-800'>
            {specialite[selectedIndex].href.replace('#', '')}
          </p>
          <p>{specialite[selectedIndex].content}</p>
        </div>
        <div className='flex justify-center gap-20 max-lg:hidden'>
          <img
            src={icon1}
            alt="Icon 1"
            className={`w-16 h-16 cursor-pointer hover:scale-150 transition-transform ${
              selectedIndex === 0 ? 'transform scale-125' : ''
            }`}
            onClick={() => setSelectedIndex(0)}
          />
          <img
            src={icon2}
            alt="Icon 2"
            className={`w-16 h-16 cursor-pointer hover:scale-150 transition-transform ${
              selectedIndex === 1 ? 'transform scale-125' : ''
            }`}
            onClick={() => setSelectedIndex(1)}
          />
          <img
            src={icon3}
            alt="Icon 3"
            className={`w-16 h-16 cursor-pointer hover:scale-150 transition-transform ${
              selectedIndex === 2 ? 'transform scale-125' : ''
            }`}
            onClick={() => setSelectedIndex(2)}
          />
          <img
            src={icon4}
            alt="Icon 4"
            className={`w-14 h-14 cursor-pointer hover:scale-150 transition-transform ${
              selectedIndex === 3 ? 'transform scale-125' : ''
            }`}
            onClick={() => setSelectedIndex(3)}
          />
        </div>
      </div>
    </div>
  );
}

export default Page3;
