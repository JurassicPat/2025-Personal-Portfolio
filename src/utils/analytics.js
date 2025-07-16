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
  }
};

export const logPageView = (path) => {
  if (!initialized) return;
  ReactGA.send({ hitType: "pageview", page: path });
};

export const logEvent = (action, category, label = null) => {
  if (!initialized) return;
  ReactGA.event({
    category,
    action,
    label,
  });
};

export const isInitialized = () => initialized;
