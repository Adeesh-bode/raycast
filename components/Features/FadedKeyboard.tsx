'use client'
import React from 'react';
import { BiArrowToRight } from "react-icons/bi";
import { LuClock } from "react-icons/lu";
import { MdKeyboardCommandKey } from "react-icons/md";
import { PiBugBeetle } from "react-icons/pi";
import { AiOutlineApple } from "react-icons/ai";
import { TbArrowBigUpLine } from "react-icons/tb";

import { motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { container, show } from '../../lib/animation';

const FadedKeyboard = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Animation triggers only once
    threshold: 0.6, // Trigger when 60% in view
  });

  return (
    <motion.div  
      ref={ref} // Attach ref for intersection
      variants={container} 
      initial="hidden" 
      animate={inView ? "visible" : "hidden"} 
      className='flex flex-col justify-center items-center w-full h-full gap-2 '
    >
        {/* first row */}
        <div className=' flex justify-between items-center gap-2'>
            <div className='opacity-5 flex justify-start items-end p-2 border-2  border-neutral-600 bg-neutral-950  rounded-md w-36 h-16 '>
                esc
            </div>
            <div className='opacity-10 flex justify-start items-end p-2 border-2 border-neutral-600 bg-neutral-950 rounded-md w-16 h-16'>
                F1
            </div>
            <div className='opacity-10 flex justify-start items-end p-2 border-2 border-neutral-600 bg-neutral-950 rounded-md w-16 h-16'>
                F2
            </div>
            <div className='opacity-5  flex justify-start items-end p-2 border-2 border-neutral-600 bg-neutral-950 rounded-md w-16 h-16'>
                F3
            </div>
        </div>
        
        {/* second row */}
        <div className=' flex justify-between items-center gap-2 text-xl'>
            <div className='opacity-15 flex flex-col justify-center items-center border-2 border-neutral-600 bg-neutral-950 rounded-md w-20 h-[90px]'>
                <div className=' text-center' >+</div>
                <div className=' text-center align-top flex flex-col justify-start ' >§</div>
            </div>
            <div className='opacity-25 flex flex-col justify-center items-center border-2 border-neutral-600 bg-neutral-950 rounded-md w-20 h-[90px]'>
                <div className=' text-center' >!</div>
                <div className=' text-center ' >1</div>
            </div>
            <div className='opacity-25 flex flex-col justify-center items-center border-2 border-neutral-600 bg-neutral-950 rounded-md w-20 h-[90px]'>
                <div className=' text-center' >@</div>
                <div className=' text-center ' >2</div>
            </div>
            <div className='opacity-25 flex flex-col justify-center items-center border-2 border-neutral-600 bg-neutral-950 rounded-md w-20 h-[90px]'>
                <div className=' text-center' >#</div>
                <div className=' text-center ' >3</div>
            </div>
            <div className='opacity-5 flex flex-col justify-center items-center border-2 border-neutral-600 bg-neutral-950 rounded-md w-20 h-[90px]'>
                <div className=' text-center' >%</div>
                <div className=' text-center ' >4</div>
            </div>
        </div>
            
        {/* third row */}
        <div className=' flex justify-between items-center gap-2 text-2xl'>
            <div className='opacity-25 flex justify-start items-end p-2 border-2  border-neutral-600 bg-neutral-950  rounded-md w-36 h-24 '>
                <BiArrowToRight className='text-neutral-500' />
            </div>
            <motion.div 
              variants={show} 
              className='flex flex-col justify-between items-start p-2 border-2  border-neutral-600 bg-neutral-950  rounded-md w-36 h-24 '
              
            >
                <LuClock className='text-neutral-500' />
                <div className='text-sm text-neutral-700 '>
                    <span className='text-white'>Think. </span> {' '}Think in Milliseconds.
                </div>
            </motion.div>
            <motion.div 
              variants={show} 
              className='flex flex-col justify-between items-start p-2 border-2  border-neutral-600 bg-neutral-950  rounded-md w-40 h-24 '
              
            >
                <MdKeyboardCommandKey className='text-neutral-500' />
                <div className='text-sm text-neutral-700 '>
                    <span className='text-white'>Ergonomic. </span> {' '}Keyboard First.
                </div>
            </motion.div>
            
        </div>
        
        {/* Fourth row */}
        <div className=' flex justify-between items-center gap-2 text-2xl'>
            
            <motion.div 
              variants={show} 
              className='flex flex-col justify-between items-start p-2 border-2  border-neutral-600 bg-neutral-950  rounded-md w-36 h-24 '
              
            >
                <AiOutlineApple className='text-neutral-500' />
                <div className='text-sm text-neutral-700 '>
                    <span className='text-white'>Native. </span> {' '}Pure Performance.
                </div>
            </motion.div>
            <motion.div 
              variants={show} 
              className='flex flex-col justify-between items-start p-2 border-2  border-neutral-600 bg-neutral-950  rounded-md w-40 h-24 '
             
            >
                <PiBugBeetle className='text-neutral-500' />
                <div className='text-sm text-neutral-700 '>
                    <span className='text-white'>Reliable. </span> {' '}99.8% crash-free rate.
                </div>
            </motion.div>
            <div className='opacity-15 flex-center border-2 border-neutral-600 bg-neutral-950 rounded-md w-24 h-24'>
                <div className=' text-center' >S</div>
            </div>
            <div className='opacity-5 flex-center border-2 border-neutral-600 bg-neutral-950 rounded-md w-24 h-24'>
                <div className=' text-center' >D</div>
            </div>
            
        </div>
        
        {/* Fifth row */}
        <div className=' flex justify-between items-center gap-2 text-2xl'>
            <div className='opacity-15 flex justify-start items-end p-2 border-2  border-neutral-600 bg-neutral-950  rounded-md w-36 h-24 '>
                <TbArrowBigUpLine className='text-neutral-500' />
            </div>
            <div className='opacity-10 flex-center border-2 border-neutral-600 bg-neutral-950 rounded-md w-24 h-24'>
                <div className=' text-center' >Z</div>
            </div>
            <div className='opacity-10 flex-center border-2 border-neutral-600 bg-neutral-950 rounded-md w-24 h-24'>
                <div className=' text-center' >X</div>
            </div>
            <div className='opacity-5 flex-center border-2 border-neutral-600 bg-neutral-950 rounded-md w-24 h-24'>
                <div className=' text-center' >C</div>
            </div>
        </div>
    </motion.div>
  );
};

export default FadedKeyboard;
