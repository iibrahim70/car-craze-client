import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const MyCarsTable = ({ item, handleDelete, handleUpdate }) => {
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
          <MdDelete
            onClick={() => handleDelete(_id)}
            className="w-6 h-6 cursor-pointer"
          />
        </td>

        <td>
          <FaRegEdit
            onClick={() => handleUpdate(_id)}
            className="w-5 h-5 cursor-pointer"
          />
        </td>
      </tr>
    </>
  );
};

export default MyCarsTable;
