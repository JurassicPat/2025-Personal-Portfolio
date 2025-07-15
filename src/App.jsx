import React, { useEffect } from "react";
import { Outlet, useLocation, useMatches } from "react-router-dom";
import AppNav from "./components/AppNav";
import BackToTop from "./components/BackToTop";
import { AnimatePresence, motion } from "framer-motion";
import VerticalLine from "./components/VerticalLine";

export default function App() {
  const location = useLocation();
  const matches = useMatches();

  useEffect(() => {
    // Check if the deepest matched route has a handle with pageClass
    const match = matches[matches.length - 1];
    const pageClass =
      match?.handle?.pageClass ||
      (location.pathname === "/" ? "home" : location.pathname.slice(1).replaceAll("/", "-"));

    // Clear existing page classes
    document.body.classList.forEach((cls) => {
      if (cls.endsWith("-page")) document.body.classList.remove(cls);
    });

    document.body.classList.add(`${pageClass}-page`);

    return () => {
      document.body.classList.remove(`${pageClass}-page`);
    };
  }, [location, matches]);

  return (
    <>
      <VerticalLine />
      <AppNav />
      <div className="app-wrapper">
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
      </div>
    </>
  );
}
