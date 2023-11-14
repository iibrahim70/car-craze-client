import { useEffect } from "react";
import { BsFillFuelPumpFill, BsFillPeopleFill, BsGear } from "react-icons/bs";
import Aos from "aos";
import Button from "./Button";
import "aos/dist/aos.css";

const ArrivalsCard = ({ item, index }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      className="rounded-md p-4 shadow-xl"
      data-aos={
        index % 3 === 0
          ? "fade-down-left"
          : index % 3 === 1
          ? "fade-up"
          : "fade-down-right"
      }
    >
      <h3 className="text-xl font-bold mb-2">{item.name}</h3>
      <p>{item.category}</p>

      <div className="my-4">
        <img
          src={item.image}
          alt={item.name}
          className="h-[180px] w-full rounded-md object-cover"
        />
      </div>

      <div className="flex items-center justify-between mb-4">
        <p className="flex items-center gap-2">
          <BsFillFuelPumpFill /> {item.mileage}
        </p>
        <p className="flex items-center gap-2">
          <BsGear /> {item.transmission}
        </p>
        <p className="flex items-center gap-2">
          <BsFillPeopleFill /> {item.seats}
        </p>
      </div>

      <div className="flex justify-between items-center">
        <h4 className="text-lg font-semibold">${item.price}</h4>
        <Button children="Buy Now" size="small" colors="secondary" />
      </div>
    </div>
  );
};

export default ArrivalsCard;
