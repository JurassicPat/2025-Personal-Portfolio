// src/components/AppFooter.jsx
import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer text-center py-3">
      <small>
        &copy; {year} Patrick Watertor
      </small>
    </footer>
  );
}
