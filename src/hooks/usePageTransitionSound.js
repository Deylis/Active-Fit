import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import transitionSound from "../assets/sounds/transition-whoosh.wav";

export function usePageTransitionSound() {
  const location = useLocation();
  const firstLoad = useRef(true);

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }

    const audio = new Audio(transitionSound);
    audio.volume = 0.60;
    audio.play().catch(() => {});
  }, [location.pathname]);
}