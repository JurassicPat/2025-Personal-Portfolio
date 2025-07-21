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
    <div className="cookie-banner">
      <p>
        This website uses cookies to improve your experience.
        <button onClick={acceptConsent}>Accept</button>
      </p>
    </div>
  );
}
