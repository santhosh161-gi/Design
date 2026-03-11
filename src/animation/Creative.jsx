"use client"
import { useState } from "react";

const services = [
  {
    id: "creative",
    label: "Knitting Structure",
    image:
      "/print2.jpg",
  },
  {
    id: "social",
    label: "Fabric Finishing",
    image:
      "/print3.jpg",
  },
  {
    id: "rebranding",
    label: "Customization",
    image:
      "print4.jpg",
  },
 
];

export default function Creative() {
  const [active, setActive] = useState("creative");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&display=swap');

        .creative-section {
          background: black;
          min-height: 50vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(2rem, 6vw, 4rem);
          overflow: hidden;
        }

        .creative-inner {
          display: flex;
          align-items: center;
          gap: clamp(2rem, 6vw, 5rem);
          width: 100%;
          max-width: 1200px;
        }

        .menu {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          flex: 0 0 auto;
        }

        .menu-item {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: clamp(1.4rem, 4vw, 3rem);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          cursor: pointer;
          color: gray;
          line-height: 1;
          transition: color 0.3s ease;
          position: relative;
        }

        .menu-item.active {
          color: white;
        }

        .menu-item::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          height: 4px;
          width: 0;
          background: white;
          transition: width 0.4s ease;
        }

        .menu-item.active::after {
          width: 100%;
        }

        .image-panel {
          flex: 1;
          position: relative;
          overflow: hidden;
          aspect-ratio: 4/3;
          width: 100%;
          max-height: clamp(220px, 40vw, 420px);
          background: #1a1816;
        }

        .image-panel img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transform: scale(1.05);
          transition: opacity 0.6s ease, transform 0.7s ease;
        }

        .image-panel img.visible {
          opacity: 1;
          transform: scale(1);
        }

        .play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 65px;
          height: 65px;
          border: 1.5px solid rgba(255,255,255,0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.3s ease;
          z-index: 2;
        }

        .play-btn:hover {
          background: rgba(255,255,255,0.15);
        }

        .play-btn svg {
          width: 20px;
          height: 20px;
          fill: white;
          margin-left: 3px;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .creative-inner {
            gap: 3rem;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .creative-inner {
            flex-direction: column;
            align-items: flex-start;
            gap: 2rem;
          }

          .menu {
            width: 100%;
          }

          .menu-item {
            font-size: 2rem;
          }

          .image-panel {
            width: 100%;
            max-height: 260px;
          }

          .play-btn {
            width: 55px;
            height: 55px;
          }

          .play-btn svg {
            width: 16px;
            height: 16px;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .menu-item {
            font-size: 1.5rem;
          }

          .creative-section {
            padding: 2rem 1rem;
          }
        }
      `}</style>

      <div id="services" className="creative-section">
        <div className="creative-inner">

          {/* Left Menu */}
          <div className="menu">
            {services.map((s) => (
              <div
                key={s.id}
                className={`menu-item ${active === s.id ? "active" : ""}`}
                onClick={() => setActive(s.id)}
              >
                {s.label}
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div className="image-panel">
            {services.map((s) => (
              <img
                key={s.id}
                src={s.image}
                alt={s.label}
                className={active === s.id ? "visible" : ""}
              />
            ))}

            <div className="play-btn">
              <svg viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
