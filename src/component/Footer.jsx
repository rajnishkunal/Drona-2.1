import React from 'react'
import logoText from '../assets/logo-text.png'
import Facebook from '../assets/Footer/facebook.png'
import Instagram from '../assets/Footer/instagram.png'
import LinkedIn from '../assets/Footer/linkedIn.png'
function Footer() {
  return (
    <div className=''>
      <div className='border border-borderColor mx-20'></div>
      <div className='flex justify-between py-12'>
        <div className='px-20'>
        <img src={logoText} alt='logo-text' className='w-28' ></img>
        <p className='font-heroFont mt-6 text-enquireColor'>For enquiries contact  us on</p>
        <p className='font-heroFont text-emailColor'>hello@drona.app</p>
        </div>
        <div className='flex space-x-5 px-20'>
          <a href='www.google.com'><img className='size-10' src={LinkedIn}></img></a>  
            <a href=''><img className='size-10' src={Facebook}></img></a> 
            <a href=''><img className='size-12' src={Instagram}></img></a>
        </div>
      </div>
      <p className='text-center py-4 text-enquireColor'>© NIRVAR RESEARCH TECHNOLOGIES PRIVATE LIMITED</p>
    </div>
  )
}

export default Footer
