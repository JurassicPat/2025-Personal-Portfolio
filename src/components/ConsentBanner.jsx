// src/components/ConsentBanner.jsx
import React, { useState, useEffect } from "react";

export default function ConsentBanner({ onAccept }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent !== "true") {
      setShow(true);
    }
  }, []);

  const acceptConsent = () => {
    localStorage.setItem("cookieConsent", "true");
    setShow(false);
    onAccept();
  };

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "#222",
        color: "#fff",
        padding: "1rem",
        textAlign: "center",
        zIndex: 1000,
      }}
    >
      <p style={{ margin: 0 }}>
        This website uses cookies to improve your experience.{" "}
        <button
          onClick={acceptConsent}
          style={{
            backgroundColor: "#646cff",
            color: "white",
            border: "none",
            padding: "0.4rem 1rem",
            marginLeft: "1rem",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          Accept
        </button>
      </p>
    </div>
  );
}
