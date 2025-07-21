// src/utils/analytics.js
import ReactGA from "react-ga4";

let initialized = false;

export const initGA = () => {
  if (!initialized) {
    ReactGA.initialize("G-LNTDSW0VX0", {
      gaOptions: {
        anonymize_ip: true,
      },
    });
    initialized = true;
    console.log("✅ Google Analytics Initialized");
  }
};

export const logPageView = (path) => {
  if (!initialized) return;
  console.log("📊 Logging pageview:", path);
  ReactGA.send({ hitType: "pageview", page: path, debug_mode: true });
};

export const logEvent = (eventName, params = {}) => {
  if (!initialized) return;
  console.log("🎯 Logging event:", eventName, params);
  ReactGA.event(eventName, { ...params, debug_mode: true });
};

export const isInitialized = () => initialized;
