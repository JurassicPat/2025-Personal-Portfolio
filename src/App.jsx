import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useMatches } from "react-router-dom";
import AppNav from "./components/AppNav";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import VerticalLine from "./components/VerticalLine";
import ScrollToTop from "./components/ScrollToTop";
import MobileNav from "./components/MobileNav";

// Remove these for now:
// import { initGA, logPageView, isInitialized } from "./utils/analytics";

export default function App() {
  const location = useLocation();
  const matches = useMatches();
  const [hasConsent, setHasConsent] = useState(false);

  // ✅ 1. Defer analytics init using requestIdleCallback
  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");

    if (consent === "true") {
      setHasConsent(true);

      const loadAnalytics = () => {
        import("./utils/analytics").then(({ initGA, logPageView, isInitialized }) => {
          initGA();
          logPageView(location.pathname + location.search);
        });
      };

      if ("requestIdleCallback" in window) {
        requestIdleCallback(loadAnalytics);
      } else {
        setTimeout(loadAnalytics, 2000); // Fallback
      }
    }
  }, []);

  // ✅ 2. Continue tracking future page views if initialized
  useEffect(() => {
    if (!hasConsent) return;

    const updatePageView = () => {
      import("./utils/analytics").then(({ logPageView, isInitialized }) => {
        if (isInitialized()) {
          logPageView(location.pathname + location.search);
        }
      });
    };

    updatePageView();
  }, [location, hasConsent]);

  // ✅ 3. Add body class based on route
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
      <VerticalLine key={location.pathname} />
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
