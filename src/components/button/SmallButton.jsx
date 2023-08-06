import React from 'react';

const SmallButton = ({ text, onClick }) => {
  return (
    <button className="inline-flex items-center justify-center capitalize lg:text-base px-4 py-2 font-medium text-white transition hover:drop-shadow-2xl rounded border-none shadow-xl md:mb-0 bg-[#2ECC71] hover:bg-green-500 duration-700" onClick={onClick}>
      {text}
    </button>
  );
};

export default SmallButton;