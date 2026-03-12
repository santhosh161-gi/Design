"use client"

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Textscroll from "../animation/Textscroll";
import Button from "../animation/Button";



const stories=[
  {
    id:1,
    title:"Bio Wash",
    cont:"Bio wash, also known as enzyme wash, uses natural enzymes to remove excess fibers and fuzz from fabric, resulting in a smoother, softer surface. ",
    img:"/fabric01.jpg",
  },
  {
    id:2,
    title:"Silicon Wash",
    cont:"Silicon wash takes fabric softness to the next level by applying silicone-based chemicals during the washing process",
    img:"/fabric02.jpg",
  },
  {
    id:3,
    title:"Pre-Shrinkage Wash",
    cont:"Pre-shrinkage wash is applied to fabrics before they are cut and sewn, minimizing the risk of shrinkage during consumer washes.",
    img:"/fabric03.jpg",
  },
  {
    id:4,
    title:"Mercerization",
    cont:"Mercerization transforms cotton fabrics or threads by treating them with a caustic soda solution, which swells the fibers to create a smooth, shiny surface.",
    img:"/fabric04.jpg",                                                                                            
  },
  {
    id:5,
    title:" Acid Wash",
    cont:"Acid wash gives a distinctive faded, distressed look by washing the fabric with chlorine-soaked pumice stones.",
    img:"/fabric05.jpg",
  },
  {
    id:6,
    title:"Perfume Wash",
    cont:"Perfume wash infuses garments with a lasting fragrance, enhancing the sensory experience while softening the fabric.",
    img:"/fabric06.jpg",
  },
  {
    id:7,
    title:"Antimicrobial Wash",
    cont:"Antimicrobial wash treats fabrics with agents that inhibit the growth of bacteria, fungi, and microbes, keeping the material fresher for longer. ",
    img:"/fabric07.jpg",
  },
  {
    id:8,
    title:"Stain Repellent Wash",
    cont:"Stain repellent wash creates a protective barrier on fabrics, preventing liquids and stains from penetrating the fibers. ",
    img:"/fabric08.jpg",
  },
  {
    id:9,
    title:"Tie-Dye",
    cont:"Tie-dye uses a creative dyeing technique where fabric is twisted, folded, or tied before applying dye, resulting in vibrant, unique patterns.",
    img:"/fabric09.jpg",
  },
  {
    id:10,
    title:"Cold Pigment Wash",
    cont:"Cold pigment wash achieves a soft, faded, vintage look by using cold water and pigments to slightly distress the fabric.",
    img:"/fabric10.jpg",
  },
  {
    id:11,
    title:"Burn Out Wash",
    cont:"Burn out wash employs chemicals to dissolve specific fibers, leaving behind sheer or semi-transparent patterns.",
    img:"/fabric11.jpg",
  },
  {
    id:12,
    title:"Peach Finishing",
    cont:"Peach finishing, also known as sueding, lightly abrades the fabric’s surface to produce a velvety, peach-like texture.",
    img:"/fabric12.jpg",
  },
  {
    id:13,
    title:"Distressing Wash",
    cont:"Distressing wash intentionally ages fabrics, especially denim, using abrasion, chemical washes, and enzyme treatments to create a faded, frayed look. ",
    img:"/fabric13.jpg",
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

  const stickyTop = `calc(clamp(70px, 12vw, 130px) + ${index * 14}px)`;

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
          height: "clamp(300px,65vh,580px)",
          background: "#111",
          width: "clamp(320px,90vw,900px)",
          margin: "0 auto",
        }}
      >

        {/* IMAGE */}
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

        {/* overlay */}
        <div style={{
          position:"absolute",
          inset:0,
          background:"rgba(70,100,115,0.2)"
        }}/>

        {/* CONTENT */}
        <div style={{
          position:"absolute",
          inset:0,
          padding:"clamp(1rem,3vw,2rem)",
          display:"grid",
          gridTemplateRows:"auto 1fr auto",
          gridTemplateColumns:"1fr auto",
          color:"#f0ece3"
        }}>

          <span style={{
            gridRow:1,
            gridColumn:1,
            fontWeight:700,
            fontSize:"clamp(1rem,2vw,2rem)",
            textTransform:"uppercase",
            letterSpacing:"0.1em"
          }}>
            {story.title}
          </span>

          <p style={{
            gridRow:3,
            gridColumn:1,
            fontSize:"clamp(0.9rem,2.2vw,1.1rem)",
            lineHeight:1.4,
            maxWidth:"90%",
            alignSelf:"end",
            transform: hovered ? "translateY(-4px)" : "translateY(0)",
            transition:"0.5s"
          }}>
            {story.cont}
          </p>

          <div style={{
            gridRow:3,
            gridColumn:2,
            alignSelf:"end"
          }}>
            <div style={{
              width:"2.2rem",
              height:"2.2rem",
              border:"1.5px solid rgba(240,236,227,0.45)",
              borderRadius:"50%",
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              fontSize:"0.9rem",
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateY(0)" : "translateY(8px)",
              transition:"0.4s"
            }}>
              ↗
            </div>
          </div>

        </div>

        {/* INDEX */}
        <div style={{
          position:"absolute",
          top:"clamp(1rem,3vw,2rem)",
          left:"50%",
          transform:"translateX(-50%)",
          fontSize:"0.7rem",
          letterSpacing:"0.25em",
          color:"rgba(240,236,227,0.35)"
        }}>
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>

      </div>
    </div>
  );
}

export default function FabricFinish (){

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='bg-black'>

      {/* HERO */}
      <div className='flex items-center justify-center min-h-[100vh]'>

        <div className="flex flex-col lg:flex-row items-center justify-center px-4 md:px-10 pt-24 lg:pt-32 gap-8">

          {/* TEXT */}
          <motion.div
            initial={{ opacity:0, x:-200 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.8 }}
            className="max-w-[800px] text-left"
          >

            <p className="text-white text-[28px] sm:text-[30px] md:text-[40px] lg:text-[60px] font-semibold uppercase">
             Fabric Finishing Techniques for Premium Apparel
            </p>

            <p className="text-white opacity-50 mt-4 text-[13px] sm:text-[15px] md:text-[16px] lg:text-[18px] uppercase leading-relaxed">
           At Hemelo Cotton Global, we specialize in advanced fabric finishing techniques that enhance the quality, comfort, and aesthetic appeal of textiles. Our processes are designed to meet the needs of custom T-shirt printing and apparel manufacturing, ensuring your brand’s products are durable, stylish, and tailored to perfection.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">

              <p className="bg-white text-black px-8 py-3 uppercase text-sm font-bold  cursor-pointer hover:bg-black hover:text-white transition-all duration-300">
                Talk to Sales Expert
              </p>

              <p className="bg-white text-black px-8 py-3 uppercase text-sm font-bold cursor-pointer hover:bg-black hover:text-white transition-all duration-300">  
                Get Sample
              </p>

            </div>

             {/* <div className="pt-5 lg:pt-10 sm:pt-5 md:px-5">
                        <a className="" href="/">
                          <Button/>
                        </a>
            </div> */}

          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity:0, y:180 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:1 }}
            className="w-full flex justify-center"
          >
            <img
              src="/hero.jpg"
              alt="hero"
              className="w-full max-w-[380px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[550px] h-auto lg:h-[650px] object-cover rounded-xl"
            />
          </motion.div>

        </div>
      </div>

      <Textscroll/>

      {/* STACK CARDS */}
      <div style={{position:"relative"}}>
        {stories.map((story,i)=>(
          <Card key={story.id} story={story} index={i} total={stories.length}/>
        ))}
      </div>

    </div>
  )
}