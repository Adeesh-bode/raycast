'use client'
import DownloadButton from './DownloadButton'
import { motion } from 'framer-motion';
import {container , item } from '../lib/animation';

// import { Button } from '@components/ui/Moving-border.tsx';
import { FaArrowRight } from "react-icons/fa6";
import { Button } from './ui/Moving-border';


const Hero = () => {
  return (
    <div className='w-full  flex flex-col justify-end items-center  mt-7 gap-48  '>
        <motion.div 
        variants={container} 
        initial="hidden" 
        animate="visible"  
        className='w-1/2 flex flex-col items-center gap-9 mt-64'
      >
        <motion.h1 
          className='text-6xl text-center font-medium' 
          variants={item} 
          
        >
          Your shortcut to everything.
        </motion.h1>
        <motion.h2 
          className='text-xl text-center' 
          variants={item} 
        >
          A collection of powerful productivity tools all within an extendable launcher. Fast, ergonomic and reliable.
        </motion.h2>
      </motion.div> 
        <div className='flex flex-col justify-between items-center gap-5 '>
          <DownloadButton />
          <div className='flex justify-between items-center gap-5 text-neutral-600 text-sm '>
            <span>v1.79.1</span> | 
            <span>macOS 12+</span> |
            <span>Install via homebrew</span>
          </div>
          <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-transparent text-black dark:text-white border-neutral-200 dark:border-slate-800 flex justify-between items-center gap-2 "
          >
            <span>More AI Models | Read more</span>
            <FaArrowRight />
          </Button>
        </div>
    </div>
  )
}

export default Hero