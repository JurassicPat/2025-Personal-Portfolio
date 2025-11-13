// src/components/HeroSection.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profile from "../assets/patrick.webp";
import { ChevronRight } from "lucide-react";

const greetings = ["Hello!", "Hey!", "Howdy!", "Hi!"];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % greetings.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section d-flex align-items-center min-vh-100">
      <div className="container">
        <div className="row align-items-center text-md-start">
          {/* Text Column */}
          <div className="col-md-4 offset-md-2 mb-4 mb-md-0">
            <p className="lead">
              <AnimatePresence mode="wait">
                <motion.span
                  key={greetings[index]}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4 }}
                  style={{ display: "inline-block" }}
                >
                  {greetings[index]}
                </motion.span>
              </AnimatePresence>{" "}
              I’m
            </p>
            <h1 className="display-4 fw-bold">Patrick</h1>
            <p className="mb-4 tagline">
              Solving complex problems with creative UX, clean design, and front-end code. Our journey begins here.
            </p>
            <a href="/about" className="learn-more-link d-inline-flex align-items-center gap-2">
              Learn More About Me <ChevronRight className="chevron-icon" />
            </a>
          </div>

          <div className="col-md-5 d-flex justify-content-center justify-content-md-end">
            <img
              src={profile}
              alt="Patrick smiling outdoors"
              className="hero-profile-img rounded-circle img-fluid"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
