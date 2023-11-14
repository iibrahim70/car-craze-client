import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Aos from "aos";
import ArrivalsCard from "./ArrivalsCard";
import SectionTitle from "./SectionTitle";
import "aos/dist/aos.css";

const NewArrivals = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const { isLoading, error, data } = useQuery(["newCars"], () =>
    axios
      .get("https://car-craze-server-omega.vercel.app/new-cars")
      .then((res) => res.data)
  );

  if (isLoading || error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        {isLoading ? "Loading..." : `Error: ${error.message}`}
      </div>
    );
  }

  return (
    <section className="mt-10 lg:mt-20">
      <div data-aos="fade-down">
        <SectionTitle
          title="New Car Arrivals"
          description="Explore our latest collection of new car arrivals featuring stylish sedans, versatile SUVs, and exhilarating sports cars. Discover cutting-edge features,exceptional mileage, and top-notch designs for an unforgettable driving experience. Find the perfect car that matches your style and needs today!"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-10">
        {data.map((item, index) => (
          <ArrivalsCard key={item._id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
