import React, { createContext, useState, useEffect } from "react";

export const backToTopContext = createContext();

const BackToTopProvider = ({ children }) => {
  const [backToTop, setBackToTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <backToTopContext.Provider value={{ backToTop, toTop }}>
      {children}
    </backToTopContext.Provider>
  );
};

export default BackToTopProvider;
