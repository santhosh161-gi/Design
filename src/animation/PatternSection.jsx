"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function PatternSection() {

  const ref = useRef(null);

  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Background moves DOWN
  const bgY = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  // Images move UP
  const imgY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <div ref={ref} className="relative h-[120vh] bg-black overflow-hidden">

      {/* Background Big Text */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 opacity-10 
                   text-[80px] sm:text-[150px] md:text-[250px] lg:text-[400px]
                   text-white font-bold tracking-tighter
                   flex flex-col items-center justify-center
                   select-none pointer-events-none"
      >
        <div>LUXURY</div>
        <div>STORE</div>
        <div>LUXURY</div>
        <div>STORE</div>
      </motion.div>

      {/* Foreground Images */}
      <div className="absolute inset-0 flex flex-row 
                      items-center justify-center gap-6">

        {/* Left Image */}
        <motion.div style={{ y: imgY }} className="relative">
          <img
            src="/person4.webp"
            alt=""
            className="rounded-2xl 
                       w-40 sm:w-52 md:w-72 lg:w-[400px]
                       h-[240px] sm:h-[300px] md:h-[450px] lg:h-[650px]
                       object-cover"
          />

          {/* Text attached to image */}
          <div className="absolute bottom-4 left-4 
                          text-white/80 uppercase font-bold
                          text-xs sm:text-sm md:text-lg lg:text-2xl
                          space-y-1">
            <div>#Photographer</div>
            <div>#Fashion</div>
            <div>#Designer</div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.img
          style={{ y: imgY }}
          src="/person2.webp"
          alt=""
          className="rounded-2xl 
                     w-40 sm:w-52 md:w-72 lg:w-[400px]
                     h-[240px] sm:h-[300px] md:h-[450px] lg:h-[650px]
                     object-cover"
        />

      </div>

    </div>
  );
}