import { useEffect } from "react";
import Aos from "aos";
import Button from "./Button";
import "aos/dist/aos.css";

const OurServices = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="grid md:grid-cols-2 gap-10 justify-between items-center">
      <div data-aos="zoom-in-up">
        <img src="https://i.ibb.co/ww9Q7t1/Lady.jpg" className="rounded" />
      </div>
      <div data-aos="zoom-in-down">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Explore Our Diverse Car Collection
        </h2>
        <div className="flex gap-5 mt-5">
          <Button children="Sports Car" colors="secondary" size="small" />
          <Button children="Sedan" colors="secondary" size="small" />
          <Button children="SUV" colors="secondary" size="small" />
        </div>
        <p className="mt-5 text-justify">
          Discover a wide range of cars, including sleek Sedans, versatile SUVs,
          and powerful Sports Cars. Whether you're looking for comfort, space,
          or adrenaline-pumping performance, our collection has the perfect ride
          to match your style and needs. Choose your dream car and hit the road
          in style and confidence.
        </p>
      </div>
    </div>
  );
};

export default OurServices;
