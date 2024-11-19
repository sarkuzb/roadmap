import { ShowMoreInfo } from "../data";
import { JavaScript } from "../data";
import { ReactJs } from "../data";
import { NodeJs } from "../data";
import { gitAndgithub } from "../data";
import { APIs } from "../data";

const ShowMoreInfoComp = () => {
  return (
    <>
      {ShowMoreInfo.map((info) => (
        <div
          key={info.id}
          className="border-colors border-2 rounded-xl p-4 m-4"
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
          className=" border-2 border-yellow-500 rounded-xl p-4 m-4"
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
          className="border-colors border-2 rounded-xl p-4 m-4"
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
      {APIs.map((info) => (
        <div
          key={info.id}
          className="border-colors border-2 rounded-xl p-4 m-4"
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
    </>
  );
};

export default ShowMoreInfoComp;
