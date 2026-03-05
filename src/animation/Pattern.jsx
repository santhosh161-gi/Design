import React from 'react'
import { motion } from "framer-motion";

function Pattern  () {
  return (
    <div className='relative'>
       <div className='scroll-container opacity-20 text-[150px] md:text-[220px] lg:text-[500px]'>
            <div className='flex  text-white tracking-tighter'>
            <div>L</div>
            <div>U</div>
            <div>X</div>
            <div>U</div>
            <div>R</div>
            <div>Y</div>
            </div>
            <div className=' flex  text-white tracking-tighter '>
            <div>S</div>
            <div>T</div>
            <div>O</div>
            <div>R</div>
            <div>E</div>
            </div>

            <div className=' flex  text-white tracking-tighter '>
            <div>L</div>
            <div>U</div>
            <div>X</div>
            <div>U</div>
            <div>R</div>
            <div>Y</div>
            </div>
            <div className=' flex  text-white tracking-tighter '>
            <div>S</div>
            <div>T</div>
            <div>O</div>
            <div>R</div>
            <div>E</div>
            </div>
       </div>
       <div className='absolute inset-0 flex items-center justify-center z-10 gap-8 md:gap-16 lg:gap-48 px-4'>
        <motion.div
         initial={{opacity:0,x:-50}}
         whileInView={{opacity:1,x:20}}
         viewport={{once:true, amount:0.4}}  
         transition={{duration:0.5,delay:1}}
        className=''
        >
          <p className='text-white text-sm md:text-2xl lg:text-[30px] font-bold uppercase leading-relaxed text-left md:text-left tracking-wide w-full max-w-[90%] md:max-w-[480px] lg:max-w-[500px] line-clamp-3 md:line-clamp-4 sm:line-clamp-5 lg:line-clamp-6'>Armed with a pen, a sketchpad, and an unhealthy obsession with colorful Post-it notes, Emma unleashes her creative chaos upon the world.</p>
        </motion.div>
        <motion.div
        initial={{opacity:0,x:-50}}
        whileInView={{opacity:1,x:10}}
        viewport={{once:true, amount:1}}  
        transition={{duration:0.5,delay:0.5}}
        className='flex flex-col items-center justify-center '
        >
          <p className='text-white opacity-70 text-xs md:text-sm font-semibold uppercase leading-relaxed text-left md:text-left tracking-wide w-full max-w-[90%] md:max-w-[480px] lg:max-w-[500px]'>branding</p>
          <p className='text-white opacity-70 text-xs md:text-sm font-semibold uppercase leading-relaxed text-left md:text-left tracking-wide w-full max-w-[90%] md:max-w-[480px] lg:max-w-[500px]'>photography</p>
          <p className='text-white opacity-70 text-xs md:text-sm font-semibold uppercase leading-relaxed text-left md:text-left tracking-wide w-full max-w-[90%] md:max-w-[480px] lg:max-w-[500px]'>motion</p>
          <p className='text-white opacity-70 text-xs md:text-sm font-semibold uppercase leading-relaxed text-left md:text-left tracking-wide w-full max-w-[90%] md:max-w-[480px] lg:max-w-[500px]'>web design</p>
        </motion.div>
       </div>
    </div>
  );
}

export default Pattern;
