import React from "react";
import { cva } from "class-variance-authority";
import { Link } from "react-router-dom";
import clsx from "clsx";

const buttonVariants = cva(
  "inline-block text-center rounded active:scale-105 transition duration-300 ease-in-out font-medium",
  {
    variants: {
      colors: {
        primary: "bg-red hover:bg-red/90 text-white",
        secondary: "bg-green hover:bg-green/90 text-white",
        transparent:
          "bg-transparent hover:bg-black/10 text-black border border-black",
        purple: "bg-purple hover:bg-purple/90 text-white",
      },
      size: {
        default: "py-3 px-6",
        full: "py-3 w-full",
        small: "py-2 px-4",
      },
    },
    defaultVariants: {
      colors: "primary",
      size: "default",
    },
  }
);

const Button = ({ to, onClick, type, colors, size, children }) => {
  return (
    <button
      to={to}
      onClick={onClick}
      type={type}
      className={clsx(buttonVariants({ colors, size }))}
    >
      {children}
    </button>
  );
};

export default Button;
