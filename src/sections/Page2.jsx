import React, { useState } from 'react';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.jpg';

const images = [image1, image2, image3, image4];

const Page2 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id='Apropos' className='page bg-white text-black min-h-screen h-screen flex justify-center items-center gap-64 max-lg:gap-5 max-lg:flex-col max-lg:items-center relative'>
      <button 
        onClick={prevImage} 
        className='absolute left-16 text-3xl text-bluebg max-lg:left-2'>
        &lt;
      </button>
      
      <div className='w-1/4 pt-32 max-lg:w-3/4'>
        <p className='text-2xl pb-7 text-black font-bold'>À propos de la société :</p>
        <p>La GMDI a été créée par Mr HAMMA Allatif en tant que personne morale, un ingénieur d’état en génie mécanique, ayant bénéficié d’une bonne expérience professionnelle durant plusieurs années au sein des sociétés STULZ, ALGER ENGINS, ATLAS COPCO et DIDAS, ainsi que dans d’autres entreprises. Mr HAMMA a décidé d’être indépendant en fondant sa propre firme EURL GMDI. Bonne expérience, connaissance du produit, goût de la précision, font partie de nos atouts. Et parce que la satisfaction de notre clientèle demeure la devise de la GMDI, nous veillons à préserver nos qualités dont l’honnêteté, la capacité d’écoute, le dynamisme et la persévérance. Maintenance et travaux neufs sont réalisés grâce à notre savoir-faire, et un parc-machines pourvu de grandes capacités complémentaires à nos moyens d’usinage et de maintenance.</p>
      </div>  

      <div className='w-1/4 bg-white pt-32 max-lg:hidden'>
        <img 
          src={images[currentImageIndex]} 
          alt={`Image ${currentImageIndex + 1}`} 
          className="transition-opacity duration-1000 shadow-lg"
        />
      </div>
      
      <button 
        onClick={nextImage} 
        className='absolute right-16 text-3xl text-bluebg max-lg:right-2'>
        &gt;
      </button>
    </div>
  );
}

export default Page2;
