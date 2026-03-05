"use client"
import { useRef, useEffect, useState } from "react";

const stories = [
  {
    id: 1,
    date: "Aug 22, 2023",
    title: "Artworks That Tell Engaging Stories",
    category: "Technology",
    image: "https://cdn.prod.website-files.com/6776c7fbf90876351b9f33dd/6777f92b37458dfc05db5bf5_image-3.jpg",
  },
  {
    id: 2,
    date: "July 13, 2023",
    title: "Modern Beauty Editorial",
    category: "Design",
    image: "https://cdn.prod.website-files.com/6776c7fbf90876351b9f33dd/6777f99240ff1a1e85d02c98_image-2.jpg",
  },
  {
    id: 3,
    date: "June 02, 2023",
    title: "Minimal Aesthetic Portrait",
    category: "Photography",
    image: "https://cdn.prod.website-files.com/6776c7fbf90876351b9f33dd/6777f9aa43cf6f2336dc0417_image-1.jpg",
  },
  {
    id: 4,
    date: "May 18, 2023",
    title: "Color & Form in Motion",
    category: "Branding",
    image: "https://cdn.prod.website-files.com/6776c7fbf90876351b9f33dd/6777f9f7cb5617c42380cc95_image.jpg",
  },
];

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
            src={story.image}
            alt={story.title}
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
            fontSize: "clamp(0.8rem, 1.8vw, 1.1rem)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            alignSelf: "start",
          }}>
            Visual Storytelling
          </span>

          {/* Top-right: date */}
          <span style={{
            gridRow: 1, gridColumn: 2,
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(0.8rem, 1.8vw, 1.1rem)",
            letterSpacing: "0.05em",
            opacity: 0.75,
            alignSelf: "start",
          }}>
            {story.date}
          </span>

          {/* Bottom-left: big title */}
          <p style={{
            gridRow: 3, gridColumn: 1,
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.6rem, 5vw, 4rem)",
            textTransform: "uppercase",
            letterSpacing: "0.01em",
            lineHeight: 0.92,
            alignSelf: "end",
            maxWidth: "clamp(28ch, 60%, 38ch)",
            transform: hovered ? "translateY(-4px)" : "translateY(0)",
            transition: "transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)",
          }}>
            {story.title}
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
            <span style={{
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
            </span>

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

export default function VisualStory() {
  return (
    <>

      <section id="projects" style={{
        width: "100%",
        background: "black",
        paddingTop: "clamp(4rem, 8vw, 8rem)",
        paddingLeft: "clamp(1rem, 3vw, 1.5rem)",
        paddingRight: "clamp(1rem, 3vw, 1.5rem)",
        paddingBottom: "clamp(6rem, 12vw, 12rem)",
        minHeight: "30vh",
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>

          {/* Section header */}
          <div style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: "3rem",
          }}>
            <h1 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(3.5rem, 6vw, 5rem)",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              color: "white",

            }}>
              Works
            </h1>
            <span style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "1rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "white",
              opacity: 0.4,
            }}>
              {stories.length} Projects
            </span>
          </div>

          {/* Stacking sticky cards */}
          <div style={{ position: "relative" }}>
            {stories.map((story, i) => (
              <Card key={story.id} story={story} index={i} total={stories.length} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
