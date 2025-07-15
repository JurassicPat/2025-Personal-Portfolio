// src/components/LogoCarousel.jsx
import React from "react";
import "../styles/LogoCarousel.css";

const logos = [
  "/logos/mitsubishi.webp",
  "/logos/frontline.svg",
  "/logos/doosan.webp",
  "/logos/sunbelt.webp",
  "/logos/volvo.webp",
];

export default function LogoCarousel() {
  return (
    <div className="logo-carousel">
      <div className="logo-track">
        {logos.map((src, i) => (
          <div className="logo-item" key={i}>
            <img src={src} alt={`Company logo ${i}`} />
          </div>
        ))}
        {/* Duplicate logos for seamless looping */}
        {logos.map((src, i) => (
          <div className="logo-item" key={`dup-${i}`}>
            <img src={src} alt={`Company logo duplicate ${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
