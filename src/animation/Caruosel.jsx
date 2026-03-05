"use client"
import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    id: 1,
    quote: "I love how easy it was to personalize Emma to fit my style. The template's flexibility allowed me to highlight my work effortlessly and stand out in my industry.",
    name: "ALEXO Branding, Grace & Daniel - CEO & Cofounder",
    image: "https://cdn.prod.website-files.com/6776c7fbf90876351b9f33b0/6796b199ff8cd7fa1501fd87_Testimonial%20Image%2002.jpg",
  },
  {
    id: 2,
    quote: "Emma helped me showcase my work beautifully! The design is sleek, minimal, and exactly what I needed to make a lasting impression on my clients.",
    name: "ALEXO Branding, Grace & Daniel - CEO & Cofounder",
    image: "https://cdn.prod.website-files.com/6776c7fbf90876351b9f33b0/6796b1999725187acc18de78_Testimonial%20Image%2001.jpg",
  },
  {
    id: 3,
    quote: "Emma gave my portfolio a professional edge that truly reflects my creativity. It's clean, responsive, and has the perfect balance of style and functionality.",
    name: "ALEXO Branding, Grace & Daniel - CEO & Cofounder",
    image: "https://cdn.prod.website-files.com/6776c7fbf90876351b9f33b0/6796b198cf5531d40f092875_Testimonial%20Image%2003.jpg",
  },
  {
    id: 4,
    quote: "The Emma template offers a modern aesthetic with great animations that keep my audience engaged. It's the perfect choice for creatives looking to impress.",
    name: "ALEXO Branding, Grace & Daniel - CEO & Cofounder",
    image: "https://cdn.prod.website-files.com/6776c7fbf90876351b9f33b0/6796b198b773d1b388672154_Testimonial%20Image%2004.jpg",
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
          font-size: clamp(3rem, 5vw, 3rem);
          color:#f0ece3;
          line-height: 1.05;
          max-width: 500px;
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
        }

        .t-quote {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: clamp(1.4rem, 2.6vw, 2.2rem);
          text-transform: uppercase;
          color: #f0ece3;
          line-height: 1.15;
          letter-spacing: 0.02em;
          transition: opacity 0.42s ease, transform 0.42s ease;
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

      <div className="testimonial-section">

        {/* PREV */}
        <button className="nav-btn left" onClick={prev}>PR<br/>EV</button>

        <div className="testimonial-inner">

          {/* Header */}
          <div className="t-header">
            <h2 className="text-white font-bold uppercase">Testimonials from the hearts of our clients!</h2>
            <p>Don't Miss a Moment—Let's Make Memories Together.</p>
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
