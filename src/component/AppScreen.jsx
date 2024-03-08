import React from 'react'
import Chakra from '../assets/Phone/chakra.png'
import FirstPhone from '../assets/Phone/first-phone.png'
import SecondPhone from '../assets/Phone/second-phone.png'
import ThirdPhone from '../assets/Phone/third-phone.png'
import FourthPhone from '../assets/Phone/fourth-phone.png'
import { motion } from "framer-motion"
import { fadeIn, textContainer, textVariant2 ,slideIn,staggerContainer} from '../utils/motion'
function AppScreen() {
  return (
    <div className='bg-bgColor '>
      {/* <div className=' h-1 w-96 '>
       <img src={Chakra} className=' -z-50  -translate-x-28 -translate-y-28 '></img>
      </div> */}
      {/* //first phone */}
      <motion.div  variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false,amount:0.25}}  
       className='flex justify-around h-screen w-screen '>
        <div className='w-3/5  flex justify-center items-center'>
          <motion.div className='pl-32' variants={slideIn('up', 'tween', 0.2,1)} initial="hidden" whileInView="show">
            <h1 className='font-heroFont text-7xl  p-3 pl-16 gradient-text'>Challenges that excite you.</h1>
            <p className='font-heroFont text-2xl  p-3 pl-16 gradient-text'>Compete 24x7 with other aspirants from across the country in 1v1 or Multiplayer games.</p>
          </motion.div>
        </div>
        <div className='w-2/5 flex items-center '>
          <div className='flex justify-center items-center'>
            <motion.img variants={fadeIn('left', 'tween', 0.2, 1)} initial="hidden" whileInView="show" src={FirstPhone} className='w-1/2'></motion.img>
          </div>
        </div>
      </motion.div>
      {/* Second Phone           */}
      <motion.div variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false,amount:0.25}}  
      className='flex justify-around h-screen w-screen  '>
        <div className='w-3/5 flex justify-center items-center'>
          <motion.div variants={slideIn('up', 'tween', 0.2,1)} initial="hidden" whileInView="show"className='pl-32'>
            <h1 className='font-heroFont text-7xl  p-3 pl-16 gradient-text'>Questions just like your real exam.</h1>
            <p className='font-heroFont text-2xl  p-3 pl-16 gradient-text'>Whether you practise or compete, your question format and syllabus remain within your exam framework.</p>
          </motion.div>
        </div>
        <div className='w-2/5 flex items-center '>
          <div className='flex justify-center items-center'>
            <motion.img variants={fadeIn('left', 'tween', 0.2, 1)} initial="hidden" whileInView="show" src={SecondPhone} className='w-1/2'></motion.img>
          </div>
        </div>
      </motion.div>
      {/* ThirdPhone */}
      <motion.div variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false,amount:0.25}}  
      
       className='flex justify-around h-screen w-screen  '>
        <div className='w-3/5 flex justify-center items-center'>
          <motion.div variants={slideIn('up', 'tween', 0.2,1)} initial="hidden" whileInView="show" className='pl-32'>
            <h1 className='font-heroFont text-7xl  p-3 pl-16 gradient-text'>Strategize your path to victory.</h1>
            <p className='font-heroFont text-2xl  p-3 pl-16 gradient-text'>
              Unleash the power of Drona's premium Play Features and dominate your competition with Expert Answer, Skip Question, and Eliminate Options.
            </p>
          </motion.div>
        </div>
        <div className='w-2/5 flex items-center '>
          <div className='flex justify-center items-center'>
            <motion.img variants={fadeIn('left', 'tween', 0.2, 1)} initial="hidden" whileInView="show" src={ThirdPhone} className='w-1/2'></motion.img>
          </div>
        </div>
      </motion.div>
      {/* FourthPhone */}
      <motion.div variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false,amount:0.25}}  
      className='flex justify-around h-screen w-screen  '>
        <div className='w-3/5 flex justify-center items-center'>
          <motion.div variants={slideIn('up', 'tween', 0.2,1)} initial="hidden" whileInView="show" className='pl-32'>
            <h1 className='font-heroFont text-7xl  p-3 pl-16 gradient-text'>Know where you stand.</h1>
            <p className='font-heroFont text-2xl  p-3 pl-16 gradient-text'>
              Delve into the depths of your gaming prowess deciphering each victory and unraveling every defeat with dramatic flair, letting the rankings and results guide you through your Drona journey.</p>
          </motion.div>
        </div>
        <div className='w-2/5 flex items-center '>
          <div className='flex justify-center items-center'>
            <motion.img variants={fadeIn('left', 'tween', 0.2, 1)} initial="hidden" whileInView="show" src={FourthPhone} className='w-1/2'></motion.img>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default AppScreen
