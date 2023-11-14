import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import clsx from "clsx";
import Aos from "aos";
import SectionTitle from "./SectionTitle";
import CategoryCard from "./CategoryCard";
import "aos/dist/aos.css";

const ShopCategory = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [activeTab, setActiveTab] = useState("Sedan");

  const { isLoading, error, data } = useQuery(["category"], () =>
    axios
      .get("https://car-craze-server-omega.vercel.app/cars")
      .then((res) => res.data)
  );

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  if (isLoading || error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        {isLoading ? "Loading..." : `Error: ${error.message}`}
      </div>
    );
  }

  const filterData = data.filter((item) => item.category === activeTab);

  return (
    <section className="my-10 lg:my-20">
      <div data-aos="fade-down">
        <SectionTitle
          title="Explore by Category"
          description="Experience the thrill of speed with our Sports Cars, let your little ones' imagination soar with our Mini Fire Trucks, or patrol the streets in style with our Police Cars. Explore our unique categories and find the perfect vehicle to match your excitement and needs."
        />
      </div>

      <div className="flex gap-5">
        {["Sedan", "SUV", "Sports Car"].map((item) => (
          <button
            key={item}
            onClick={() => handleTabClick(item)}
            className={clsx(
              "shadow-xl px-5 py-3 text-black cursor-pointer font-medium rounded",
              activeTab === item ? "bg-viking text-white" : ""
            )}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 pt-5">
        {filterData.map((item, index) => (
          <CategoryCard key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ShopCategory;
