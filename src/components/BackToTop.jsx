// src/components/BackToTop.jsx
import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import "../styles/BackToTop.css";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`back-to-top-btn btn btn-outline-light ${visible ? "show" : ""}`}
      aria-label="Scroll to top"
    >
      <ChevronUp size={20} />
    </button>
  );
}
