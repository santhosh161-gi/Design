import React, { useEffect, useState } from "react";

const FONT = "sans-serif";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = {
    Links: ["Home", "Projects"],
    Template: ["Style Guide", "Licensing", "Instruction", "Change Log"],
    "Social Media": ["Facebook", "Instagram", "Behance", "Unsplash"],
  };

  return (
    <footer
      style={{
        backgroundColor: "black/20",
        fontFamily: FONT,
        padding: isMobile ? "40px 24px 24px" : "60px 80px 32px",
        boxSizing: "border-box",
        width: "100%",
        opacity: 0.8,
      }}
    >
      {/* Columns */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "40px" : "80px",
          marginBottom: "60px",
        }}
      >
        {Object.entries(links).map(([category, items]) => (
          <div key={category} style={{ minWidth: "120px" }}>
            <h3
              style={{
                fontWeight: "800",
                fontSize: isMobile ? "18px" : "22px",
                color: "white",
                marginBottom: "20px",
                marginTop: 0,
              }}
            >
              {category}
            </h3>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {items.map((item) => (
                <li key={item} style={{ marginBottom: "10px" }}>
                  <a
                    href="#"
                    style={{
                      fontSize: isMobile ? "14px" : "14.5px",
                      color: "white",
                      textDecoration: "none",
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) => (e.target.style.opacity = "0.5")}
                    onMouseLeave={(e) => (e.target.style.opacity = "1")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider */}
      <hr
        style={{
          border: "none",
          borderTop: "1px solid #333",
          margin: "0 0 24px 0",
        }}
      />

      {/* Bottom Bar */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          gap: isMobile ? "10px" : "0",
        }}
      >
        <span
          style={{
            fontSize: "13.5px",
            color: "gray",
          }}
        >
          Created by{" "}
          <strong style={{ fontWeight: "800", color: "white" }}>
            SAN
          </strong>
        </span>

        <span
          style={{
            fontSize: "13.5px",
            color: "gray",
          }}
        >
          Powered by{" "}
          <strong style={{ fontWeight: "800", color: "white" }}>
            REACT
          </strong>
        </span>
      </div>
    </footer>
  );
};

export default Footer;