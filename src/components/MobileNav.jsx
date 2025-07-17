import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ContactModal from "./ContactModal";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const links = [
    { name: "Projects", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", action: () => setShowContact(true) },
    {
      name: "Resume",
      path: "/Patrick-Watertor-2025-Resume.pdf",
      external: true,
    },
    {
      name: "LinkedIn",
      path: "https://www.linkedin.com/in/patrick-watertor/",
      external: true,
    },
  ];

  return (
    <>
      <button
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span />
        <span />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
           <motion.ul
  className="mobile-nav-links"
  initial="hidden"
  animate="visible"
  exit="hidden"
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }}
>
  {links.map((link, index) => {
    // Determine if separator needed before this item
    const needsSeparator = ["Resume", "LinkedIn"].includes(link.name);

    return (
      <React.Fragment key={index}>
        {needsSeparator && (
          <motion.li
            className="mobile-nav-separator"
            aria-hidden="true"
            variants={linkVariants}
          />
        )}

        {link.action ? (
          <motion.li
            variants={linkVariants}
            onClick={() => {
              link.action();
              closeMenu();
            }}
          >
            {link.name}
          </motion.li>
        ) : link.external ? (
          <motion.li variants={linkVariants} onClick={closeMenu}>
            <a href={link.path} target="_blank" rel="noreferrer">
              {link.name}
            </a>
          </motion.li>
        ) : (
          <motion.li variants={linkVariants}>
            <NavLink to={link.path} onClick={closeMenu}>
              {link.name}
            </NavLink>
          </motion.li>
        )}
      </React.Fragment>
    );
  })}
</motion.ul>

          </motion.div>
        )}
      </AnimatePresence>

      <ContactModal show={showContact} onClose={() => setShowContact(false)} />
    </>
  );
}

const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};
