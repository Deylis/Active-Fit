import { useEffect } from "react";

import hoverSound from "../assets/sounds/hover-brillo.wav";
import clickSound from "../assets/sounds/click-boton.wav";

export function useGlobalButtonSounds() {
  useEffect(() => {
    const playSound = (sound, volume) => {
      const audio = new Audio(sound);
      audio.volume = volume;
      audio.play().catch(() => {});
    };

    const handleHover = (e) => {
      if (
        e.target.closest(
          ".btn, .nav-login, .nav-register, .social-btn, button, a"
        )
      ) {
        playSound(hoverSound, 0.25);
      }
    };

    const handleClick = (e) => {
      if (
        e.target.closest(
          ".btn, .nav-login, .nav-register, .social-btn, button, a"
        )
      ) {
        playSound(clickSound, 0.05);
      }
    };

    document.addEventListener("mouseover", handleHover);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mouseover", handleHover);
      document.removeEventListener("click", handleClick);
    };
  }, []);
}