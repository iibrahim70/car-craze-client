import React from "react";
import useTitle from "../../hooks/useTitle";
import AllCarsTable from "./AllCarsTable";
import { useQuery } from "@tanstack/react-query";

const AllCars = () => {
  useTitle("All Cars");

  const {
    isLoading,
    error,
    data: allCars,
  } = useQuery(["allCars"], () =>
    fetch("https://car-craze-server-omega.vercel.app/cars?limit=20").then(
      (res) => res.json()
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
    <div className="mt-[104px] mb-10 md:mt-[144px] md:mb-20">
      <div className="overflow-x-auto">
        <table className="table w-full z-0">
          {/* table header */}
          <thead>
            <tr>
              <th>Seller Name</th>
              <th>Car Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>View Details</th>
            </tr>
          </thead>

          {/* table body */}
          <tbody>
            {allCars.map((cars) => (
              <AllCarsTable key={cars._id} cars={cars} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCars;
