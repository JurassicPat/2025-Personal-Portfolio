// src/components/VerticalLine.jsx
import React from "react";
import "../styles/VerticalLine.css";
import dottedLine from "../assets/dotted-line.png"; // adjust path as needed

export default function VerticalLine() {
  return (
    <div className="vertical-line">
      <img src={dottedLine} alt="" aria-hidden="true" />
    </div>
  );
}
