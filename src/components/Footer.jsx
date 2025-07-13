// src/components/AppFooter.jsx
import React from "react";

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
