import { useState } from "react";
import { ShowMoreInfo } from "./data";
import { JavaScript } from "./data";
import { VideoTutorial } from "./videtutorials";
import { VideoTutorialTwo } from "./videtutorials";
import { ReactJs } from "./data";
import { NodeJs } from "./data";
import { gitAndgithub } from "./data";

import BackToTopProvider from "./context/backToTop";
import BackToTopHere from "./components/backToTopButton";

import { Header, VideoTutorials } from "./components/header";
import VideoScrollProvider from "./context/videosectionscroll";

import Info from "./components/information";

import Bottom from "./components/bottom";

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

          {/* roadmap */}
          <div
            className={`long-text transition-all duration-700 ease-in-out ${
              collapse ? "expanded" : ""
            }`}
          >
            {ShowMoreInfo.map((info) => (
              <div
                key={info.id}
                className="border-2 border-slate-500 rounded-xl p-4 m-4"
              >
                <div>
                  <p className="bg-white inline-block p-2 text-xl font-semibold text-yellow-600">
                    {info.direction}
                  </p>
                </div>
                <ul className="Ulli mt-4 p-2 text-slate-600 font-light">
                  <div className="flex flex-row justify-between">
                    <div>
                      {info.informa.map((item, index) => (
                        <li key={index}>
                          <span className="pr-1">•</span>
                          <span className="UlliText hover:font-semibold transition-all duration-100 cursor-pointer">
                            {item}
                          </span>
                        </li>
                      ))}
                    </div>
                    <div className="sm:flex sm:justify-center md:flex md:items-center lg:mr-10 sm:mr-5">
                      <img
                        className="Image w-10 my-4 md:mt-0 sm:w-10 md:w-12"
                        src={info.image}
                        alt=""
                      />
                    </div>
                  </div>
                </ul>
              </div>
            ))}
            {JavaScript.map((info) => (
              <div
                key={info.id}
                className="border-2 border-yellow-500 rounded-xl p-4 m-4"
              >
                <div className="flex items-center justify-between">
                  <p className="bg-white inline-block p-2 text-xl font-semibold text-yellow-500">
                    {info.direction}
                  </p>
                  <p className="text-gray-300 text-xl font-semibold hover:text-gray-400 transition duration-150 cursor-pointer">
                    #main
                  </p>
                </div>
                <ul className="Ulli mt-4 p-2 text-slate-600 font-light">
                  <div className="flex flex-row justify-between">
                    <div>
                      {info.informa.map((item, index) => (
                        <li key={index}>
                          <span className="pr-1">•</span>
                          <span className="UlliText hover:font-semibold transition-all duration-100 cursor-pointer">
                            {item}
                          </span>
                        </li>
                      ))}
                    </div>
                    <div className="sm:flex sm:justify-center md:flex md:items-center lg:mr-10 sm:mr-5">
                      <img
                        className="Image w-10 my-4 md:mt-0 sm:w-10 md:w-12"
                        src={info.image}
                        alt=""
                      />
                    </div>
                  </div>
                </ul>
              </div>
            ))}
            {ReactJs.map((info) => (
              <div
                key={info.id}
                className="border-2 border-sky-500 rounded-xl p-4 m-4"
              >
                <div className="flex items-center justify-between">
                  <p className="bg-white inline-block p-2 text-xl font-semibold text-sky-500">
                    {info.direction}
                  </p>
                  <p className="text-gray-300 text-xl font-semibold hover:text-gray-400 transition duration-150 cursor-pointer">
                    #main
                  </p>
                </div>
                <ul className="Ulli mt-4 p-2 text-slate-600 font-light">
                  <div className="flex flex-row justify-between">
                    <div>
                      {info.informa.map((item, index) => (
                        <li key={index}>
                          <span className="pr-1">•</span>
                          <span className="UlliText hover:font-semibold transition-all duration-100 cursor-pointer">
                            {item}
                          </span>
                        </li>
                      ))}
                    </div>
                    <div className="sm:flex sm:justify-center md:flex md:items-center lg:mr-10 sm:mr-5">
                      <img
                        className="Image w-10 my-4 md:mt-0 sm:w-10 md:w-12"
                        src={info.image}
                        alt=""
                      />
                    </div>
                  </div>
                </ul>
              </div>
            ))}
            {NodeJs.map((info) => (
              <div
                key={info.id}
                className="border-2 border-green-600 rounded-xl p-4 m-4"
              >
                <div className="flex items-center justify-between">
                  <p className="bg-white inline-block p-2 text-xl font-semibold text-green-600">
                    {info.direction}
                  </p>
                  <p className="text-gray-300 text-xl font-semibold hover:text-gray-400 transition duration-150 cursor-pointer">
                    #main
                  </p>
                </div>
                <ul className="Ulli mt-4 p-2 text-slate-600 font-light">
                  <div className="flex flex-row justify-between">
                    <div>
                      {info.informa.map((item, index) => (
                        <li key={index}>
                          <span className="pr-1">•</span>
                          <span className="UlliText hover:font-semibold transition-all duration-100 cursor-pointer">
                            {item}
                          </span>
                        </li>
                      ))}
                    </div>
                    <div className="sm:flex sm:justify-center md:flex md:items-center lg:mr-10 sm:mr-5">
                      <img
                        className="Image w-10 my-4 md:mt-0 sm:w-10 md:w-12"
                        src={info.image}
                        alt=""
                      />
                    </div>
                  </div>
                </ul>
              </div>
            ))}
            {gitAndgithub.map((info) => (
              <div
                key={info.id}
                className="border-2 border-slate-500 rounded-xl p-4 m-4"
              >
                <div className="flex items-center justify-between">
                  <p className="bg-white inline-block p-2 text-xl font-semibold text-yellow-600">
                    {info.direction}
                  </p>
                </div>
                <ul className="Ulli mt-4 p-2 text-slate-600 font-light">
                  <div className="flex flex-row justify-between">
                    <div>
                      {info.informa.map((item, index) => (
                        <li key={index}>
                          <span className="pr-1">•</span>
                          <span className="UlliText hover:font-semibold transition-all duration-100 cursor-pointer">
                            {item}
                          </span>
                        </li>
                      ))}
                    </div>
                    <div className="sm:flex sm:justify-center md:flex md:items-center lg:mr-10 sm:mr-5">
                      <img
                        className="Image w-10 my-4 md:mt-0 sm:w-10 md:w-12"
                        src={info.image}
                        alt=""
                      />
                    </div>
                  </div>
                </ul>
              </div>
            ))}
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
          <div className="flex flex-col border-2 border-slate-500 rounded-xl p-4 m-4">
            {/* First Video Tutorial Section */}
            <div className="flex flex-wrap justify-evenly gap-2 m-2">
              {VideoTutorial.map((info) => (
                <div
                  key={info.link}
                  className="flex sm:w-5/12 md:w-5/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 items-center justify-center Ulli bg-slate-300 p-4 sm:p-2 lg:p-3 2xl:p-4"
                >
                  <div className="flex sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full  flex-col border-4 rounded border-white max-w-xs hover:scale-105 hover:shadow-xl hover:shadow-black/30 transition duration-100">
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full overflow-hidden"
                    >
                      <img src={info.thumbnail} alt="" className="w-full" />
                    </a>
                    <p className="px-2 text-sm p-2 text-slate-800 font-semibold bg-white overflow-hidden whitespace-nowrap text-ellipsis max-w-full">
                      {info.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Video Tutorial Section */}
            <div
              className={`flex flex-wrap justify-evenly gap-2 mb-2 mx-2 long-text transition-all duration-700 ease-in-out ${
                collapseTwo ? "expanded" : ""
              }`}
            >
              {VideoTutorialTwo.map((info) => (
                <div
                  key={info.id}
                  className="flex sm:w-5/12 md:w-5/12 lg:w-3/12 xl:w-1/4 2xl:w-1/4 items-center justify-center Ulli bg-slate-300 p-4"
                >
                  <div className="flex sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full flex-col border-4 rounded border-white max-w-xs hover:scale-105 hover:shadow-xl hover:shadow-black/30 transition duration-100">
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full overflow-hidden"
                    >
                      <img src={info.thumbnail} alt="" className="w-full" />
                    </a>
                    <p className="px-2 text-sm p-2 text-slate-800 font-semibold bg-white overflow-hidden whitespace-nowrap text-ellipsis max-w-full">
                      {info.name}
                    </p>
                  </div>
                </div>
              ))}
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
