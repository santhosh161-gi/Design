"use client"
import { useState } from "react";

function Connect() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [focused, setFocused] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email && message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
      setMessage("");
    }
  };

  const images = ["/model2.png", "/model3.png", "/model4.png", "/model5.png"];
  const loopImages = [...images, ...images, ...images];

  return (
    <div
      className="flex flex-col lg:flex-row bg-black min-h-screen"
      style={{ fontFamily: "'Arial Black', 'Arial Bold', sans-serif" }}
    >
      {/* ───────── LEFT: CONTACT SECTION ───────── */}
      <div className="w-full lg:w-1/2 flex items-center px-6 lg:px-12 py-16">
        <div className="max-w-[580px] w-full">
          
          <h1
            style={{
              color: "#f0ece3",
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Let's Create Something
            <br />
            Great Together
          </h1>

          <p
            style={{
              color: "#a0998e",
              fontSize: "0.95rem",
              lineHeight: 1.65,
              marginBottom: "32px",
              fontFamily: "Georgia, serif",
              maxWidth: "480px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Ipsum dignissim vitae
            aliquet enim. Nunc sed gravida nec eget vitae duis purus.
          </p>

          {/* Email */}
          <div
            style={{
              border: `1px solid ${focused === "email" ? "#a0998e" : "#4a4744"}`,
              borderRadius: "4px",
              marginBottom: "8px",
              transition: "0.2s",
            }}
          >
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
              style={{
                width: "100%",
                padding: "18px 20px",
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#f0ece3",
                fontSize: "0.95rem",
                fontFamily: "Georgia, serif",
              }}
            />
          </div>

          {/* Message */}
          <div
            style={{
              border: `1px solid ${focused === "message" ? "#a0998e" : "#4a4744"}`,
              borderRadius: "4px",
              position: "relative",
              transition: "0.2s",
            }}
          >
            <textarea
              placeholder="Your Message *"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              rows={8}
              style={{
                width: "100%",
                padding: "18px 20px",
                paddingBottom: "60px",
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#f0ece3",
                fontSize: "0.95rem",
                fontFamily: "Georgia, serif",
                resize: "none",
              }}
            />

            <div style={{ position: "absolute", bottom: "16px", right: "16px" }}>
              <button
                onClick={handleSubmit}
                style={{
                  backgroundColor: submitted ? "#6b8f5e" : "#c8c0b0",
                  color: "#2d2d2d",
                  border: "none",
                  padding: "12px 22px",
                  fontSize: "0.75rem",
                  fontWeight: 900,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  borderRadius: "3px",
                  transition: "0.2s",
                }}
              >
                {submitted ? "SENT ✓" : "CONTACT ME ›"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ───────── RIGHT: MARQUEE SECTION ───────── */}
      <div className="w-full lg:w-[80%] overflow-hidden flex items-center py-10">
        <div className="marquee-track">
          {loopImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              style={{
                height: "clamp(250px, 40vh, 500px)",
                width: "clamp(180px, 25vw, 300px)",
                objectFit: "contain",
                flex: "0 0 auto",
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        .marquee-track {
          display: flex;
          align-items: center;
          gap: 10px;
          animation: marquee-x 18s linear infinite;
        }

        @keyframes marquee-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export default Connect;