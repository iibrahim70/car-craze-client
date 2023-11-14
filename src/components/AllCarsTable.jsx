import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";

const AllCarsTable = ({ item }) => {
  return (
    <>
      <tr>
        <td>{item?.sellerName}</td>
        <td>{item?.name}</td>
        <td>{item?.category}</td>
        <td>${item?.price}</td>
        <td>{item?.quantity}</td>

        <td>
          <Link to={`/car-details/${item?._id}`}>
            <HiArrowNarrowRight className="w-6 h-6 cursor-pointer text-[#1e212a]" />
          </Link>
        </td>
      </tr>
    </>
  );
};

export default AllCarsTable;
