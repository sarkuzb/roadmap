import { VideoTutorial } from "../videtutorials";
import { VideoTutorialTwo } from "../videtutorials";
const VideotutorialsTwo = () => (
  <>
    {/* First Video Tutorial Section */}
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
  </>
);

const VideotutorialsThree = () => (
  <>
    {/* Second Video Tutorial Section */}

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
  </>
);

export { VideotutorialsTwo, VideotutorialsThree };
