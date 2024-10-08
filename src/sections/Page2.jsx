import React, { useState, useEffect, useRef } from 'react';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.jpg';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const images = [image1, image2, image3, image4];

const Page2 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

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
      id='Apropos' 
      ref={sectionRef}
      className={`page bg-white text-black min-h-screen h-screen flex justify-center items-center gap-32 max-lg:gap-5 max-lg:flex-col max-lg:items-center relative transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <button 
        onClick={prevImage} 
        className='absolute left-16 text-3xl text-bluebg max-lg:left-2 hover:text-gold transition-colors max-lg:hidden'>
        <FaArrowLeft /> 
      </button>
      
      <div className={`w-1/3 pt-32 max-lg:w-3/4 ${isVisible ? 'animate-slideIn' : ''}`}>
        <p className='text-2xl pb-7 text-black font-bold'>À propos de la société :</p>
        <p>
        L'ALBAGEC a été créée par M. Bouchenak Chabane en tant que personne morale, un ingénieur en génie civil ayant travaillé avec les sociétés SONATRACK, BDL, et TOYOTA, ainsi que dans d’autres entreprises. M. Bouchenak a décidé de se lancer en créant sa propre société, EURL ALBAGEC. Une solide expérience, une connaissance approfondie du produit, et un goût prononcé pour la précision font partie de nos atouts. La satisfaction de notre clientèle reste notre priorité ; nous nous engageons à préserver nos valeurs telles que l’honnêteté, la capacité d’écoute, le dynamisme, et la persévérance. La maintenance et les travaux neufs sont réalisés grâce à notre savoir-faire, et un parc-machines doté de grandes capacités complètes à nos moyens d’usinage et de maintenance.
        </p>
      </div>  

      <div className={`w-1/4 bg-white pt-32 max-lg:hidden ${isVisible ? 'animate-fadeIn' : ''}`}>
        <img 
          src={images[currentImageIndex]} 
          alt={`Image ${currentImageIndex + 1}`} 
          className="transition-opacity duration-1000 shadow-lg"
        />
      </div>
      
      <button 
        onClick={nextImage} 
        className='absolute right-16 text-3xl text-bluebg max-lg:right-2 hover:text-gold transition-colors max-lg:hidden'>
        <FaArrowRight /> 
      </button>
    </div>
  );
}

export default Page2;
