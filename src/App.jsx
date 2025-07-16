// src/App.jsx
import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useMatches } from "react-router-dom";
import AppNav from "./components/AppNav";
import BackToTop from "./components/BackToTop";
import VerticalLine from "./components/VerticalLine";
import ConsentBanner from "./components/ConsentBanner";
import { initGA, logPageView, isInitialized } from "./utils/analytics";

export default function App() {
  const location = useLocation();
  const matches = useMatches();
  const [hasConsent, setHasConsent] = useState(false);

  // On first load, check if consent was previously given
  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent === "true") {
      initGA();
      setHasConsent(true);
      logPageView(location.pathname + location.search);
    }
  }, []);

  // Log pageview only if GA has been initialized
  useEffect(() => {
    if (hasConsent && isInitialized()) {
      logPageView(location.pathname + location.search);
    }
  }, [location, hasConsent]);

  // Add page-level body class (unchanged from your version)
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

  const handleConsentAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    initGA();
    setHasConsent(true);
    logPageView(location.pathname + location.search);
  };

  return (
    <>
      <VerticalLine />
      <AppNav />
      <div className="app-wrapper">
        <Outlet />
        <BackToTop />
      </div>
      <ConsentBanner onAccept={handleConsentAccept} />
    </>
  );
}
