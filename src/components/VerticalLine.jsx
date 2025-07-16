import React, { useEffect, useState } from "react";
import dottedLine from "../assets/dotted-line.png";

export default function VerticalLine() {
  const [scrollHeight, setScrollHeight] = React.useState(window.innerHeight);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const updateHeight = () => setScrollHeight(document.body.scrollHeight);
    updateHeight();
    window.addEventListener("resize", updateHeight);

    const timeout = setTimeout(() => setVisible(true), 800);
    return () => {
      window.removeEventListener("resize", updateHeight);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="vertical-line">
      <img
        src={dottedLine}
        alt="dotted line path"
        aria-hidden="true"
        style={{
          height: `${scrollHeight}px`,
          opacity: visible ? 0.25 : 0,
          transform: visible ? "translateX(0)" : "translateX(-20px)",
          transition: "opacity 1s ease, transform 1s ease",
          width: "auto",
          objectFit: "contain",
          maskImage: "linear-gradient(to bottom, #000 90%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, #000 90%, transparent 100%)",
        }}
      />
    </div>
  );
}
