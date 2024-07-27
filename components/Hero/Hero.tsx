'use client'
import DownloadButton from '../ui/DownloadButton'
import { motion } from 'framer-motion';
import {container , item } from '../../lib/animation';

// import { Button } from '@components/ui/Moving-border.tsx';
import { FaArrowRight } from "react-icons/fa6";
import { Button } from '../ui/Moving-border';


const Hero = () => {
  const handleVideoEnd = (e) => {
    e.target.pause(); 
  };
  return (
    <div className='w-full  flex flex-col justify-end items-center  mt-7 gap-32 md:gap-48  '>  {/* red-bg  */}
        <div className='absolute top-9 inset-0 z-0 overflow-hidden'>
        <video 
          src='/Effective.mp4' 
          autoPlay 
          muted 
          controls={false} 
          onEnded={(e)=>handleVideoEnd(e)}
          className='w-full h-[450px] object-cover opacity-40' 
        />
      </div>
        <motion.div 
        variants={container} 
        initial="hidden" 
        animate="visible"  
        className='w-4/5 md:w-1/2 flex flex-col items-center gap-9 mt-36 md:mt-80 relative z-10'
      >
        <motion.h1 
          className='text-3xl md:text-6xl text-center font-medium ' 
          variants={item} 
          
        >
          Your shortcut to everything.
        </motion.h1>
        <motion.h2 
          className=' md:text-xl text-center' 
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