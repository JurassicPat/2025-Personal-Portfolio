// src/App.jsx
import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useMatches } from "react-router-dom";
import AppNav from "./components/AppNav";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import VerticalLine from "./components/VerticalLine";
import { initGA, logPageView, isInitialized } from "./utils/analytics";
import ScrollToTop from "./components/ScrollToTop";
import MobileNav from "./components/MobileNav";


export default function App() {
  const location = useLocation();
  const matches = useMatches();
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent === "true") {
      initGA();
      setHasConsent(true);
      logPageView(location.pathname + location.search);
    }
  }, []);

  useEffect(() => {
    if (hasConsent && isInitialized()) {
      logPageView(location.pathname + location.search);
    }
  }, [location, hasConsent]);

  useEffect(() => {
    const match = matches[matches.length - 1];
    const pageClass =
      match?.handle?.pageClass ||
      (location.pathname === "/" ? "home" : location.pathname.slice(1).replaceAll("/", "-"));

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
     <ScrollToTop />
      <VerticalLine />
      <div className="desktop-nav-wrapper">
      <AppNav />
      </div>
       <div className="mobile-nav-wrapper">
        <MobileNav />
      </div>
      <div className="app-wrapper">
        <Outlet />
        {location.pathname !== "/" && <Footer />}
        <BackToTop />
      </div>
    </>
  );
}
