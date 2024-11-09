import { useState, useEffect } from "react";
import ImageUp from "./assets/arrowhead-up.png";
import { Informations } from "./data";
import { ShowMoreInfo } from "./data";
import { JavaScript } from "./data";
import image01 from "./assets/video-tutorials/01.jpg";
import { VideoTutorial } from "./videtutorials";
import { VideoTutorialTwo } from "./videtutorials";

function Roadmap() {
  const [backToTop, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 700) {
          setBackToTopButton(true);
        } else {
          setBackToTopButton(false);
        }
      },
      []
    );
  });

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [collapse, setCollapse] = useState(false);
  const [collapseTwo, setCollapseTwo] = useState(false);
  return (
    <>
      {/*this is body*/}
      <div className="Body">
        <div className="Main bg-slate-200 pb-2">
          {/* welcome to front end roadmap */}
          <div className="flex  items-center justify-center pt-4">
            <p className="bg-slate-400 inline-block p-4 text-white text-2xl font-light">
              Welcome To Front-End{" "}
              <span className="text-yellow-600 bg-white p-1 font-bold">
                Roadmap
              </span>
            </p>
          </div>

          {Informations.map((info) => (
            <div
              key={info.id}
              className="border-2 border-slate-500 rounded-xl p-4 m-4"
            >
              <div>
                <p className="bg-white inline-block p-2 text-xl font-semibold text-yellow-600">
                  {info.direction}
                </p>
              </div>
              <ul className="bg-slate-300 mt-4 p-2 text-slate-600 font-light">
                <div className="flex flex-row justify-between">
                  <div>
                    {info.informa.map((item, index) => (
                      <li key={index}>
                        <span className="pr-1">•</span>
                        <span className="hover:text-slate-800 hover:font-semibold transition-all duration-100 cursor-pointer">
                          {item}
                        </span>
                      </li>
                    ))}
                  </div>
                  <img className="Image w-20 mr-32" src={info.image} alt="" />
                </div>
              </ul>
            </div>
          ))}

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
                <ul className="bg-slate-300 mt-4 p-2 text-slate-600 font-light">
                  <div className="flex flex-row justify-between">
                    <div>
                      {info.informa.map((item, index) => (
                        <li key={index}>
                          <span className="pr-1">•</span>
                          <span className="hover:text-slate-800 hover:font-semibold transition-all duration-100 cursor-pointer">
                            {item}
                          </span>
                        </li>
                      ))}
                    </div>
                    <img className="Image w-20 mr-32" src={info.image} alt="" />
                  </div>
                </ul>
              </div>
            ))}
            {JavaScript.map((info) => (
              <div
                key={info.id}
                className="border-2 border-yellow-600 rounded-xl p-4 m-4"
              >
                <div className="flex items-center justify-between">
                  <p className="bg-white inline-block p-2 text-xl font-semibold text-yellow-600">
                    {info.direction}
                  </p>
                  <p className="text-gray-300 text-xl font-semibold hover:text-gray-400 transition duration-150 cursor-pointer">
                    #main
                  </p>
                </div>
                <ul className="bg-slate-300 mt-4 p-2 text-slate-600 font-light">
                  <div className="flex flex-row justify-between">
                    <div>
                      {info.informa.map((item, index) => (
                        <li key={index}>
                          <span className="pr-1">•</span>
                          <span className="hover:text-slate-800 hover:font-semibold transition-all duration-100 cursor-pointer">
                            {item}
                          </span>
                        </li>
                      ))}
                    </div>
                    <img className="Image w-20 mr-32" src={info.image} alt="" />
                  </div>
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-yellow-500 ml-4 mb-2 p-2 rounded-md w-28 flex justify-center text-sm font-semibold text-white hover:bg-white active:bg-slate-200 hover:text-yellow-500 cursor-pointer transition duration-200">
            <button onClick={() => setCollapse((prevItem) => !prevItem)}>
              {collapse ? "Show Less" : "Show More"}
            </button>
          </div>

          {/* video tutorials */}
          <div className="flex  items-center justify-center pt-2 pb-4">
            <p className="text-yellow-600 bg-white p-2 font-bold text-2xl">
              Video Tutorials
            </p>
          </div>

          <div className="flex flex-col border-2 border-slate-500 rounded-xl p-4 m-4">
            {/* First Video Tutorial Section */}
            <div className="flex flex-wrap justify-evenly gap-2 m-2">
              {VideoTutorial.map((info) => (
                <div
                  key={info.link}
                  className="flex items-center justify-center bg-slate-300 p-4"
                >
                  <div className="flex flex-col border-2 rounded border-white max-w-xs hover:scale-105 hover:shadow-xl hover:shadow-black/30 transition duration-100">
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full overflow-hidden rounded-t"
                    >
                      <img src={info.thumbnail} alt="" className="w-full" />
                    </a>
                    <p className="px-2 text-sm p-2 text-slate-800 font-semibold rounded-b bg-white overflow-hidden whitespace-nowrap text-ellipsis max-w-full">
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
                  className="flex items-center justify-center bg-slate-300 p-4"
                >
                  <div className="flex flex-col border-2 rounded border-white max-w-xs hover:scale-105 hover:shadow-xl hover:shadow-black/30 transition duration-100">
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full overflow-hidden rounded-t"
                    >
                      <img src={info.thumbnail} alt="" className="w-full" />
                    </a>
                    <p className="px-2 text-sm p-2 text-slate-800 font-semibold rounded-b bg-white overflow-hidden whitespace-nowrap text-ellipsis max-w-full">
                      {info.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Toggle Button */}
          <div className="bg-yellow-500 ml-4 mb-2 p-2 rounded-md w-28 flex justify-center text-sm font-semibold text-white hover:bg-white active:bg-slate-200 hover:text-yellow-500 cursor-pointer transition duration-200">
            <button onClick={() => setCollapseTwo((prevItem) => !prevItem)}>
              {collapseTwo ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>

        {/* back to top button */}
        {backToTop && (
          <div
            className={`fixed bottom-10 right-11 transition-all duration-500 ease-in-out ${
              backToTop ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <img
              className="w-10 cursor-pointer opacity-35 hover:opacity-50"
              src={ImageUp}
              alt="up"
              onClick={toTop}
            />
          </div>
        )}

        {/* bottom */}
        <div className="Bottom flex flex-col items-center justify-center p-2 bg-slate-500">
          <p className="text-white font-semibold">
            This is a <span className="uppercase underline">roadmap</span> for
            those who don't know where to start with front end. The web site was
            created by{" "}
            <a
              href="https://tmci.uz/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-red-700"
            >
              TMCI
            </a>{" "}
            Student{" "}
            <span className="underline">
              <a
                href="https://t.me/sarvarkhujamov"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-white hover:text-transparent hover:bg-clip-text hover:text-sky-400"
              >
                Sarvar Khujamov!
              </a>
            </span>
          </p>

          {/* Corrected copyright line */}
          <p className="font-light text-white">© 2024 All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Roadmap;
