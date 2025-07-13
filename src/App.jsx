// src/App.jsx
import React, { useEffect }  from "react";
import { Outlet, useLocation } from "react-router-dom";
import AppNav from "./components/AppNav";
import BackToTop from "./components/BackToTop";
import { AnimatePresence, motion } from "framer-motion";
import VerticalLine from "./components/VerticalLine";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    // Derive class name from path
    const path = location.pathname === "/" ? "home" : location.pathname.slice(1).replaceAll("/", "-");
    const pageClass = `${path}-page`;

    // Update <body> class
    document.body.classList.forEach((cls) => {
      if (cls.endsWith("-page")) document.body.classList.remove(cls);
    });
    document.body.classList.add(pageClass);

    // Clean up on unmount (optional)
    return () => {
      document.body.classList.remove(pageClass);
    };
  }, [location]);

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
