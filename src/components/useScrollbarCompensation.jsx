// src/hooks/useScrollbarCompensation.js
import { useEffect } from "react";

export default function useScrollbarCompensation(isOpen) {
  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);
}
