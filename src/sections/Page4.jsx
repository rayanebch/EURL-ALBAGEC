import React, { useEffect, useRef, useState } from 'react';
import map from '../assets/images/map.png';
import telephone from '../assets/images/telephone.png';
import mark from '../assets/images/gridicons_location.png';

const Page4 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      id='contact' 
      ref={sectionRef} 
      className={`page bg-contact bg-cover min-h-screen flex items-center justify-center p-4 pt-24 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className={`bg-bluebg bg-opacity-40 p-10 px-20 shadow-lg flex flex-col justify-center items-center gap-10 mt-10 max-w-4xl max-sm:pt-20 max-sm:px-5 max-md:px-10 max-sm:gap-5 ${isVisible ? 'animate-slideUp' : ''}`}>
        <p className='text-gold text-4xl font-bold max-sm:text-2xl max-md:text-3xl text-center'>CONTACTEZ-NOUS</p>
        <div className='flex justify-center gap-36 max-lg:flex-col max-lg:gap-5 max-sm:gap-3 max-sm:w-full max-md:gap-8'>
          <div className='flex flex-col gap-5 max-w-96 max-sm:items-center max-sm:w-full max-md:w-3/4'>
            <img 
              src={map}
              className={`max-lg:hidden  w-full object-contain ${isVisible ? 'animate-fadeIn' : ''}`}
              alt="Map"
            />
            <div className='flex items-center gap-4 max-sm:flex-col'>
              <img 
                src={telephone}
                alt="Telephone"
                className='w-8 h-8 max-sm:hidden max-sm:h-6'
              />
              <p className='text-xl text-white max-sm:text-lg text-center'>0778935906</p>
            </div>
            <div className='flex items-center gap-4 max-sm:flex-col'>
              <img 
                src={mark}
                alt="Location"
                className='w-8 h-8 max-sm:hidden max-sm:h-6'
              />
              <p className='text-xl text-white max-sm:text-lg text-center'>Baraki Alger</p>
            </div>
          </div>
          <div className='w-fit flex flex-col gap-4 max-sm:items-center max-sm:w-full max-md:w-3/4'>
            <p className='text-black font-semibold text-xl max-sm:text-lg text-center'>Gmail :</p>
            <p className='text-white max-sm:text-lg text-center'>Albagec26@gmail.com</p>
            <p className='text-black font-semibold text-xl max-sm:text-lg text-center'>Whatsapp :</p>
            <p className='text-white max-sm:text-lg text-center'>0778935906</p>
            <p className='text-black font-semibold text-xl max-sm:text-lg text-center'>Facebook :</p>
            <p className='text-white max-sm:text-lg text-center'>Alba Geca</p>
            <p className='text-black font-semibold text-xl max-sm:text-lg text-center'>TikTok :</p>
            <p className='text-white max-sm:text-lg text-center'>Albagec</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page4;
