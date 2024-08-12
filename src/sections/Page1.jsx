import React, { useEffect, useRef, useState } from 'react';
import Button from '../components/Button.jsx';

const Page1 = () => {
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
      id='accueil'
      ref={sectionRef} 
      className={`page m-0 bg-batiment bg-cover backdrop-brightness-0 flex justify-center items-start pt-72 gap-52 max-lg:pt-48 max-lg:flex-col max-lg:items-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className={`max-lg:hidden ${isVisible ? 'animate-fadeInUp' : ''}`}>
        <p className='text-8xl text-white font-semibold'>EURL <br /></p>
        <p className='text-gold font-thin text-8xl mt-10'>ALBAGEC</p>
      </div>

      <div className={`flex flex-col items-center w-1/3 bg-bluebg bg-opacity-40 px-4 py-16 gap-10 max-lg:bg-transparent max-lg:w-3/4 max-lg:px-8 transition-transform duration-1000 ${isVisible ? 'animate-fadeInUp delay-500' : ''}`}>
        <p className="text-white text-xl">
          La GMDI a été crée par Mr HAMMA Allatif en tant que personne moral, un ingénieur d’état en génie mécanique, ayant bénéficié d’une bonne expérience professionnelle durant plusieurs années au sein des sociétés STULZ, ALGER ENGINS, ATLAS COPCO et DIDAS, ainsi que dans d’autres entreprises.
        </p>
        <Button text='contactez-nous' color="white" bordercolor="white" bgcolor="bluebg"></Button>
      </div>
    </div>
  );
}

export default Page1;
