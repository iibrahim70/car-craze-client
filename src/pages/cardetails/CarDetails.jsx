import React from "react";
import useTitle from "../../components/hooks/useTitle";
import { useLoaderData } from "react-router-dom";
import Button from "../../components/button/Button";

const CarDetails = () => {
  useTitle("car Details");
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
    <div className="container mt-[104px] mb-10 md:mt-[144px] md:mb-20">
      <div className="flex items-center gap-10 mb-5">
        <img className="w-[50%] h-full" src={image} alt="" />
        <div className="space-y-5">
          <h1 className="font-bold text-xl">{name}</h1>
          <div className="space-y-2">
            <p>Seller Name: {sellerName}</p>
            <p>Seller Email: {sellerEmail}</p>
            <p>Price: ${price}</p>
            <p>Rating: {rating}</p>
            <p>Availabe Quantity: {quantity}</p>
            <Button text="Order Now" />
          </div>
        </div>
      </div>
      <p>
        <span className="font-bold">Product Description:</span> {description}
      </p>
    </div>
  );
};

export default CarDetails;
