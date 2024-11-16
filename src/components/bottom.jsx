const Bottom = () => {
  return (
    <div className="Bottom flex flex-col items-center justify-center p-4 bg-slate-500">
      <p className="text-white font-semibold text-center text-sm sm:text-base lg:text-lg">
        This is a <span className="uppercase underline">roadmap</span> for those
        who don't know where to start with front-end development. The website
        was created by{" "}
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
            className="text-white hover:text-transparent hover:bg-clip-text hover:text-sky-400"
          >
            Sarvar Khujamov!
          </a>
        </span>
      </p>

      {/* Copyright line */}
      <p className="font-light text-white text-xs sm:text-sm mt-2 text-center">
        © 2024 All rights reserved.
      </p>
    </div>
  );
};

export default Bottom;
