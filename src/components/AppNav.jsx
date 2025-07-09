// src/components/AppNav.jsx
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/AppNav.css";

export default function AppNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `nav-link text-light${isActive ? " active" : ""}`
        }
      >
        Contact
      </NavLink>

      |

      <a
        href="https://www.linkedin.com/in/patrick-watertor/"
        target="_blank"
        rel="noreferrer"
        className="nav-link text-light"
      >
        LinkedIn
      </a>

      <a
        href="/resume.pdf"
        target="_blank"
        className="nav-link text-light"
      >
        Resume
      </a>
    </div>
  );
}
