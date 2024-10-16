import { cva } from "class-variance-authority";
import clsx from "clsx";

export const buttonVariants = cva(
  "inline-block text-center rounded active:scale-105 transition duration-300 ease-in-out font-medium",
  {
    variants: {
      colors: {
        primary: "bg-red hover:bg-red/90 text-white",
        secondary: "bg-viking hover:bg-viking/90 text-white",
        transparent:
          "bg-transparent hover:bg-black/10 text-black border border-black",
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

const Button = ({ onClick, colors, size, children }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(buttonVariants({ colors, size }))}
    >
      {children}
    </button>
  );
};

export default Button;
