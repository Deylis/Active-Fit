import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useReveal() {
  const location = useLocation();

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    function revealOnScroll() {
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 80) {
          element.classList.add("visible");
        }
      });
    }

    revealElements.forEach((element) => {
      element.classList.remove("visible");
    });

    setTimeout(() => {
      revealOnScroll();
    }, 100);

    window.addEventListener("scroll", revealOnScroll);

    return () => {
      window.removeEventListener("scroll", revealOnScroll);
    };
  }, [location.pathname]);
}

export default useReveal;