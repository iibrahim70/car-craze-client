import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      className="flex items-center justify-center capitalize  px-3 md:px-4 xl:px-6 py-2 lg:py-3 font-medium text-white transition hover:drop-shadow-2xl rounded shadow-xl duration-700 bg-red hover:bg-red/70"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
