import { Informations } from "../data";

const Info = () => (
  <>
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
        <div className="Ulli mt-4 p-2 text-slate-600 font-light">
          <div className="flex flex-col items-center md:flex-row justify-between">
            {/* List items */}
            <ul>
              {info.informa.map((item, index) => (
                <li key={index}>
                  <span className="pr-1">•</span>
                  <span className="hover:text-slate-800 UlliText hover:font-semibold transition-all duration-100 cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            {/* Image */}
            <div className="sm:flex sm:justify-center md:flex md:items-center lg:mr-10 sm:mr-5">
              <img
                className="Image w-10 my-4 md:mt-0 sm:w-10 md:w-12"
                src={info.image}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    ))}
  </>
);

export default Info;
