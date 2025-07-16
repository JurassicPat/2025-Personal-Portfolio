// src/pages/About.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { Gem, Github, Linkedin, Send } from "lucide-react";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import LogoCarousel from "../components/LogoCarousel";
import SkillsToolsTech from "../components/SkillsToolsTech";

import ContactModal from "../components/ContactModal";

export default function About() {
  const [showContact, setShowContact] = useState(false);

  return (
    <motion.main
    className="about-page text-light"
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.98 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
  >
      <section className="about-hero-section d-flex align-items-center min-vh-100">
        <div className="container">
          <FadeInWhenVisible>
            <div className="row align-items-center">
              <div className="col-md-8 offset-md-2">
                <p className="lead">About Me</p>
                <h1 className="display-4 fw-bold">Who’s Behind the Pixels?</h1>
                <p className="tagline">
                  Based in the Midwest, I’m a designer and developer who blends
                  visual creativity with front-end skill. I focus on crafting
                  accessible, user-friendly experiences that are as thoughtful
                  as they are functional.
                </p>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      <section className="about-body-section container py-5">
        <FadeInWhenVisible>
          <div className="row mb-5">
            <div className="col-md-8 offset-md-3">
              <h2 className="fw-bold" aria-label="About me section">
                A Bit About Me
              </h2>
              <p>
                Hello, I’m Patrick — a UI/UX designer and front-end developer
                based in the Midwest with a sharp eye for clean layouts,
                intuitive interfaces, and thoughtful user experiences.
              </p>
              <p>
                I’ve always been drawn to design. From the balance of negative
                space to the logic behind user flows, I see digital design as
                both an art and a science. I studied graphic design with an
                emphasis on web, which quickly steered me toward projects where
                experience and usability mattered just as much as visuals. Along
                the way, I earned a UX certification and developed a passion for
                solving complex problems with smart, strategic design.
              </p>
              <p>
                These days, I work at the intersection of design and
                development. While Figma is my design home base, I also build
                full websites from scratch using tools like React, Bootstrap,
                HTML/CSS, and JavaScript. (This site? Hand-coded by yours
                truly.)
              </p>
              <p>
                Over the years, I’ve had the opportunity to work on projects for
                donut shops, wedding florists, churches, musicians,
                municipalities, medical facilities, payment processors,
                nonprofits, and more. Whether it’s a music festival site or a
                school record-keeping app, I bring the same attention to
                usability, structure, and accessible design.
              </p>
              <p>
                I care deeply about making the web a better place for everyone.
                ADA compliance and accessibility aren’t afterthoughts — they’re
                part of the plan. Because a beautiful design is only valuable if
                everyone can actually use it.
              </p>
              <p>
                When I’m not designing, I’m probably diving into Tolkien lore,
                jamming to new music, playing card games, or reading up on the
                latest in design systems and interface trends.
              </p>
              <p>
                If you’re looking for a creative partner who’s friendly,
                strategic, and ready to bring your vision to light — let’s
                connect.
              </p>
            </div>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible direction="left">
          <SkillsToolsTech />
        </FadeInWhenVisible>

        <FadeInWhenVisible direction="bottom">
          <div className="row mb-5">
            <div className="col-md-8 offset-md-3">
              <h3 className="fw-bold">
                Companies I’ve Designed For
              </h3>
              <LogoCarousel />
            </div>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible direction="right">
          <div className="row latest-links">
            <div className="col-md-8 offset-md-3">
              <h3 className="fw-bold" aria-label="Contact and links section">
                Get the latest
              </h3>
              <p>Looking for latest updates or wondering what I'm up to?</p>
            </div>
            <div className="col-md-2 offset-md-3">
              <a
                href="https://github.com/JurassicPat"
                className="icon-link"
                title="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </a>
            </div>
            <div className="col-md-2">
              <a
                href="https://linkedin.com/in/patrick-watertor"
                className="icon-link"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </a>
            </div>
            <div className="col-md-2">
              <a
                href="https://moxfield.com/users/JurassicPat"
                className="icon-link"
                title="Moxfield"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Gem />
              </a>
            </div>
            <div className="col-md-2">
              <button
                className="icon-link"
                title="Contact"
                onClick={() => setShowContact(true)}
              >
                <Send />
              </button>
            </div>
          </div>
        </FadeInWhenVisible>
        <ContactModal
          show={showContact}
          onClose={() => setShowContact(false)}
        />
      </section>
      <Footer className="about-footer-wrapper" />
    </motion.main>
  );
}
