import React from 'react'
import './Hero.css'
import heroImg from '../assets/hero-img.png'
function Hero() {
  return (
    <div>
      <h1 className='font-heroFont text-7xl text-center p-3 gradient-text'>India's only real-time</h1>
     
      <h1 className='font-heroFont text-7xl text-center p-3 gradient-text'>educational gaming platform</h1>
      <p className='font-heroFont text-2xl text-center mx-3 my-6'>prepare, practise and compete live with real aspirants from across the nation</p>
      <img src={heroImg} className='w-full h-full object-contain overflow-hidden'></img>
    </div>
  )
}

export default Hero
