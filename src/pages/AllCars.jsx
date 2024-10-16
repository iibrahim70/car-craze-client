import useTitle from "../hooks/useTitle";
import { useQuery } from "@tanstack/react-query";
import AllCarsTable from "../components/AllCarsTable";
import axios from "axios";

const AllCars = () => {
  useTitle("All Cars");

  const { isLoading, error, data } = useQuery(["allCars"], () =>
    axios
      .get("https://car-craze-server-omega.vercel.app/cars?limit=20")
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
    <div className="mt-[104px] lg:mt-[144px] mb-10 lg:mb-20 section-wrapper">
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
            {data.map((item) => (
              <AllCarsTable key={item._id} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCars;
