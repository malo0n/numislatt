import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

export function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    const savedPosition = sessionStorage.getItem(location.pathname);
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition, 10));
    } else {
      window.scrollTo(0, 0);
    }
    return () => {
      sessionStorage.setItem(location.pathname, window.scrollY.toString());
    };
  }, [location]);

  return null;
}

//! баг при навигации: при переходе на какую либо страницу во второй раз возвращается скролл
