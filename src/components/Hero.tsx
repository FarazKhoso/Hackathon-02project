"use client"
import Image from 'next/image';
import cursor from '../asserts/icon1.png';
import lightning   from '../asserts/icon2.png'
import message  from '../asserts/WhatsApp Image 2024-09-22 at 06.00.18_381fabdf.jpg';
import { motion } from "framer-motion";
import profilepic from '../asserts/mypic.jpg'
import React from 'react'

const Hero = () => {
  return (
    <div className=' py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]'>
      
     <div className='absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2
    
    bg-[radial-gradient(closest-side,#000_80%,#2B1942)]
       text-white' >
        
        <h1>fafas daD</h1>
      </div>
      
      <div className='relative'>
        <div className='text-8xl font-bold text-center'>
            <h1 className='text-[#98B4CE] fon' > Hi, I am</h1>
            <h1 className='text-yellow-400'>Faraz</h1>
        </div>

        <motion.div className='hidden md:block absolute left-[280px] top-[170px]'
        drag>
            <Image
            src={cursor}
            height={170}
            width={190}
            alt='cursor'
            className=''
            draggable="false"
            
            ></Image> 

        </motion.div>
        

        <motion.div className='hidden md:block absolute right-[220px] top-[20px]'
        drag>
            <Image
            src={lightning}
            height={120}
            width={120}
            alt='lightning'
            className=''
            draggable="false"
            
            ></Image> 

        </motion.div>
        
        <p  className='text-center text-2xl max-w-[500px] mx-auto mt-8 text-white/80'>
            I am a Forented developer focused on creating websites that provide the best experience for users.
        </p>

        <Image
            src={profilepic}
           
            alt='profile pic'
            className='h-[300px] w-auto mx-auto rounded-[50%] mt-5 hover:scale-105 transition-all duration-500 hover:shadow-[1px_1px_20px_#0ef,1px_1px_40px_#0ef]'
            draggable="false"
            
            ></Image> 
            </div>
        
    </div>
  )
}

export default Hero