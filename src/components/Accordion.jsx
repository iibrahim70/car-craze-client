import { useState } from "react";
import clsx from "clsx";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded overflow-hidden">
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-medium">{title}</h3>
        <svg
          className={clsx(
            "w-6 h-6 transition-transform",
            isOpen ? "transform rotate-180" : ""
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      <div
        className={clsx(
          "transition-height duration-300",
          isOpen ? "h-auto" : "h-0"
        )}
      >
        <div className="p-4">
          <p className="text-gray-600">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
