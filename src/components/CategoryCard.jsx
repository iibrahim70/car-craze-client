import { useEffect } from "react";
import { Link } from "react-router-dom";
import { buttonVariants } from "./Button";
import Rating from "react-rating";
import Aos from "aos";
import "aos/dist/aos.css";

const CategoryCard = ({ item, index }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      className="shadow-xl"
      data-aos={
        index % 3 === 0
          ? "fade-up-left"
          : index % 3 === 1
          ? "fade-down"
          : "fade-up-right"
      }
    >
      <img
        className="h-[180px] w-full object-cover"
        src={item?.image}
        alt={item?.name}
      />
      <div className="p-5 space-y-2">
        <h3 className="text-xl font-bold">{item?.name}</h3>
        <p>{item?.category}</p>

        <div className="flex items-center">
          <Rating
            className="text-[24px]"
            initialRating={item?.rating}
            readonly
            emptySymbol={<span className="text-gray-300">&#9734;</span>}
            fullSymbol={<span className="text-yellow-400">&#9733;</span>}
          />
          <span className="ml-2">{item?.rating}</span>
        </div>

        <div className="flex justify-between items-center">
          <h4 className="text-lg font-semibold">${item?.price}</h4>
          <Link
            to={`/car-details/${item?._id}`}
            className={buttonVariants({ size: "small" })}
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
