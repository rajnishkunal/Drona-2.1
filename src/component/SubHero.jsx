import React from 'react'
import './SubHero.css'
import Map from '../assets/sub-hero/IndianMap.png'
import Left from '../assets/sub-hero/left.png'
import Right from '../assets/sub-hero/right.png'
import Top from '../assets/sub-hero/top.png'
import { motion } from "framer-motion"
import {slideIn,staggerContainer} from '../utils/motion'
function SubHero() {
  return (
    <div className='w-screen'>
      <motion.div variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false,amount:0.25}} className='relative'>
        <div className=' flex justify-center '>
          <img src={Map} className=''></img>
        </div>
        <div className=' flex justify-center items-end absolute bottom-0'>
          <div  className='w-1/4 translate-x-20 ' >
          <motion.img variants={slideIn('left', 'tween', 0.2,1)} initial="hidden" whileInView="show"   src={Left} ></motion.img>
          </div>
          <div className='w-1/4 z-10 -translate-y-14' >
          <motion.img variants={slideIn('down', 'tween', 0.2,1)} initial="hidden" whileInView="show" src={Top} ></motion.img>
          </div>
          <div  className='w-1/4 -translate-x-20'>
          <motion.img variants={slideIn('right', 'tween', 0.2,1)} initial="hidden" whileInView="show" src={Right}  ></motion.img>
          </div>
          
        </div>
      </motion.div>
    </div>

  )
}

export default SubHero
