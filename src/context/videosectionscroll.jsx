import React, { createContext, useRef } from "react";

export const ScrollRef = createContext();

const VideoScrollProvider = ({ children }) => {
  const videoSectionRef = useRef(null);

  const scrollToVideoSection = () => {
    videoSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ScrollRef.Provider value={{ videoSectionRef, scrollToVideoSection }}>
      {children}
    </ScrollRef.Provider>
  );
};

export default VideoScrollProvider;
