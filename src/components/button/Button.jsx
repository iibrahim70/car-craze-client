import React from "react";
import { cva } from "class-variance-authority";
import { Link } from "react-router-dom";
import clsx from "clsx";

const buttonVariants = cva(
  "inline-block text-center rounded active:scale-105 transition duration-300 ease-in-out text-white font-medium",
  {
    variants: {
      colors: {
        primary: "bg-red hover:bg-red/90",
        secondary: "bg-green hover:bg-green/90",
        purple: "bg-purple hover:bg-purple/90",
      },
      size: {
        default: "py-3 px-6",
        large: "py-3 w-full",
        small: "py-2 px-4",
      },
    },
    defaultVariants: {
      colors: "primary",
      size: "default",
    },
  }
);

const Button = ({ to, onClick, placehoder, colors, size }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={clsx(buttonVariants({ colors, size }))}
    >
      {placehoder}
    </Link>
  );
};

export default Button;
