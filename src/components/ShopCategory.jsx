import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { useQuery } from "@tanstack/react-query";
import Aos from "aos";
import "aos/dist/aos.css";
import SectionTitle from "./SectionTitle";

const ShopCategory = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [activeTab, setActiveTab] = useState("Sedan");

  const {
    isLoading,
    error,
    data: categoryData,
  } = useQuery(["category"], () =>
    fetch("https://car-craze-server-omega.vercel.app/cars").then((res) =>
      res.json()
    )
  );

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  let filteredData = categoryData;

  if (!isLoading && !error) {
    if (activeTab === "Sedan")
      filteredData = categoryData.filter((data) => data.category === "Sedan");

    if (activeTab === "SUV")
      filteredData = categoryData.filter((data) => data.category === "SUV");

    if (activeTab === "Sports Car")
      filteredData = categoryData.filter(
        (data) => data.category === "Sports Car"
      );
  }

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
    <section className="my-10 lg:my-20">
      <div data-aos="fade-down">
        <SectionTitle
          title="Explore by Category"
          description="Experience the thrill of speed with our Sports Cars, let your little ones' imagination soar with our Mini Fire Trucks, or patrol the streets in style with our Police Cars. Explore our unique categories and find the perfect vehicle to match your excitement and needs."
        />
      </div>

      <div className="flex gap-5">
        <div
          onClick={() => handleTabClick("Sedan")}
          className={`shadow-xl px-5 py-3 text-black cursor-pointer font-medium rounded ${
            activeTab === "Sedan" ? "bg-viking text-white" : ""
          }`}
        >
          Sedan
        </div>

        <div
          onClick={() => handleTabClick("SUV")}
          className={`shadow-xl px-5 py-3 text-black cursor-pointer font-medium rounded ${
            activeTab === "SUV" ? "bg-viking text-white" : ""
          }`}
        >
          Sport Utility Vehicle
        </div>

        <div
          onClick={() => handleTabClick("Sports Car")}
          className={`shadow-xl px-5 py-3 text-black cursor-pointer font-medium rounded ${
            activeTab === "Sports Car" ? "bg-viking text-white" : ""
          }`}
        >
          Sports Car
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 pt-5">
        {filteredData.map((item, index) => (
          <CategoryCard key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ShopCategory;
