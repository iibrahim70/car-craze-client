import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button className="inline-flex items-center justify-center capitalize lg:text-base lg:px-6 md:px-4 px-3 lg:py-3 py-2 font-medium text-white transition hover:drop-shadow-2xl rounded border-none shadow-xl md:mb-0 bg-[#2ECC71] hover:bg-green-500 duration-700" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
