import React from "react";
import useTitle from "../../hooks/useTitle";
import { useLoaderData } from "react-router-dom";
import Button from "../../components/button/Button";

const CarDetails = () => {
  useTitle("Car Details");
  const cars = useLoaderData();

  const {
    sellerName,
    sellerEmail,
    name,
    image,
    price,
    rating,
    quantity,
    description,
  } = cars;

  return (
    <div className="mt-[104px] lg:mt-[144px] mb-10 lg:mb-20 wrapper">
      <div className="flex flex-col lg:flex-row items-center gap-10 mb-5">
        <img
          className="w-full lg:w-[50%] h-full rounded"
          src={image}
          alt={image.name}
        />
        <div className="space-y-5">
          <h1 className="font-bold text-xl">{name}</h1>
          <div className="space-y-2">
            <p>Seller Name: {sellerName}</p>
            <p>Seller Email: {sellerEmail}</p>
            <p>Price: ${price}</p>
            <p>Rating: {rating}</p>
            <p>Availabe Quantity: {quantity}</p>
            <Button children="Order Now" size="small" />
          </div>
        </div>
      </div>
      <p className="text-justify">
        <span className="font-bold">Product Description:</span> {description}
      </p>
    </div>
  );
};

export default CarDetails;
