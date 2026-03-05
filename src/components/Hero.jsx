import React from 'react'
import { motion } from "framer-motion";
import Pattern from '../animation/Pattern';
import Visual from '../animation/Visual';
import Creative from '../animation/Creative';
import Caruosel from '../animation/Caruosel';
import Collections from '../animation/Collections';
import Connect from '../animation/Connect';

function Hero  (){
  return (
    <div className='bg-black'>
      <div className="relative flex items-center justify-between h-[100svh] px-4 md:px-10 overflow-hidden bg-black pt-16 md:pt-20">
        
       <div className='scroll-container opacity-20'>
            <div className='text-[140px] md:text-[360px] lg:text-[600px] flex font-semibold text-white tracking-tighter'>
            <div>L</div>
            <div>U</div>
            <div>X</div>
            <div>U</div>
            <div>R</div>
            <div>Y</div>
            </div>
            <div className='text-[140px] md:text-[360px] lg:text-[600px] flex font-semibold text-white tracking-tighter'>
            <div>S</div>
            <div>T</div>
            <div>O</div>
            <div>R</div>
            <div>E</div>
            </div>

            <div className='text-[140px] md:text-[360px] lg:text-[600px] flex font-semibold text-white tracking-tighter'>
            <div>L</div>
            <div>U</div>
            <div>X</div>
            <div>U</div>
            <div>R</div>
            <div>Y</div>
            </div>
            <div className='text-[140px] md:text-[360px] lg:text-[600px] flex font-semibold text-white tracking-tighter'>
            <div>S</div>
            <div>T</div>
            <div>O</div>
            <div>R</div>
            <div>E</div>
            </div>
       </div>
       <div className='absolute top-50 transform -translate-y-1/2'>
          <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          >
          <p className= 'bg-gradient-to-r from-white/10 to-white bg-clip-text text-transparent opacity-60 text-[50px] md:text-[80px] lg:text-[80px] sm:text-[60px] font-semibold uppercase'>fresh summer</p>
          <p className='text-white opacity-40 text-[20px] md:text-[30px] lg:text-[30px] sm:text-[30px] font-semibold uppercase '>look collection</p>
          </motion.div>
        </div>
      <div className="absolute inset-0 flex flex-col lg:flex-row md:flex-row
                items-center justify-center 
                gap-4 sm:gap-6 md:gap-10 px-4 ">

  {/* LEFT IMAGE WRAPPER (relative for absolute text) */}
  <div className="relative">

    <motion.img
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      src="/model.png"
      alt=""
      className="
               w-full
  max-w-[400px]
  h-auto
  lg:h-[700px]
  object-cover
  mt-20"
    />

    {/* TEXT ABSOLUTE TO FIRST IMAGE */}
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.8 }}
      className="absolute -bottom-25 lg:bottom-30 md:bottom-20 lg:left-80 md:left-50
                 text-white/80 uppercase font-bold
                 text-[40px] sm:text-[30px] md:text-[30px] lg:text-[40px]
                 space-y-2 z-100 border-none"
    >
      <div>#Photographer</div>
      <div>#Fashion</div>
      <div>#Designer</div>
    </motion.div>

  </div>

  {/* RIGHT IMAGE */}
  {/* <motion.img
    initial={{ opacity: 0, y: 200 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 1 }}
    src="/person2.webp"
    alt=""
    className=" rounded-2xl 
               w-60 sm:w-60 md:w-72 lg:w-[400px]
               h-[250px] sm:h-[300px] md:h-[450px] lg:h-[650px]
               object-cover overflow-hidden"
  /> */}

</div>
      </div>  

        <div className=" px-4 md:px-10 md:ml-10">
  <div className="bg-black min-h-screen px-6 md:px-12 lg:px-24 py-2 md:py-20">

    {/* Responsive Flex */}
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

      {/* LEFT TEXT */}
      <div className="flex-1 uppercase font-extrabold 
                      text-[20px] md:text-[40px] lg:text-[55px] 
                      leading-[1.3] text-white/50">

        {[
          "Collaboration is at the",
          "heart of my work. I thrive",
          "in dynamic environments",
          "where creativity flows"
        ].map((text, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="hover:text-white transition-colors duration-300"
          >
            {text}
          </motion.div>
        ))}
      </div>

      {/* CENTER IMAGE */}
      <div className="flex justify-center lg:justify-start">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <img
            src="/person3.webp"
            alt=""
            className="w-56 md:w-72 lg:w-[400px] h-auto"
          />
        </motion.div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex-1 flex flex-col justify-center">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >

          <p className="text-white/50 text-sm md:text-base 
                        uppercase leading-relaxed tracking-wide line-clamp-3">
            We are committed to advising our clients throughout all crucial
            stages of a dispute: we engage with our clients before a dispute
            reaches its peak to evaluate all options before initiating a claim
            or anticipating a potential claim against them.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">

            <button className="bg-white/50 text-black hover:text-white hover:bg-white/70 
                               px-8 py-3 uppercase text-sm font-bold 
                                transition-all duration-300 border-none">
              About Me
            </button>

            <button className="bg-white text-black hover:text-white hover:bg-white/50 
                               px-8 py-3 uppercase text-sm font-bold 
                              transition-all duration-300 border-none">
              Shop Now →
            </button>

          </div>
        </motion.div>

      </div>

    </div>
  </div>
</div>
        <div><hr className='border-white/20 '/></div>

         <div className='w-full overflow-hidden'>
            <Pattern />
        </div>
        <div>
            <Visual />
        </div>
        <div><hr className='border-white/20'/></div>

        <div className='w-full  overflow-hidden'>
            <Pattern/>
        </div>
        <div>
            <Creative/>
        </div>
        <div className="">
            <Caruosel/>
        </div>
        <div><hr className='border-white/20'/></div>
        <div>
            <Collections/>
            <Connect/>
        </div>
       
</div>
);
}
export default Hero;
