import { useState } from "react";
import BackToTopProvider from "./context/backToTop";
import BackToTopHere from "./components/backToTopButton";
import { Header, VideoTutorials } from "./components/header";
import VideoScrollProvider from "./context/videosectionscroll";
import Info from "./components/information";
import ShowMoreInfoComp from "./components/showmoreinfo";
import Bottom from "./components/bottom";
import {
  VideotutorialsTwo,
  VideotutorialsThree,
} from "./components/videotutorials";

function Roadmap() {
  const [collapse, setCollapse] = useState(false);
  const [collapseTwo, setCollapseTwo] = useState(false);

  return (
    <VideoScrollProvider>
      {/*this is body*/}
      <div className="Body">
        {/* header */}
        <Header />
        <div className="Main mx-auto max-w-full 2xl:w-10/12 xl:w-10/12 lg:w-10/12 md:w-10/12 sm:w-10/12  bg-slate-200 pb-2 pt-2">
          {/* roadmap */}
          <Info />

          <div
            className={`long-text transition-all duration-700 ease-in-out ${
              collapse ? "expanded" : ""
            }`}
          >
            {/* roadmap */}
            <ShowMoreInfoComp />
          </div>
          {/* show more less button */}
          <div className="bg-yellow-500 ml-4 border-b-2 border-yellow-600 active:scale-90 hover:border-slate-300 mb-2 p-2 rounded-md w-28 flex justify-center text-sm font-semibold text-white hover:bg-white active:bg-slate-200 hover:text-yellow-500 cursor-pointer transition duration-200">
            <button onClick={() => setCollapse((prevItem) => !prevItem)}>
              {collapse ? "Show Less" : "Show More"}
            </button>
          </div>

          {/* video tutorials */}
          <VideoTutorials />
          {/* video tutorials */}
          <div className="border-colors flex flex-col border-2 border-slate-500 rounded-xl p-4 m-4">
            <div className="flex flex-wrap justify-evenly gap-2 m-2">
              <VideotutorialsTwo />

              <div
                className={`long-text flex flex-wrap justify-evenly gap-2 m-2 transition-all duration-700 ease-in-out ${
                  collapseTwo ? "expanded" : ""
                }`}
              >
                {/* roadmap */}
                <VideotutorialsThree />
              </div>
            </div>
          </div>

          {/* show more less button */}
          <div className="bg-yellow-500 border-b-2 border-yellow-600 hover:border-slate-300 active:scale-90 ml-4 mb-2 p-2 rounded-md w-28 flex justify-center text-sm font-semibold text-white hover:bg-white active:bg-slate-200 hover:text-yellow-500 cursor-pointer transition duration-200">
            <button onClick={() => setCollapseTwo((prevItem) => !prevItem)}>
              {collapseTwo ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>

        {/* back to top button */}
        <BackToTopProvider>
          <div>
            <BackToTopHere />
          </div>
        </BackToTopProvider>

        {/* bottom */}
        <Bottom />
      </div>
    </VideoScrollProvider>
  );
}

export default Roadmap;
