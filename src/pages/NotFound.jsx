import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import dottedLine from "../assets/dotted-line-side.png";

export default function NotFound() {
  return (
    <motion.main
      className="page-content min-vh-100 d-flex flex-column justify-content-center align-items-center text-light text-center"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      >
        <h1 className="display-4 fw-bold">Whoops</h1>
        <p className="lead">I think you made a wrong turn.</p>
        <a href="/" className="learn-more-link">
          Back to Home <ChevronRight className="chevron-icon" />
        </a>
      </motion.div>

      <motion.img
        src={dottedLine}
        alt="decorative dotted line"
        className="w-100 mt-5"
        style={{ objectFit: "cover" }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: .25, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
      />
    </motion.main>
  );
}
