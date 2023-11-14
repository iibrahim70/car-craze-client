import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import ArrivalsCard from "./ArrivalsCard";
import Aos from "aos";
import "aos/dist/aos.css";
import SectionTitle from "./SectionTitle";

const NewArrivals = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const {
    isLoading,
    error,
    data: newCars,
  } = useQuery(["newCars"], () =>
    fetch("https://car-craze-server-omega.vercel.app/new-cars").then((res) =>
      res.json()
    )
  );

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen">
        Error: {error.message}
      </div>
    );

  return (
    <section className="mt-10 lg:mt-20">
      <div data-aos="fade-down">
        <SectionTitle
          title="New Car Arrivals"
          description="Explore our latest collection of new car arrivals featuring stylish sedans, versatile SUVs, and exhilarating sports cars. Discover cutting-edge features,exceptional mileage, and top-notch designs for an unforgettable driving experience. Find the perfect car that matches your style and needs today!"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-10">
        {newCars.map((car, index) => (
          <ArrivalsCard key={index} car={car} index={index} />
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
