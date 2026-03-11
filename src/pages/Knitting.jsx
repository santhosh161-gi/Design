"use client"

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Textscroll from "../animation/Textscroll";

const stories=[
  {
    id:1,
    title:"Single Jersey",
    cont:"Single jersey knit is a versatile and widely used fabric produced on a single-needle bed machine, resulting in a lightweight and stretchy material.",
    img:"/knitting01.jpg",
  },
  {
    id:2,
    title:"Interlock",
    cont:"Interlock knit fabric is crafted through a double-knit construction, creating a smooth surface on both sides. Thicker and more stable than single jersey, it boasts superior stretch and recovery properties.",
    img:"/knitting02.jpg",
  },
  {
    id:3,
    title:"Loop Knit",
    cont:"Loop knitting produces a textured fabric with a soft, inviting hand feel by incorporating loops on the fabric surface.",
    img:"/knitting03.jpg",
  },
  {
    id:4,
    title:"Piqué",
    cont:"Piqué knit is distinguished by its raised, textured patterns, often resembling a waffle or honeycomb design.",
    img:"/knitting04.jpg",
  },
  {
    id:5,
    title:"Drop Needle",
    cont:"Drop needle knit employs a technique where specific needles are skipped in certain rows, creating vertical lines or textured patterns with distinctive gaps",
    img:"/knitting05.jpg",
  },
  {
    id:6,
    title:"Waffle",
    cont:"Waffle knit fabric is characterized by its grid-like texture, achieved through a combination of knit and purl stitches",
    img:"/knitting06.jpg",
  },
  {
    id:7,
    title:"Purl Knit",
    cont:"Purl knitting involves looping yarn through the backa back of the previous stitch, producing a textured, raised surface on the front of the fabric.",
    img:"/knitting07.jpg",
  },
  {
    id:8,
    title:"Ottoman",
    cont:"Ottoman fabric is a robust, heavy textile known for its ribbed texture, created through a tightly woven structure. ",
    img:"/knitting08.jpg",
  },
  {
    id:9,
    title:"Popcorn",
    cont:"Popcorn knitting is a distinctive technique that creates small, raised, bobble-like shapes on the fabric surface, resembling popcorn.",
    img:"/knitting09.jpg",
  },
  {
    id:10,
    title:"Jacquard",
    cont:"Jacquard knitting enables the creation of intricate patterns and designs woven directly into the fabric during the knitting process,.Batch orders or custom designs",
    img:"/knitting10.jpg",
  }
]
function useScrollProgress(ref) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const winH = window.innerHeight;
      // 0 = just entered viewport bottom, 1 = just left viewport top
      const p = 1 - (rect.bottom / (winH + rect.height));
      setProgress(Math.min(1, Math.max(0, p)));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [ref]);

  return progress;
}
function Card({ story, index, total }) {
  const ref = useRef(null);
  const progress = useScrollProgress(ref);
  const [hovered, setHovered] = useState(false);
 
  const stickyTop = `calc(clamp(64px, 10vw, 120px) + ${index * 16}px)`;

  const scale = 1 - (progress * 0.06);
  const opacity = progress > 0.85 ? 1 - ((progress - 0.85) / 0.15) : 1;
  const imgY = progress * 80;

  return (
    <div
      ref={ref}
      style={{
        position: "sticky",
        top: stickyTop,
        zIndex: index + 1,
        marginBottom: index === total - 1 ? 0 : "6px",
      }}
    >
      <div
      //  onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          transform: `scale(${scale})`,
          opacity,
          transition: "transform 0.1s linear, opacity 0.1s linear",
          transformOrigin: "top center",
          borderRadius: "14px",
          overflow: "hidden",
          position: "relative",
          cursor: "pointer",
          boxShadow: "0 30px 80px rgba(36, 37, 37, 0.35)",
          height: "clamp(340px, 55vh, 580px)",
          background: "#111",
          width: "50%",
          margin: "0 auto",
        }}
      >
        {/* Parallax image */}
        <div
          style={{
            position: "absolute",
            inset: "-15% 0",
            overflow: "hidden",
          }}
        >
          <img
            src={story.img}
            alt={story.cont}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: `translateY(${imgY}px) scale(${hovered ? 1.07 : 1})`,
              transition: hovered
                ? "transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)"
                : "transform 0.1s linear",
              filter: `brightness(${hovered ? 0.55 : 0.7})`,
            }}
          />
        </div>

        {/* Blue-grey tint */}
        <div style={{
          position: "absolute", inset: 0,
          background: "rgba(70,100,115,0.2)",
          pointerEvents: "none",
        }} />

        {/* Content overlay */}
        <div style={{
          position: "absolute", inset: 0,
          padding: "clamp(1.2rem, 3vw, 2rem)",
          display: "grid",
          gridTemplateRows: "auto 1fr auto",
          gridTemplateColumns: "1fr auto",
          color: "#f0ece3",
        }}>

          {/* Top-left: title */}
          <span style={{
            gridRow: 1, gridColumn: 1,
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(0.8rem, 1.8vw, 2rem)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            alignSelf: "start",
          }}>
            {story.title}
          </span>

          {/* Top-right: date */}
          {/* <span style={{
            gridRow: 1, gridColumn: 2,
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(0.8rem, 1.8vw, 1.1rem)",
            letterSpacing: "0.05em",
            opacity: 0.75,
            alignSelf: "start",
          }}>
            {story.date}
          </span> */}

          {/* Bottom-left: big title */}
          <p style={{
            gridRow: 3, gridColumn: 1,
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(1.6rem, 3vw, 1.1rem)",
            textTransform: "uppercase",
            letterSpacing: "0.01em",
            lineHeight: 0.92,
            alignSelf: "end",
            maxWidth: "80%",
            transform: hovered ? "translateY(-4px)" : "translateY(0)",
            transition: "transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)",
          }}>
            {story.cont}
          </p>

          {/* Bottom-right: tag + arrow */}
          <div style={{
            gridRow: 3, gridColumn: 2,
            alignSelf: "end",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "0.5rem",
          }}>
            {/* <span style={{
              border: "1.5px solid rgba(240,236,227,0.55)",
              color: "#f0ece3",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              padding: "0.28rem 0.7rem",
              borderRadius: "2px",
              background: "rgba(240,236,227,0.08)",
              backdropFilter: "blur(6px)",
              fontFamily: "'Barlow', sans-serif",
            }}>
              {story.category}
            </span> */}

            {/* Arrow — fades in on hover */}
            <div style={{
              width: "2.2rem", height: "2.2rem",
              border: "1.5px solid rgba(240,236,227,0.45)",
              borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "0.9rem", color: "#f0ece3",
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateY(0) rotate(0deg)" : "translateY(8px) rotate(-45deg)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
            }}>
              ↗
            </div>
          </div>

        </div>

        {/* Index number */}
        <div style={{
          position: "absolute",
          top: "clamp(1.2rem, 3vw, 2rem)",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: "0.6rem",
          fontWeight: 700,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "rgba(240,236,227,0.35)",
        }}>
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>
      </div>
    </div>
  );
}

export default function Knitting (){
  return (
    <div className='bg-black'>
        <div className='flex items-center justify-center h-[100vh]'>
        <div className="flex flex-col lg:flex-row items-center justify-center  px-4 md:px-10 pt-30 lg:pt-32 gap-10">

          {/* TEXT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -200 }}   // left → right
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-[800px] text-left"
          >
            <p className="text-white opacity-90 text-[28px] sm:text-[28px] md:text-[36px] lg:text-[50px] font-semibold uppercase leading-snug">
              Types of Knitting Structure
            </p>

            <p className="text-white opacity-50 mt-4 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] uppercase leading-relaxed">
            At Varthagam International, we specialize in sourcing and manufacturing premium brand products and merchandise, offering an extensive range of knitting structures to meet your unique needs. Beyond the fabrics detailed below, our expertise ensures that your custom apparel and textiles are crafted with precision and quality, delivering exceptional results for your brand.
            </p>
            {/* <h2 className="text-white opacity-90 text-[22px] sm:text-[28px] md:text-[36px] lg:text-[45px] font-semibold uppercase leading-snug mt-8">
              who are you?
            </h2> */}
            <div className="flex flex-row  sm:flex-row md:flex-row lg:flex-row gap-4 mt-4  items-start ">

                <p className="bg-white text-black hover:text-white hover:bg-white/50 
                                  px-8 py-3 uppercase text-sm font-bold 
                                    transition-all duration-300 border-none">
                Talk to Manufacturing Expert
                </p>

                <p className="bg-white text-black hover:text-white hover:bg-white/50 
                                  px-8 py-3 uppercase text-sm font-bold 
                                  transition-all duration-300 border-none">
                Get Sample
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
          <Textscroll/>
        </div>

        <div>
         <div style={{ position: "relative" }}>
            {stories.map((story, i) => (
              <Card key={story.id} story={story} index={i} total={stories.length} />
            ))}
          </div>
        </div>
    </div>
  )
}


