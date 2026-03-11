"use client"
import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    id: 1,
    quote: "With a monthly production capacity of 150000+ T-shirts, 200+ advanced garment machines, and a structured production tracking system with strict quality control, Varthagam International is your trusted partner for bulk T-shirt orders, private label apparel, and corporate clothing manufacturing.",
    name: "Hemelo Global",
    image: "car.webp",
    fabric:"Large-Scale T-Shirt Manufacturing with Global Export Support"
  },
  {
    id: 2,
    quote: "We specialize in private label T-shirt manufacturing in India, offering end-to-end customization from fabric selection to packaging. Our services include custom T-shirt printing, embroidery, labeling, and premium finishing, giving your brand a complete custom clothing manufacturing solution.",
    name: "Hemelo Global",
    image: "car2.webp",
    fabric:"Full Customization Support for T-Shirt Manufacturing"
  },
  {
    id: 3,
    quote: "We work with Supima cotton, GOTS-certified organic cotton, and Tencel fabrics, ensuring the highest global standards. With an in-house R&D team for fabric composition matching, we provide custom fabric blends, sustainable fabrics, and eco-friendly textile solutions, bringing any fabric idea you imagine to life.",
    name: "Hemelo Global",
    image: "car3.webp",
    fabric:"Certified Fabric Excellence for Premium T-Shirt Manufacturing"
  },
  {
    id: 4,
    quote: "We provide worldwide T-shirt export services, with door-to-door delivery across the globe. All GST, IGST, and export documentation are fully handled by our team, ensuring a seamless clothing export process from India. From production to shipping, we take care of every detail until your goods safely reach your destination.",
    name: "Hemelo Global",
    image: "car4.jpg",
    fabric:"Scalable Global T-Shirt Manufacturing & Delivery"
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next"); // "next" | "prev"
  const [displayed, setDisplayed] = useState(0);
  const timeoutRef = useRef(null);

  const goTo = (index, dir) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setDisplayed(index);
      setCurrent(index);
      setAnimating(false);
    }, 420);
  };

  const next = () => goTo((current + 1) % testimonials.length, "next");
  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length, "prev");

  const t = testimonials[displayed];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Barlow:wght@400;500&display=swap');

        .testimonial-section {
          background: #000000;
          min-height: 60vh;
          display: flex;
          align-items: center;
          padding: 4.5rem 0;
          position: relative;
          overflow: hidden;
          font-family: 'Barlow', sans-serif;
          
        }

        .testimonial-inner {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 4rem;
        }

        /* Header */
        .t-header {
          margin-bottom: 3.5rem;
        }
        .t-header h2 {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: clamp(2rem, 5vw, 2.5rem);
          color:#f0ece3;
          line-height: 1.05;
          max-width: 700px;
          margin-bottom: 0.75rem;
        }
           .t-header h1 {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: clamp(3rem, 5vw, 5rem);
          color:white;
          line-height: 1.05;
          max-width: 700px;
          margin-bottom: 0.75rem;
        }
        .t-header p {
          font-size: 1rem;
          max-width: 300px;
          line-height: 1.5;
          color: gray;
        }

        /* Body: image + quote */
        .t-body {
          display: flex;
          align-items: flex-start;
          gap: 3.5rem;
        }

        /* Image side */
        .t-img-wrap {
          flex: 0 0 auto;
          width: clamp(200px, 24vw, 300px);
        }

        .t-img-frame {
          position: relative;
          overflow: hidden;
          border-radius: 3px;
          aspect-ratio: 3/4;
          background: #1a1816;
        }

        .t-img-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          display: block;
          transition: opacity 0.42s ease, transform 0.5s ease;
        }

        .t-img-frame img.exit-next  { opacity: 0; transform: translateX(-30px) scale(0.97); }
        .t-img-frame img.exit-prev  { opacity: 0; transform: translateX(30px) scale(0.97); }
        .t-img-frame img.idle       { opacity: 1; transform: translateX(0) scale(1); }

        .t-name {
          margin-top: 0.9rem;
          color: rgba(240,236,227,0.55);
          font-size: 0.78rem;
          line-height: 1.45;
        }

        /* Quote side */
        .t-quote-wrap {
          flex: 1;
          display: flex;
          align-items: center;
          min-height: clamp(200px, 26vw, 360px);
          line-clamp: 7;
          opacity: 0.7;
        }

        .t-quote {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: clamp(1.4rem, 2.6vw, 1rem);
          text-transform: uppercase;
          color: #f0ece3;
          line-height: 1.15;
          letter-spacing: 0.02em;
          transition: opacity 0.42s ease, transform 0.42s ease;
          line-clamp: 4;
          display: -webkit-box;
          -webkit-line-clamp: 5;   /* number of lines */
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .t-quote.exit-next { opacity: 0; transform: translateY(20px); }
        .t-quote.exit-prev { opacity: 0; transform: translateY(-20px); }
        .t-quote.idle      { opacity: 1; transform: translateY(0); }

        /* PREV / NEXT buttons — edge of section */
        .nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: #f0ece3;
          color: #1a1816;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: 1rem;
          letter-spacing: 0.05em;
          line-height: 1;
          padding: 1rem 0.9rem;
          border: none;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          z-index: 10;
          user-select: none;
          
        }
        .nav-btn:hover { background: #1a1816; color: #f0ece3; }
        .nav-btn.left  { left: 0; }
        .nav-btn.right { right: 0; }

        /* Progress dots */
        .t-dots {
          display: flex;
          gap: 0.4rem;
          margin-top: 2rem;
        }
        .t-dot {
          width: 20px;
          height: 2px;
          background: rgba(240,236,227,0.2);
          border-radius: 2px;
          cursor: pointer;
          transition: background 0.3s, width 0.3s;
        }
        .t-dot.active {
          background: #f0ece3;
          width: 36px;
        }

        @media (max-width: 1024px) {
          .testimonial-inner { padding: 0 3.5rem; }
          .t-body { gap: 2.5rem; }
          .t-img-wrap { width: clamp(190px, 28vw, 260px); }
          .t-quote-wrap { min-height: clamp(180px, 30vw, 320px); }
        }

        @media (max-width: 768px) {
          .testimonial-inner { padding: 0 2rem; }
          .testimonial-section { padding: 3.5rem 0; min-height: auto; }
          .t-body { gap: 2rem; }
          .t-img-wrap { width: clamp(180px, 40vw, 240px); }
          .nav-btn { padding: 0.8rem 0.7rem; font-size: 0.9rem; }
          .t-quote { font-size: clamp(1.3rem, 3.8vw, 1.8rem); }
        }

        @media (max-width: 640px) {
          .testimonial-inner { padding: 0 1.25rem; }
          .testimonial-section { padding: 3rem 0; }
          .t-body { flex-direction: column; gap: 1.25rem; }
          .t-img-wrap { width: 100%; max-width: 420px; margin: 0 auto; }
          .t-img-frame { aspect-ratio: 4/3; }
          .t-name { text-align: center; }
          .t-quote-wrap { min-height: auto; justify-content: center; }
          .t-quote { text-align: center; font-size: clamp(1.2rem, 5vw, 1.6rem); }
          .t-dots { justify-content: center; }
          .nav-btn { padding: 0.6rem 0.55rem; font-size: 0.8rem; top: 55%; }
        }
      `}</style>

      <div className="testimonial-section flex flex-col items-center justify-center">
         <div className="t-header h1">
        <div className="text-white font-bold uppercase w-full  mb-10  ">
          <h1>Our Core Capabilities</h1>
          </div>
        </div>

        {/* PREV */}
        <button className="nav-btn left " onClick={prev}>PR<br/>EV</button>

        <div className="testimonial-inner">

          {/* Header */}
          <div className="t-header">
            <h2 className="text-white font-bold uppercase w-full text-left">{t.fabric}</h2>
            <p className="text-white font-bold uppercase w-full text-left">Delivering Exceptional T-Shirt Quality Since 2010</p>
          </div>

          {/* Body */}
          <div className="t-body">

            {/* Image */}
            <div className="t-img-wrap">
              <div className="t-img-frame">
                <img
                  src={t.image}
                  alt={t.name}
                  className={animating ? `exit-${direction}` : "idle"}
                />
              </div>
              <p
                className="t-name"
                style={{
                  transition: "opacity 0.42s ease",
                  opacity: animating ? 0 : 1,
                }}
              >
                {t.name}
              </p>
            </div>

            {/* Quote */}
            <div className="t-quote-wrap">
              <blockquote
                className={`t-quote ${animating ? `exit-${direction}` : "idle"}`}
              >
                "{t.quote}"
              </blockquote>
            </div>

          </div>

          {/* Dots */}
          <div className="t-dots">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`t-dot ${i === current ? "active" : ""}`}
                onClick={() => goTo(i, i > current ? "next" : "prev")}
              />
            ))}
          </div>

        </div>

        {/* NEXT */}
        <button className="nav-btn right" onClick={next}>NE<br/>XT</button>

      </div>
    </>
  );
}
