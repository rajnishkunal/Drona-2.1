import {React,lazy} from 'react'
import logo from '../assets/logo.png'
import logoText from '../assets/logo-text.png'


function Navbar() {
  return (
    <div className='flex items-center justify-between px-24 py-8 w-screen flex-wrap'>
      <div className='flex items-center'>
        <div className='w-20 m-5 '><img src={logo} alt='logo' ></img></div>
        <div className='w-32'><img src={logoText} alt='logo-text' ></img></div>
      </div>
      <div>
      <div className='flex items-center'>
      <a href="#story" className='font-heroFont m-2 text-2xl text-navColor space-y-1.5'>Story</a>
      <a href="#story" className='font-heroFont m-2 text-2xl	text-navColor space-y-1.5 '>Contact</a>
      </div>
      </div>
    </div>
  )
}

export default Navbar
