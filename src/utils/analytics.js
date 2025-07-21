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

export const logEvent = (eventName, params = {}) => {
  if (!initialized) return;
  ReactGA.event(eventName, params);
};

export const isInitialized = () => initialized;
