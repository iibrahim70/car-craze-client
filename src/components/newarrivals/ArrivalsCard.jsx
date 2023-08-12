import React from "react";
import { BsFillFuelPumpFill, BsFillPeopleFill, BsGear } from "react-icons/bs";
import SmallButton from "../button/SmallButton";

const ArrivalsCard = ({ car }) => {
  return (
    <div className="rounded-md p-4 shadow-xl">
      <h3 className="text-xl font-bold mb-2">{car.name}</h3>
      <p>{car.category}</p>

      <div className="my-4">
        <img
          src={car.image}
          alt={car.name}
          className="h-[180px] w-full rounded-md object-cover"
        />
      </div>

      <div className="flex items-center justify-between mb-4">
        <p className="flex items-center gap-2">
          <BsFillFuelPumpFill /> {car.mileage}
        </p>
        <p className="flex items-center gap-2">
          <BsGear /> {car.transmission}
        </p>
        <p className="flex items-center gap-2">
          <BsFillPeopleFill /> {car.seats}
        </p>
      </div>

      <div className="flex justify-between items-center">
        <h4 className="text-lg font-semibold">${car.price}</h4>
        <SmallButton text="Buy Now" />
      </div>
    </div>
  );
};

export default ArrivalsCard;
