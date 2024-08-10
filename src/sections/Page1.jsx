import React from 'react'
import Button from '../components/Button.jsx'

const Page1 = () => {
  return (
    <div id='accueil' className="page m-0 w-full min-h-screen bg-batiment bg-cover backdrop-brightness-0 flex justify-center items-start pt-72 gap-72 max-lg:pt-48 max-lg:flex-col max-lg:items-center">
      <div className='max-lg:hidden'>
        <p className='text-8xl text-white font-semibold'>EURL <br /></p>
        <p className='text-gold font-thin text-8xl mt-10'>ALBAGEC</p>
      </div>

      <div className='flex flex-col items-center w-1/4 bg-bluebg bg-opacity-40 px-4 py-16 gap-10 max-lg:bg-transparent max-lg:w-3/4 max-lg:px-8'>
        <p className="text-white text-xl">
        La GMDI a été crée par Mr HAMMA Allatif en tant que personne moral, un ingénieur d’état en génie mécanique, ayant bénéficié d’une bonne expérience professionnelle durant plusieurs années au sein des sociétés STULZ, ALGER ENGINS, ATLAS COPCO et DIDAS, ainsi que dans d’autres entreprises.
        </p>
        <Button text='contactez-nous' color="white" bordercolor="white" bgcolor="bluebg"></Button>
      </div>
    </div>
  )
}

export default Page1
