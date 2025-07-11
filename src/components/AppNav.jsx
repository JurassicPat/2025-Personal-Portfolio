// src/components/AppNav.jsx
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/AppNav.css";
import ContactModal from "./ContactModal";


export default function AppNav() {
  const [scrolled, setScrolled] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`app-side-nav d-flex flex-row align-items-end ${
          scrolled ? "scrolled-nav" : ""
        }`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `nav-link text-light${isActive ? " active" : ""}`
          }
        >
          Projects
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `nav-link text-light${isActive ? " active" : ""}`
          }
        >
          About
        </NavLink>

        <button
          className="btn btn-link nav-link text-light p-0"
          onClick={() => setShowContact(true)}
        >
          Contact
        </button>

        <span className="text-light px-2">|</span>

        <a
          href="https://www.linkedin.com/in/patrick-watertor/"
          target="_blank"
          rel="noreferrer"
          className="nav-link text-light"
        >
          LinkedIn
        </a>

        <a href="/resume.pdf" target="_blank" className="nav-link text-light">
          Resume
        </a>
      </div>

      <ContactModal show={showContact} onClose={() => setShowContact(false)} />
    </>
  );
}
