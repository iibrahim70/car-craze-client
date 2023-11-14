import React from "react";

const SectionTitle = ({ title, description }) => {
  return (
    <div className="space-y-5 mb-10">
      <h2 className="text-center text-3xl lg:text-4xl font-bold">{title}</h2>
      <p className="text-justify xl:text-center xl:w-[60%] mx-auto">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
