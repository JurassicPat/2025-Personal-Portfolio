// src/App.jsx
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import AppNav from "./components/AppNav";
import BackToTop from "./components/BackToTop";
import "./App.css";
import { AnimatePresence, motion } from "framer-motion";
import VerticalLine from "./components/VerticalLine";

export default function App() {
  const location = useLocation();

  return (
    <>
        <VerticalLine />
      <AppNav />

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Outlet />
          <BackToTop />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
