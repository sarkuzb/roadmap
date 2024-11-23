import React, { useContext, useState, useEffect } from "react";
import { ScrollRef } from "../context/videosectionscroll";

const Header = () => {
  const { scrollToVideoSection } = useContext(ScrollRef);

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-start p-2 bg-slate-500 highlight">
        <div className="">
          <p className="inline-block p-4 text-white text-2xl font-light">
            Welcome To{" "}
            <span className="text-yellow-600 bg-white p-1 font-bold">
              Roadmap
            </span>
          </p>
        </div>
        <div className="flex gap-4">
          <div>
            <button
              className="text-md font-light text-slate-100 after-line after:bg-slate-200"
              onClick={scrollToVideoSection}
            >
              Video Tutorials
            </button>
          </div>

          <div className="absolute right-6">
            <button
              onClick={toggleTheme}
              className="font-semibold text-xs text-slate-200 hover:text-white"
            >
              {theme === "light" ? "Dark" : "Light"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const VideoTutorials = () => {
  const { videoSectionRef } = useContext(ScrollRef);
  return (
    <div
      ref={videoSectionRef}
      className="flex items-center justify-center pt-2 pb-4"
    >
      <p className="text-yellow-600 bg-white p-2 font-bold text-2xl">
        Video Tutorials
      </p>
    </div>
  );
};

export { Header, VideoTutorials };
