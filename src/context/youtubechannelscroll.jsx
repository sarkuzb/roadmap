import React, { createContext, useRef } from "react";

export const YouTubeScrollRef = createContext();

const YouTubeProvider = ({ children }) => {
  const YouTubeRef = useRef(null);

  const scrollToVideoSection = () => {
    YouTubeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <YouTubeScrollRef.Provider value={{ YouTubeRef, scrollToVideoSection }}>
      {children}
    </YouTubeScrollRef.Provider>
  );
};

export default YouTubeProvider;
