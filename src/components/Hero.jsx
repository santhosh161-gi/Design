import React from 'react'
import { motion } from "framer-motion";
import Button from '../animation/Button';
import TextScroll from '../animation/Textscroll';



function Hero  (){
  return (
    <div className='bg-black'>
      <div className='flex items-center justify-center h-[90vh]'>
     <div className="flex flex-col lg:flex-row items-center justify-center bg-black px-4 md:px-10 pt-30 lg:pt-32 gap-10">

      {/* TEXT SECTION */}
      <motion.div
        initial={{ opacity: 0, x: -200 }}   // left → right
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-[800px] text-left"
      >
        <p className="text-white opacity-90 text-[22px] sm:text-[28px] md:text-[36px] lg:text-[45px] font-semibold uppercase leading-snug">
          Enterprise-Grade Premium T-Shirt Manufacturer in India – Trusted by
          200+ Global Brands
        </p>

        <p className="text-white opacity-50 mt-4 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] uppercase leading-relaxed">
         Hemelo Cotton Global is your strategic partner for large-scale,
          premium T-shirt manufacturing in India. We specialize in custom
          T-shirt production, private label apparel, bulk orders, and
          corporate clothing solutions. Trusted by Fortune 500 companies,
          global organizations, and thousands of clothing brands across
          20 countries.
        </p>
        <h2 className="text-white opacity-90 text-[22px] sm:text-[28px] md:text-[36px] lg:text-[45px] font-semibold uppercase leading-snug mt-8">
          who are you?
        </h2>
        <div className="flex flex-row  sm:flex-row md:flex-row lg:flex-row gap-4 mt-4  items-start ">

            <p className="bg-white text-black hover:text-white hover:bg-white/50 
                               px-8 py-3 uppercase text-sm font-bold 
                                transition-all duration-300 border-none">
            Existing Company
            </p>

            <p className="bg-white text-black hover:text-white hover:bg-white/50 
                               px-8 py-3 uppercase text-sm font-bold 
                              transition-all duration-300 border-none">
             Startup Brand
            </p>

          </div>

      </motion.div>

      {/* IMAGE SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 180 }}   // bottom → top
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full flex justify-center"
      >
        <img
          src="/hero.jpg"
          alt="hero"
          className="w-full max-w-[420px] md:max-w-[500px] lg:max-w-[550px] h-auto lg:h-[700px] object-cover rounded-xl"
        />
      </motion.div>

     </div>
     </div>

<div>
  <TextScroll />
</div>
  <div className=" px-4 md:px-10 md:ml-10">
  <div className="bg-black min-h-screen px-6 md:px-12 lg:px-24 py-10 md:py-20 lg:py-30">

    {/* Responsive Flex */}
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

      {/* LEFT TEXT */}
      <div className="flex-1 uppercase font-extrabold 
                      text-[20px] md:text-[40px] lg:text-[55px] 
                      leading-[1.3] text-white/50 ">

        {[
          "THE TWIN TO YOUR SKIN",
          "We Manufacture - ",
          "Everything You Need,",
          "All in One Place."
        ].map((text, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="hover:text-white transition-colors duration-300  line-clamp-2 md:line-clamp-4 lg:line-clamp-5 sm:line-clamp-2"
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
                        uppercase leading-relaxed tracking-wide line-clamp-5">
            From basics to fashion-forward fits, Hemelo Cotton manufactures a wide range of premium-quality apparel. Whether you’re launching a streetwear brand, building a corporate uniform line, or stocking up for an event — we’ve got you covered. If it’s made from fabric, we can make it for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">

            <p className="bg-white text-black hover:text-white hover:bg-white/50 
                               px-8 py-3 uppercase text-sm font-bold 
                                transition-all duration-300 border-none">
             Talk to Sales Expert
            </p>

            <p className="bg-white text-black hover:text-white hover:bg-white/50 
                               px-8 py-3 uppercase text-sm font-bold 
                              transition-all duration-300 border-none">
              Get Sample →
            </p>

          </div>
        </motion.div>

      </div>

    </div>
  </div>
</div>
       
       
</div>
);
}
export default Hero;
