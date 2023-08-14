import React from "react";

const SmallButton = ({ text, onClick }) => {
  return (
    <button
      className="inline-flex items-center justify-center capitalize px-4 py-2 font-medium text-white transition hover:drop-shadow-2xl rounded shadow-xl bg-red hover:bg-red/70 duration-700"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default SmallButton;
