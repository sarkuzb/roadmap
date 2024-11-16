import React, { useContext } from "react";
import { backToTopContext } from "../context/backToTop"; // Correct the import path
import ImageUp from "../assets/arrowhead-up.png";

const BackToTopHere = () => {
  const { backToTop, toTop } = useContext(backToTopContext); // Use the context value

  return (
    <div
      className={`sm:right-3 md:right-5 lg:right-8 lg:bottom-20 xl:right-9 xl:bottom-10 2xl:right-10 2xl:bottom-10 fixed bottom-10 right-11 transition-all duration-500 ease-in-out ${
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
  );
};

export default BackToTopHere;
