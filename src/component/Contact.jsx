import React from 'react'
import '../component/Contact.css'
function Contact() {
  return (
    <div className='flex justify-center items-center flex-col w-screen h-96'>
      <h1 className='font-heroFont text-7xl text-center p-3 gradient-text'>Join the Drona family</h1>
      <p className='font-heroFont text-2xl text-center mx-3 px-80'>Enter your email to subscribe to our bi-weekly newsletter and get a chance to be one of the first users on our app launch</p>
      <input className='w-1/3 my-10 p-4 rounded-xl ring-4 ring-navColor focus:outline-none ' type='email' placeholder='Enter Your Email'></input>
      <button className='button-gradient text-center px-8 py-1 text-xl text-white font-heroFont rounded-2xl	'>Submit</button>
    </div>
  )
}

export default Contact
