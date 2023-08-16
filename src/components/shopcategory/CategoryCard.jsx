import React, { useEffect } from "react";
import Rating from "react-rating";
import Aos from "aos";
import Button, { buttonVariants } from "../button/Button";
import { Link } from "react-router-dom";

const CategoryCard = ({ item, index }) => {
  const { _id, name, image, price, rating, category } = item;

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
      <img className="h-[180px] w-full object-cover" src={image} alt="Toys" />
      <div className="p-5 space-y-2">
        <h3 className="text-xl font-bold">{name}</h3>
        <p>{category}</p>

        <div className="flex items-center">
          <Rating
            className="text-[24px]"
            initialRating={rating}
            readonly
            emptySymbol={<span className="text-gray-300">&#9734;</span>}
            fullSymbol={<span className="text-yellow-400">&#9733;</span>}
          />
          <span className="ml-2">{rating}</span>
        </div>

        <div className="flex justify-between items-center">
          <h4 className="text-lg font-semibold">${price}</h4>
          <Link
            to={`/car-details/${_id}`}
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
