import React, { useContext } from "react";
import { ScrollRef } from "../context/videosectionscroll";

const Header = () => {
  const { scrollToVideoSection } = useContext(ScrollRef);
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-start p-2 bg-slate-500">
        <div className="">
          <p className="inline-block p-4 text-white text-2xl font-light">
            Welcome To Front-End{" "}
            <span className="text-yellow-600 bg-white p-1 font-bold">
              Roadmap
            </span>
          </p>
        </div>
        <div className="flex gap-4">
          <button
            className="text-md font-light text-slate-100 after-line after:bg-slate-200"
            onClick={scrollToVideoSection}
          >
            Video Tutorials
          </button>
        </div>
      </div>
      ;
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
