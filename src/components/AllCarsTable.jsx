import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";

const AllCarsTable = ({ item }) => {
  const { _id, sellerName, name, category, price, quantity } = item;

  return (
    <>
      <tr>
        <td>{sellerName}</td>
        <td>{name}</td>
        <td>{category}</td>
        <td>${price}</td>
        <td>{quantity}</td>

        <td>
          <Link to={`/car-details/${_id}`}>
            <HiArrowNarrowRight className="w-6 h-6 cursor-pointer text-[#1e212a]" />
          </Link>
        </td>
      </tr>
    </>
  );
};

export default AllCarsTable;
